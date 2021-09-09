import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/ActivityButton.less';
import { api } from '../api';
import { ActivityContext } from './ActionContext';

interface Props {
  label: string;
  options: string[] | null;
}

export const ActivityButton = ({ label, options }: Props) => {
  const [showContext, setShowContext] = useState(false);

  const onClick = () => {
    setShowContext(true);
    history.pushState(null, '', `#${label}`);
  };

  const save = (option?: string) => {
    api.record(label, option);
    history.back();
  };

  useEffect(() => {
    const listener = function() {
      if (window.location.hash === '') setShowContext(false);
    };

    window.addEventListener('hashchange', listener);

    return () => {
      window.removeEventListener('hashchange', listener);
    };
  }, []);

  return <div className="activityButton">
    <button onClick={_ => onClick()}>{label}</button>
    <ActivityContext
      options={options}
      save={save}
      show={showContext} />
  </div>;
};
