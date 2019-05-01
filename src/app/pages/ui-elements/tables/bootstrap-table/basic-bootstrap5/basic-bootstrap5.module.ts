import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap5Component } from './basic-bootstrap5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap5Component,
    data: {
      breadcrumb: 'Address Change Request',
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
  declarations: [BasicBootstrap5Component]
})
export class BasicBootstrap5Module { }
