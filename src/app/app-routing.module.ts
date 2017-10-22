import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent, EnglishTasksComponent, HomeTasksComponent, MediaComponent, TeachersComponent,
  ContactsComponent, ScheduleComponent, ParentsCommitteeComponent, PageNotFoundComponent
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'parents-committee',
    component: ParentsCommitteeComponent
  },
  {
    path: 'lessons/english',
    component: EnglishTasksComponent
  },
  {
    path: 'lessons/read-write-math',
    component: HomeTasksComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'our-teachers',
    component: TeachersComponent
  },
  {
    path: 'photo',
    component: MediaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
