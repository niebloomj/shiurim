import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {CalendarDateFormatter, CalendarModule, CalendarMomentDateFormatter, DateAdapter, MOMENT} from 'angular-calendar';
import moment from 'moment-timezone';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';

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
    MatButtonModule,
    MatButtonToggleModule,
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
