import * as React from 'react';
import { useEffect } from 'react';
import { ActivityButton } from './ActivityButton';

export const App = () => {
  const data = {
    config: {
      buttons: [{
        label: 'bad thought'
      }, {
        label: 'exercise',
        options: ['back', 'chest', 'legs']
      }, {
        label: 'running'
      }, {
        label: 'food'
      }, {
        label: 'wank'
      }, {
        label: 'poop'
      }, {
        label: 'programmed'
      },]
    },
    events: [],
  };

  useEffect(() => {
    document.querySelectorAll<HTMLDivElement>('.main .buttons')
      .forEach(e => e.style.minHeight = `${document.body.clientHeight}px`);
  }, []);

  return <div id="app">
    <div className="main">
      <div className="buttons">
        {data.config.buttons.map(b => <ActivityButton
          key={b.label}
          label={b.label}
          options={b.options || null} />)}
        <button className="dayStart">Day Start</button>
        <button className="dayEnd">Day End</button>
      </div>
      <div className="globalActions">
        <button className="add">Add</button>
      </div>
    </div>
  </div>;
};
