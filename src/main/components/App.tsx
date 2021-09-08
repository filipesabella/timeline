import * as React from 'react';
import { ActivityButton } from './ActivityButton';

export const App = () => {
  const tmp = () => {
    document.querySelectorAll('.activityButtonContextMenu')
      .forEach(e => e.classList.remove('shown'));
    document.querySelectorAll('.overlay')
      .forEach(e => e.classList.remove('shown'));
  };

  return <div id="app">
    <div className="main">
      <div className="buttons">
        <ActivityButton label="water" action={() => { }} />
        <ActivityButton label="exercised" action={() => { }} />
        <ActivityButton label="cooked" action={() => { }} />
        <ActivityButton label="water" action={() => { }} />
        <ActivityButton label="exercised" action={() => { }} />
        <ActivityButton label="cooked" action={() => { }} />
      </div>
      <button className="add">Add</button>
    </div>
    <div className="overlay"
      onClick={tmp}></div>
    <div className="activityButtonContextMenu closed">
      <button>Edit</button>
      <button>Add at different time</button>
    </div>
  </div>;
};
