import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CalendarEvent, CalendarWeekViewBeforeRenderEvent} from 'angular-calendar';
import {ViewPeriod} from 'calendar-utils';
import moment from 'moment-timezone';
import {RRule} from 'rrule';
import {recurringEvents} from './schedule';

moment.tz.setDefault('est');

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  viewDate: Date = new Date();

  recurringEvents = recurringEvents;

  calendarEvents: CalendarEvent[] = [];

  viewPeriod: ViewPeriod;

  constructor(private cdr: ChangeDetectorRef) {
  }

  updateCalendarEvents(
    viewRender:
      | CalendarWeekViewBeforeRenderEvent
  ): void {
    if (
      !this.viewPeriod ||
      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
      !moment(this.viewPeriod.end).isSame(viewRender.period.end)
    ) {
      this.viewPeriod = viewRender.period;
      this.calendarEvents = [];

      this.recurringEvents.forEach(event => {
        const rule: RRule = new RRule({
          ...event.rrule,
          dtstart: moment(viewRender.period.start)
            .startOf('day')
            .toDate(),
          until: moment(viewRender.period.end)
            .endOf('day')
            .toDate()
        });
        const {title, color} = event;
        rule.all().forEach(date => {
          console.log(moment(moment(date).add(event.start, 'minutes').toDate()).format('H:mm'));
          this.calendarEvents.push({
            title,
            color,
            start: moment(date).add(event.start, 'minutes').toDate(),
            end: moment(date).add(event.end, 'minutes').toDate()
          });
        });
      });
      this.cdr.detectChanges();
    }
  }

  moment(test) {
    return moment(test);
  }
}
