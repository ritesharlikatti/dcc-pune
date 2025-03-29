import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
// { IN case needed in future
//   id: createEventId(),
//   title: 'All-day event',
//   start: TODAY_STR,
// },
// {
//   id: createEventId(),
//   title: 'Timed event',
//   start: TODAY_STR + 'T00:00:00',
//   end: TODAY_STR + 'T03:00:00',
// },
// {
//   id: createEventId(),
//   title: 'Timed event',
//   start: TODAY_STR + 'T12:00:00',
//   end: TODAY_STR + 'T15:00:00',
// },
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Sunday Church Service',
    startTime: '10:30:00',
    endTime: '12:30:00',
    daysOfWeek: [0], // Sunday (0 = Sunday, 1 = Monday, etc.)
    color: '#3080a4', // Optional: Change color
  },
  // ✅ Recurring HFG Meeting (Every Wednesday, 7:00 PM)
  {
    id: createEventId(),
    title: 'HFG - Prashant Jagtap Residence',
    startTime: '19:00:00',
    endTime: '20:30:00', // Optional end time
    daysOfWeek: [3], // Wednesday (0 = Sunday, 3 = Wednesday)
    color: '#3080a4', // Optional: Change color
  },
  {
    id: createEventId(),
    title: 'HFG - Rathnam Residence',
    startTime: '10:30:00',
    endTime: '12:00:00', // Optional end time
    daysOfWeek: [6], // Wednesday (0 = Sunday, 3 = Wednesday)
    color: '#3080a4', // Optional: Change color
  },
  {
    id: createEventId(),
    title: 'HFG - Raju Residence',
    startTime: '09:30:00',
    endTime: '11:00:00', // Optional end time
    daysOfWeek: [6], // Wednesday (0 = Sunday, 3 = Wednesday)
    color: '#3080a4', // Optional: Change color
  },
];

export function createEventId() {
  return String(eventGuid++);
}
