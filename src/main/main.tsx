import '@fontsource/barlow';
import 'modern-css-reset';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../style/main.less';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
