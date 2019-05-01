import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap3Component } from './basic-bootstrap3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap3Component,
    data: {
      breadcrumb: 'Payments',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicRoutes),
    SharedModule,
  ],
  declarations: [BasicBootstrap3Component]
})
export class BasicBootstrap3Module { }
