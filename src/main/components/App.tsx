import * as React from 'react';
import { ActivityButton } from './ActivityButton';

export const App = () => {
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
    <div className="activityButtonContextMenu closed">
      <button>Edit</button>
      <button>Add at different time</button>
    </div>
  </div>;
};
