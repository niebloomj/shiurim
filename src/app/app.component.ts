import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CalendarEvent, CalendarWeekViewBeforeRenderEvent} from 'angular-calendar';
import {ViewPeriod} from 'calendar-utils';
import moment from 'moment-timezone';
import {RRule} from 'rrule';

interface RecurringEvent {
  title: string;
  color: any;
  start: number;
  end: number;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}

moment.tz.setDefault('est');
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#3764cf',
    secondary: '#ffffff'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  viewDate: Date = new Date();
  recurringEvents: RecurringEvent[] = [
    {
      title: 'Gemara, R. Lisbon',
      color: colors.blue,
      start: 60 * 5 + 50,
      end: 60 * 6 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR]
      },
    },
    {
      title: 'Gemara, R. Lisbon',
      color: colors.blue,
      start: 60 * 6 + 50,
      end: 60 * 7 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.SU]
      },
    },
    {
      title: 'Gemara, R. Shaffer',
      color: colors.blue,
      start: 60 * 18 + 0,
      end: 60 * 19 + 0,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.SU]
      },
    },
    {
      title: 'Gemara, R. Shaffer',
      color: colors.blue,
      start: 60 * 19,
      end: 60 * 20,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.TU]
      },
    },
    {
      title: 'Samech Vav, R. Avraham Levitan',
      color: colors.blue,
      start: 60 * 20 + 30,
      end: 60 * 21 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.SU]
      },
    },
    {
      title: 'Understanding Tefillah, Slavatiscki',
      color: colors.blue,
      start: 60 * 21 + 15,
      end: 60 * 22 + 15,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]
      },
    },
    {
      title: 'Shir and Beer, R. Raices',
      color: colors.blue,
      start: 60 * 21 + 15,
      end: 60 * 22 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.WE]
      },
    },
    {
      title: 'Kolel Erev, YOUng Anash',
      color: colors.blue,
      start: 60 * 21,
      end: 60 * 22,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.TH]
      },
    },
    {
      title: 'Ayin Beis, R. Kaplan',
      color: colors.blue,
      start: 60 * 21,
      end: 60 * 22,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.SA]
      },
    },
    {
      title: 'Lady’s Chassidus, R. Lisbon',
      color: colors.red,
      start: 60 * 13,
      end: 60 * 14,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]
      },
    },
    {
      title: 'Lady’s Tanya, R. Lisbon',
      color: colors.red,
      start: 60 * 19 + 30,
      end: 60 * 20 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.WE]
      },
    },
    {
      title: 'Chassidus, R. Lisbon',
      color: colors.blue,
      start: 60 * 8 + 45,
      end: 60 * 9 + 30,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.SA]
      },
    },
  ];

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
