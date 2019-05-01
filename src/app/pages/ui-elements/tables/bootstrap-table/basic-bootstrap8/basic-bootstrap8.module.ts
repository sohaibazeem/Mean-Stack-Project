import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap8Component } from './basic-bootstrap8.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap8Component,
    data: {
      breadcrumb: 'Employee Documentation',
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
  declarations: [BasicBootstrap8Component]
})
export class BasicBootstrap8Module { }
