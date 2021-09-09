import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/Settings.less';
import { SettingsForm } from './SettingsForm';

export const Settings = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const listener = () => setShowForm(window.location.hash !== '');
    window.addEventListener('hashchange', listener);
    return () => window.removeEventListener('hashchange', listener);
  }, []);

  const onClick = () => {
    setShowForm(true);
    history.pushState(null, '', '#settings');
  };

  return <div className="settings">
    <button onClick={onClick}>Settings</button>
    <SettingsForm show={showForm} />
  </div>;
};

