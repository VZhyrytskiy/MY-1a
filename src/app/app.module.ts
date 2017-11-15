import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  HomeComponent, HomeTasksComponent, EnglishTasksComponent, TeachersComponent, MediaComponent,
  ContactsComponent, ScheduleComponent, ParentsCommitteeComponent, PageNotFoundComponent
} from './components';
import { EnglishHomeTasksService } from './components/english-tasks/english-home-tasks.service';

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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    EnglishHomeTasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
