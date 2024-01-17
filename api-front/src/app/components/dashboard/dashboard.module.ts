import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';

import  { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RoomManagerComponent } from './room-manager/room-manager.component';
import { RessourceManagerComponent } from './ressource-manager/ressource-manager.component';
import { GroupManagerComponent } from './group-manager/group-manager.component';
import { SemestreComponent } from './semestre/semestre.component';
import { EquipementManagerComponent } from './equipement-manager/equipement-manager.component';

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    DashboardComponent,
    CreateUsersComponent,
    CalendarComponent,
    RoomManagerComponent,
    RessourceManagerComponent,
    GroupManagerComponent,
    SemestreComponent,
    EquipementManagerComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    AsyncPipe,
  



  ]
})
export class DashboardModule { }
