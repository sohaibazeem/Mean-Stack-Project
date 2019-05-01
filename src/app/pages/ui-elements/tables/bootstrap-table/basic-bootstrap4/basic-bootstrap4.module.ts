import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap4Component } from './basic-bootstrap4.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap4Component,
    data: {
      breadcrumb: 'Project Details',
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
  declarations: [BasicBootstrap4Component]
})
export class BasicBootstrap4Module { }
