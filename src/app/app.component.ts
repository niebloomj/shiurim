import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import 'fullcalendar';
import * as $ from 'jquery';
// @ts-ignore
import {Options} from 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterViewInit, OnInit {

  calendarOptions: Options;
  events: Array<any> = [
    {
      'events': [
        {
          title: 'Gemara, R. Lisbon',
          start: '5:50:00',
          end: '6:30:00',
          dow: [1, 2, 3, 4, 5]
        },
        {
          title: 'Gemara, R. Lisbon',
          start: '6:50',
          end: '7:30',
          dow: [0]
        },
        {
          title: 'Gemara, R. Shaffer',
          start: '18:00',
          end: '19:00',
          dow: [0]
        },
        {
          title: 'Gemara, R. Shaffer',
          start: '19:00',
          end: '20:00',
          dow: [2]
        },
        {
          title: 'Samech Vav, R. Avraham Levitan',
          start: '20:30',
          end: '21:30',
          dow: [0]
        },
        {
          title: 'Understanding Tefillah - Slavatiscki',
          start: '21:15',
          end: '22:15',
          dow: [1]
        },
        {
          title: 'Shir and Beer, R. Raices',
          start: '21:15',
          end: '22:30',
          dow: [3]
        },
        {
          title: 'Kolel Erev, YOUng Anash',
          start: '21:00',
          end: '22:00',
          dow: [4]
        },
        {
          title: 'Ayin Beis, R. Kaplan',
          start: '21:00',
          end: '22:00',
          dow: [6]
        },
      ]
    },
    {
      'events': [
        {
          title: 'Lady’s Chassidus, R. Lisbon',
          start: '13:00',
          end: '14:00',
          dow: [1]
        },
        {
          title: 'Lady’s Tanya, R. Lisbon',
          start: '19:30',
          end: '20:30',
          dow: [3]
        }
      ],
      'color': 'pink',
      'textColor': 'green'
    }
  ];

  ngAfterViewChecked(): void {
    $('#calendar').fullCalendar('rerenderEvents');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('#calendar').fullCalendar('rerenderEvents');
    }, 100);
  }

  ngOnInit(): void {
    // @ts-ignore
    this.calendarOptions = {
      editable: false,
      eventLimit: false,
      defaultView: 'agendaWeek',
      minTime: '05:00:00',
      maxTime: '23:00:00',
      allDaySlot: false,
      header: false,
      slotDuration: '0:30',
      slotLabelInterval: '1:00',
      height: 650,
      ratio: 2,
      // agendaEventMinHeight: 70,
      nowIndicator: true,
      eventSources: this.events
    };

    $('#calendar').fullCalendar(this.calendarOptions);
  }
}
