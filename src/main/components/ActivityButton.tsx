import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/ActivityButton.less';

interface Props {
  label: string;
  options: string[] | null;
}

export const ActivityButton = ({ label, options }: Props) => {
  const [showContext, setShowContext] = useState(false);
  const onClick = () => {
    setShowContext(true);
  };

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
    <div className={`context ${showContext ? 'shown' : 'hidden'}`}>
      <div className="actions">
        {!options && <button>Confirm</button>}
        {options && options.map(o =>
          <button key={o}>{o}</button>)}
      </div>
      <div className="otherActions">
        <button>Edit</button>
        <button>Move Up</button>
        <button>Add at different time</button>
        <button onClick={_ => setShowContext(false)}>Back</button>
      </div>
    </div>
  </div>;
};
