import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage5Component } from './simple-page5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage5Component,
  data: {
    breadcrumb: 'Address Change Request',
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
  declarations: [SimplePage5Component]
})
export class SimplePage5Module { }
