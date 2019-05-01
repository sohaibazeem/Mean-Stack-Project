import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBootstrap1Component } from './basic-bootstrap1.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';


export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicBootstrap1Component,
    data: {
      breadcrumb: 'Farrindon East',
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
  declarations: [BasicBootstrap1Component]
})
export class BasicBootstrap1Module { }
