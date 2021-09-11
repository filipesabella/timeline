import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/Settings.less';
import { storage } from '../storage';

export const Settings = () => {
  const [gistId, setGistId] = useState('');
  const [githubToken, setGithubToken] = useState('');

  useEffect(() => {
    const { gistId, githubToken } = storage.load();
    setGistId(gistId);
    setGithubToken(githubToken);
  }, []);

  const save = () => {
    storage.store({ gistId, githubToken });
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
    </div>
    <button onClick={_ => save()}>Save</button>
  </div>;
};

