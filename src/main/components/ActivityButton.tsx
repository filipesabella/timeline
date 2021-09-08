import * as React from 'react';
import { useState } from 'react';

interface Props {
  label: string;
  action: () => void;
}

export const ActivityButton = ({ label, action }: Props) => {
  const [timeoutId, setTimeoutId] = useState(0);
  const [wasLongPress, setWasLongPress] = useState(false);

  const touchStart = () => {
    setTimeoutId(setTimeout(() => {
      setWasLongPress(true);

      // todo show popup (Insert At Different Time | Edit)
    }, 1000));
  };

  const touchEnd = () => {
    clearTimeout(timeoutId);
    setWasLongPress(false);
    !wasLongPress && action();
  };

  return <button
    onMouseDown={touchStart}
    onMouseUp={touchEnd}
    onTouchStart={touchStart}
    onTouchEnd={touchEnd}>{label}</button>;
};
