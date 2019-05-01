import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage8Component } from './simple-page8.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage8Component,
  data: {
    breadcrumb: 'Employee Documentation',
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
  declarations: [SimplePage8Component]
})
export class SimplePage8Module { }
