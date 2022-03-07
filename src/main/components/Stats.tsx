import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../style/Stats.less';
import { api, Event } from '../api';
import { icons } from './icons';

export const Stats = () => {
  const [events, setEvents] = useState(null as Event[] | null);

  useEffect(() => {
    api.loadEvents().then(setEvents);
  }, []);

  return <div className="stats">
    {!events &&
      <div className="loadingAnimation">{icons.loadingAnimation}</div>}
    {events && <table>
      <tbody>
        {[...events].sort(() => 1).map(Event)}
      </tbody>
    </table>}
  </div>;
};

const Event = (event: Event) => {
  const label = event.label;
  const text = label === 'One time event'
    ? `OTE: ${JSON.parse(event.metadata!).Event}`
    : label;
  return <tr key={event.id}>
    <td>{text}</td>
    <td>{event.event_date}</td>
  </tr>;
};
