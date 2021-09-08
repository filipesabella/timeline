interface Data {
  events: {
    isoDate: string;
    label: string;
    metadata: string | null;
  }[];
  config: {
    buttons: {
      label: string;
      options?: string[];
    }[]
  };
}

const githubToken = process.env.GH_TOKEN;
const gistId = process.env.GIST_ID;

const fileName = 'timeline';
const url = `https://api.github.com/gists/${gistId}`;

export const api = {
  load: async (): Promise<Data> => {
    const response = await fetch(url);
    const json = await response.json();
    return JSON.parse(json.files[fileName].content);

  },

  record: async (label: string, option?: string): Promise<void> => {
    // read before write 😬
    const data = await api.load();
    data.events.push({
      isoDate: new Date().toISOString(),
      label,
      metadata: option || null,
    });
    store(data);
  }
};


async function store(content: Data): Promise<void> {
  const resp = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `token ${githubToken}`,
    },
    body: JSON.stringify({
      description: '',
      files: {
        [fileName]: {
          content: JSON.stringify(content, null, 2)
        }
      }
    }),
  });

  if (resp.status !== 200) {
    alert(`Error while saving ${resp.status}`);
    throw 'Could not upload data';
  }
}

(window as any).api = api;
