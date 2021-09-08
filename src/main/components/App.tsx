import * as React from 'react';
import { ActivityButton } from './ActivityButton';

export const App = () => {
  const data = {
    config: {
      buttons: [{
        label: 'water'
      }, {
        label: 'exercise',
        options: ['back', 'chest', 'legs']
      }, {
        label: 'cook'
      }, {
        label: 'water'
      }, {
        label: 'exercise'
      }, {
        label: 'cook'
      },]
    },
    events: [],
  };


  const tmp = () => {
    document.querySelectorAll('.activityButtonContextMenu')
      .forEach(e => e.classList.remove('shown'));
    document.querySelectorAll('.overlay')
      .forEach(e => e.classList.remove('shown'));
  };

  return <div id="app">
    <div className="main">
      <div className="buttons">
        {data.config.buttons.map(b => <ActivityButton
          label={b.label}
          options={b.options || null} />)}
      </div>
      <div className="globalActions">
        <button className="add">Add</button>
        <button className="dayStart">Day Start</button>
        <button className="dayEnd">Day End</button>
      </div>
    </div>
    <div className="overlay"
      onClick={tmp}></div>
    <div className="activityButtonContextMenu closed">
      <button>Edit</button>
      <button>Move Up</button>
      <button>Add at different time</button>
    </div>
  </div>;
};
