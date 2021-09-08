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

  const save = (option?: string) => {
    api.record(label, option);
  };

  const onClick = () => setShowContext(true);

  useEffect(() => {
    const maxHeight = Math.min(document.documentElement.clientHeight,
      window.innerHeight || Number.MAX_SAFE_INTEGER);
    document.querySelectorAll<HTMLDivElement>('.activityButton .actions')
      .forEach(e => e.style.minHeight = `${maxHeight}px`);
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLDivElement>('.activityButton .context')
      .forEach(e => e.scrollTo(0, 0));
  }, [showContext]);

  return <div className="activityButton">
    <button onClick={onClick}>{label}</button>
    <ActivityContext
      options={options}
      save={save}
      show={showContext}
      hide={() => setShowContext(false)} />
  </div>;
};
