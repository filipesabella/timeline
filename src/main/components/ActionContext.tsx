import * as React from 'react';
import '../../style/ActivityContext.less';

interface Props {
  options: string[] | null;
  save: (option?: string) => void;
  show: boolean;
  hide: () => void;
}

export const ActivityContext = ({ save, show, hide, options }: Props) => {
  return <div className={`context ${show ? 'shown' : 'hidden'}`}>
    <div className="actions">
      {!options && <button onClick={_ => save()}>Confirm</button>}
      {options && options.map(o =>
        <button key={o}
          onClick={_ => save(o)}>{o}</button>)}
    </div>
    <div className="otherActions">
      <button>Edit</button>
      <button>Move Up</button>
      <button>Add at different time</button>
      <button onClick={hide}>Back</button>
    </div>
  </div>;
};
