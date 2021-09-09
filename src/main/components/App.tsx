import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/App.less';
import { api, Config } from '../api';
import { ActivityButton } from './ActivityButton';
import { Settings } from './Settings';

export const App = () => {
  const [config, setConfig] = useState(null as Config | null);

  useEffect(() => {
    api.loadConfig().then(setConfig);
  }, []);

  useEffect(() => {
    const maxHeight = Math.min(document.documentElement.clientHeight,
      window.innerHeight || Number.MAX_SAFE_INTEGER);
    document.querySelectorAll<HTMLDivElement>('.main .buttons')
      .forEach(e => e.style.minHeight = `${maxHeight}px`);
  }, [config]);

  return <div id="app">
    {!config && <div>Loading...</div>}
    <div className="main">
      {config && <div className="buttons">
        {config.buttons.map(b => <ActivityButton
          key={b.label}
          config={b} />)}
      </div>}
      <div className="globalActions">
        <Settings />
      </div>
    </div>
  </div>;
};
