import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../style/App.less';
import { Main } from './Main';
import { Menu } from './Menu';
import { Settings } from './Settings';
import { Stats } from './Stats';

export const App = () => {
  return <div id="app">
    <Switch>
      <Route path={['/', '/index.html']} exact={true} component={Main} />
      <Route path="/stats" exact={true} component={Stats} />
      <Route path="/settings" exact={true} component={Settings} />
    </Switch>
    <Menu />
  </div>;
};
