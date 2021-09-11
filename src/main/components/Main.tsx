import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/Main.less';
import { api, Config } from '../api';
import { ActivityButton } from './ActivityButton';

export const Main = () => {
  const [config, setConfig] = useState(null as Config | null);

  useEffect(() => {
    api.loadConfig().then(setConfig);
  }, []);

  return <div className="main">
    {!config && <div className="loadingAnimation">{loadingAnimation}</div>}
    {config && <div className="buttons">
      {config.buttons.map(b => <ActivityButton
        key={b.label}
        config={b} />)}
    </div>}
  </div>;
};

const loadingAnimation = <svg viewBox="0 0 100 100">
  <rect x="15" y="15" width="30" height="30" rx="3" ry="3">
    <animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.8333333333333333s"></animate>
    <animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.3333333333333333s"></animate>
  </rect><rect x="15" y="15" width="30" height="30" rx="3" ry="3">
    <animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-1.1666666666666667s"></animate>
    <animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.6666666666666666s"></animate>
  </rect><rect x="15" y="15" width="30" height="30" rx="3" ry="3">
    <animate attributeName="x" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="-0.5s"></animate>
    <animate attributeName="y" dur="2s" repeatCount="indefinite" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" values="15;55;55;55;55;15;15;15;15" begin="0s"></animate>
  </rect>
</svg>;
