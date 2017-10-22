import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  HomeComponent, EnglishTasksComponent, TeachersComponent, MediaComponent,
  ContactsComponent, ScheduleComponent, ParentsCommitteeComponent, PageNotFoundComponent
} from './components';
import { HomeTasksComponent } from './components/home-tasks/home-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ScheduleComponent,
    ParentsCommitteeComponent,
    ContactsComponent,
    TeachersComponent,
    MediaComponent,
    EnglishTasksComponent,
    HomeTasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
