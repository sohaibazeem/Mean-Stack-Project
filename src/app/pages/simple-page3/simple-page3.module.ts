import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage3Component } from './simple-page3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage3Component,
  data: {
    breadcrumb: 'Payments',
    icon: 'icofont icofont-file-document bg-c-pink'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SimplePageRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SimplePage3Component]
})
export class SimplePage3Module { }
