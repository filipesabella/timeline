interface Data {
  events: string[];
  config: {
    buttons: {
      label: string;
      options?: string[];
    }[]
  };
}

export const api = {
  load: async (): Promise<Data> => {
    const url = `https://api.github.com/gists/${process.env.GIST_ID}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.files.timeline.content);
    return JSON.parse(json.files.timeline.content);

  },
  record: (label: string, option?: string): void => {
    console.log('saving...', label, option);
  }
};
