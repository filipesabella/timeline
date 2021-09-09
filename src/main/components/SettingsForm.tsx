import * as React from 'react';
import { useEffect, useState } from 'react';
import { storage } from '../storage';

interface Props {
  show: boolean;
}

export const SettingsForm = ({ show }: Props) => {
  const [gistId, setGistId] = useState('');
  const [githubToken, setGithubToken] = useState('');

  useEffect(() => {
    const { gistId, githubToken } = storage.load();
    setGistId(gistId);
    setGithubToken(githubToken);
  }, []);

  const save = () => {
    storage.store({ gistId, githubToken });
    // remove '#settings' from the url and reload
    window.location.href = window.location.href.split('#')[0];
  };

  return <div className={`form ${show && 'shown'}`}>
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

