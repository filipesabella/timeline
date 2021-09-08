import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/App.less';
import { api } from '../api';
import { ActivityButton } from './ActivityButton';

export const App = () => {
  const [data, setData] = useState(null as any);

  useEffect(() => {
    api.load().then(setData);
  }, []);

  useEffect(() => {
    const maxHeight = Math.min(document.documentElement.clientHeight,
      window.innerHeight || Number.MAX_SAFE_INTEGER);
    document.querySelectorAll<HTMLDivElement>('.main .buttons')
      .forEach(e => e.style.minHeight = `${maxHeight}px`);
  }, [data]);

  return <div id="app">
    {!data && <div>Loading...</div>}
    {data && <div className="main">
      <div className="buttons">
        {data.config.buttons.map(b => <ActivityButton
          key={b.label}
          label={b.label}
          options={b.options || null} />)}
        <button className="dayStart">Day Start</button>
        <button className="dayEnd">Day End</button>
      </div>
      <div className="globalActions">
        <button>Add</button>
        <button>Settings</button>
      </div>
    </div>}
  </div>;
};
