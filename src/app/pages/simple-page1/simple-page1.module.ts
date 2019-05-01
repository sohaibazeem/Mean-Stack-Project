import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage1Component } from './simple-page1.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage1Component,
  data: {
    breadcrumb: 'Farrindon Road',
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
  declarations: [SimplePage1Component]
})
export class SimplePage1Module { }
