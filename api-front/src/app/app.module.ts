import {Injectable, LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {registerLocaleData} from "@angular/common";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import localeFr from '@angular/common/locales/fr';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarNativeDateFormatter, DateAdapter,
  DateFormatterParams
} from "angular-calendar";
registerLocaleData(localeFr)

class CustomDateFormatter extends CalendarNativeDateFormatter {
  @Injectable()
  public override weekViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat('fr-FR', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  }
  @Injectable()
  public override dayViewHour({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat('fr-FR', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }


}

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    CalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CustomDateFormatter
        }
      }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'fr-FR'},
    {provide: CalendarDateFormatter, useClass: CustomDateFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
