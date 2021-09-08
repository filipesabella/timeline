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

      document.querySelectorAll('.activityButtonContextMenu')
        .forEach(e => e.classList.add('shown'));
      document.querySelectorAll('.overlay')
        .forEach(e => e.classList.add('shown'));
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
