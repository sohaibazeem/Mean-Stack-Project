import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePage2Component } from './simple-page2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePage2Component,
  data: {
    breadcrumb: 'Mairfair park',
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
  declarations: [SimplePage2Component]
})
export class SimplePage2Module { }
