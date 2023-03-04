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

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [editedEvent, setEditedEvent] = useState('');

  const save = async () => {
    const e = JSON.parse(editedEvent);
    await api.update(e)
    setSelectedEvent(null);
  };

  return <div className="stats">
    {!events &&
      <div className="loadingAnimation">{icons.loadingAnimation}</div>}
    {events && <table>
      <tbody>
        {[...events].sort(() => 1).map(EventComponent(setSelectedEvent))}
      </tbody>
    </table>}
    {selectedEvent && <div className="edit-dialog">
      <div className="container">
        <textarea
          defaultValue={JSON.stringify(selectedEvent, null, 2)}
          onChange={e => setEditedEvent(e.target.value)} />
        <div className="actions">
          <button className="close"
            onClick={() => setSelectedEvent(null)}>close</button>
          <button className="save"
            onClick={save}>save</button>
        </div>
      </div>
    </div>}
  </div>;
};

const specificParsers: { [key: string]: (e: Event) => string } = {
  'One time event': (e: Event) => `OTE: ${JSON.parse(e.metadata!).Event}`,
  'exercise': (e: Event) => `Exercise: ${e.metadata}`,
  'food': (e: Event) => `Food: ${e.metadata}`,
  'remedio': (e: Event) => `Remedio: ${e.metadata}`,
};

const EventComponent = (setSelectedEvent: (e: Event) => void) =>
  (event: Event) => {
    const label = event.label;
    const text = specificParsers[label] ? specificParsers[label](event) : label;
    return <tr key={event.id}>
      <td>{text}</td>
      <td className="date">{formatDate(event.event_date)}</td>
      <td className="actions">
        <button onClick={() => setSelectedEvent(event)}>edit</button>
      </td>
    </tr>;
  };

function formatDate(s: string): string {
  const d = new Date(s);
  return [
    d.getFullYear(),
    '-',
    String(d.getMonth() + 1).padStart(2, '0'),
    '-',
    String(d.getDate()).padStart(2, '0'),
    ' ',
    String(d.getHours()).padStart(2, '0'),
    ':',
    String(d.getMinutes()).padStart(2, '0'),
  ].join('');
}
