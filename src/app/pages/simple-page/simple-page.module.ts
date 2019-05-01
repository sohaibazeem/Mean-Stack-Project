import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePageComponent } from './simple-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const SimplePageRoutes: Routes = [{
  path: '',
  component: SimplePageComponent,
  data: {
    breadcrumb: 'Caledonian Road',
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
  declarations: [SimplePageComponent]
})
export class SimplePageModule { }
