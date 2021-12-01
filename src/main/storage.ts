export interface Settings {
  gistId: string;
  githubToken: string;
  supabaseUrl: string;
  supabaseKey: string;
}

const localStorageKey = 'timeline_settings';

export const storage = {
  load: (): Settings => {
    const settings = JSON.parse(
      localStorage.getItem(localStorageKey) || '{}');
    return {
      gistId: '',
      githubToken: '',
      supabaseUrl: '',
      supabaseKey: '',
      ...settings,
    };
  },

  store: (settings: Settings): void => {
    localStorage.setItem(localStorageKey, JSON.stringify(settings));
  }
};
