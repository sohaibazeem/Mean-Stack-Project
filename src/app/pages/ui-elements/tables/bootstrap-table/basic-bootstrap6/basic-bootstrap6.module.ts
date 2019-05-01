import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap6Component } from './basic-bootstrap6.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap6Component,
    data: {
      breadcrumb: 'Employee Details',
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
  declarations: [BasicBootstrap6Component]
})
export class BasicBootstrap6Module { }
