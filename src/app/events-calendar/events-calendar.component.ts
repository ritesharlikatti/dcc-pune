import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { fadeInAnimation } from 'src/animations/route-animations';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  EventInput,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.css'],
  animations: [fadeInAnimation],
})
export class EventsCalendarComponent implements OnInit {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'monthView,weekView,dayView', // Rename the view identifiers
    },
    views: {
      monthView: { type: 'dayGridMonth' },
      weekView: { type: 'timeGridWeek' },
      dayView: { type: 'timeGridDay' },
    },
    buttonText: {
      monthView: 'Month',
      weekView: 'Week',
      dayView: 'Day',
    },
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  //select: this.handleDateSelect.bind(this),
  //eventClick: this.handleEventClick.bind(this),
  //eventsSet: this.handleEvents.bind(this),
  /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */

  currentEvents: EventApi[] = [];
  nextEvent: EventInput | null = null;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.nextEvent = this.getNextEvent();
  }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  getNextEvent(): any {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentTime = today.getHours() * 60 + today.getMinutes(); // Convert current time to minutes

    // Get all upcoming events
    const upcomingEvents = INITIAL_EVENTS.map((event) => {
      const eventDay = event['daysOfWeek'] ? event['daysOfWeek'][0] : null;
      const eventTime = this.convertTimeToMinutes(event['startTime']);

      if (eventDay !== null) {
        // Calculate days until the event
        let daysUntilEvent = eventDay - currentDay;
        if (
          daysUntilEvent < 0 ||
          (daysUntilEvent === 0 && eventTime < currentTime)
        ) {
          daysUntilEvent += 7; // Move to next week's occurrence
        }
        return {
          ...event,
          eventDate: new Date(today.getTime() + daysUntilEvent * 86400000),
        };
      }
      return null;
    })
      .filter((event) => event !== null)
      .sort(
        (a, b) =>
          (a!.eventDate as Date).getTime() - (b!.eventDate as Date).getTime()
      );

    return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  }

  convertTimeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
