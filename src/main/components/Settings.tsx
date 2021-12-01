import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/Settings.less';
import { storage } from '../storage';

export const Settings = () => {
  const [gistId, setGistId] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  useEffect(() => {
    const { gistId, githubToken, supabaseUrl, supabaseKey } = storage.load();
    setGistId(gistId);
    setGithubToken(githubToken);
    setSupabaseUrl(supabaseUrl);
    setSupabaseKey(supabaseKey);
  }, []);

  const save = () => {
    storage.store({ gistId, githubToken, supabaseUrl, supabaseKey });
  };

  return <div className="settings">
    <p>Settings</p>
    <div className="fields">
      <label>Gist ID</label>
      <input
        type="text"
        value={gistId}
        onChange={e => setGistId(e.currentTarget.value)}></input>
      <label>Github Token</label>
      <input
        type="text"
        value={githubToken}
        onChange={e => setGithubToken(e.currentTarget.value)}></input>
      <label>Supabase URL</label>
      <input
        type="text"
        value={supabaseUrl}
        onChange={e => setSupabaseUrl(e.currentTarget.value)}></input>
      <label>Supabase Key</label>
      <input
        type="text"
        value={supabaseKey}
        onChange={e => setSupabaseKey(e.currentTarget.value)}></input>
    </div>
    <button onClick={_ => save()}>Save</button>
  </div>;
};

