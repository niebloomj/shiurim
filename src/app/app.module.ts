import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarDateFormatter, CalendarModule, CalendarMomentDateFormatter, DateAdapter, MOMENT} from 'angular-calendar';
import moment from 'moment-timezone';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import {CommonModule} from '@angular/common';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: momentAdapterFactory
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarMomentDateFormatter
        }
      }
    )
  ],
  providers: [
    {
      provide: MOMENT,
      useValue: moment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
