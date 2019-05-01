import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap7Component } from './basic-bootstrap7.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap7Component,
    data: {
      breadcrumb: 'Customer Details',
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
  declarations: [BasicBootstrap7Component]
})
export class BasicBootstrap7Module { }
