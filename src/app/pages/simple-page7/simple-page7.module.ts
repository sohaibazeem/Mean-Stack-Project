import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage7Component } from './simple-page7.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage7Component,
  data: {
    breadcrumb: 'Customer Details',
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
  declarations: [SimplePage7Component]
})
export class SimplePage7Module { }
