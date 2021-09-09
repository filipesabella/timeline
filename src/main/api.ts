interface Event {
  isoDate: string;
  label: string;
  metadata: string | null;
}

export interface Config {
  buttons: {
    label: string;
    options?: string[];
  }[];
}

const githubToken = process.env.GH_TOKEN;
const gistId = process.env.GIST_ID;

const configFileName = 'config';
const eventsFileName = 'events';
const url = `https://api.github.com/gists/${gistId}`;

export const api = {
  loadConfig: async (): Promise<Config> => {
    const json = await load();
    return JSON.parse(json.files[configFileName].content);
  },

  record: async (label: string, option?: string): Promise<void> => {
    // read before write 😬
    const json = await load();
    const events: Event[] =
      JSON.parse(json.files[eventsFileName].content || '[]');

    events.push({
      isoDate: toIsoString(new Date()),
      label,
      metadata: option || null,
    });

    store(events);
  }
};

async function load(): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

async function store(events: Event[]): Promise<void> {
  const resp = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `token ${githubToken}`,
    },
    body: JSON.stringify({
      description: '',
      files: {
        [eventsFileName]: {
          content: JSON.stringify(events, null, 2)
        }
      }
    }),
  });

  if (resp.status !== 200) {
    alert(`Error while saving ${resp.status}`);
    throw 'Could not upload data';
  }
}

function toIsoString(date: Date) {
  const tzo = -date.getTimezoneOffset();
  const tzoDifference = tzo >= 0 ? '+' : '-';
  const pad = (n: number) => {
    const normalised = Math.floor(Math.abs(n));
    return String(normalised).padStart(2, '0');
  };

  return `${date.getFullYear()}-` +
    `${pad(date.getMonth() + 1)}-` +
    `${pad(date.getDate())}T` +
    `${pad(date.getHours())}:` +
    `${pad(date.getMinutes())}:` +
    `${pad(date.getSeconds())}` +
    `${tzoDifference}${pad(tzo / 60)}:` +
    `${pad(tzo % 60)}`;
}
