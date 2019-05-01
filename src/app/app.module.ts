import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService} from './pages/service/register.service';
import {LoginService} from './pages/service/login.service';
import {SimplePageService} from './pages/service/simple-page.service';
import {SimplePage1Service} from './pages/service/simple-page1.service';
import {SimplePage2Service} from './pages/service/simple-page2.service';
import {SimplePage3Service} from './pages/service/simple-page3.service';
import {SimplePage4Service} from './pages/service/simple-page4.service';
import {SimplePage5Service} from './pages/service/simple-page5.service';
import {SimplePage6Service} from './pages/service/simple-page6.service';
import {SimplePage7Service} from './pages/service/simple-page7.service';
import {SimplePage8Service} from './pages/service/simple-page8.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';


FusionChartsModule.fcRoot(FusionCharts, Charts)
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FusionChartsModule,
    CommonModule, // required animations module
    ToastrModule.forRoot()

  ],
  providers: [RegisterService,LoginService,SimplePageService,SimplePage1Service,SimplePage2Service,SimplePage3Service,SimplePage4Service,SimplePage5Service,SimplePage6Service,SimplePage7Service,SimplePage8Service],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
