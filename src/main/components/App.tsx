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
    const container = document.querySelector('.main .buttons')!;
    const maxHeight = document.body.clientHeight;

    const currentHeight =
      parseInt(
        getComputedStyle(document.querySelector('.activityButton')!)
          .height);

    let count = 0;
    while (container.clientHeight < maxHeight && count++ < 100) {
      container.querySelectorAll<HTMLDivElement>('.activityButton')
        .forEach(e => e.style.height = `${currentHeight + count}px`);
    }
  }, []);

  return <div id="app">
    <div id="ta" style={{ position: 'fixed', bottom: 0, backgroundColor: 'white' }}></div>
    <div className="main">
      <div className="buttons">
        {data.config.buttons.map(b => <ActivityButton
          key={b.label}
          label={b.label}
          options={b.options || null} />)}
      </div>
      <div className="globalActions">
        <button className="add">Add</button>
        <button className="dayStart">Day Start</button>
        <button className="dayEnd">Day End</button>
      </div>
    </div>
  </div>;
};
