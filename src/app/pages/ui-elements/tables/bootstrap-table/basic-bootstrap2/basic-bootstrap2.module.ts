import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap2Component } from './basic-bootstrap2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap2Component,
    data: {
      breadcrumb: 'Mayfair Park',
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
  declarations: [BasicBootstrap2Component]
})
export class BasicBootstrap2Module { }
