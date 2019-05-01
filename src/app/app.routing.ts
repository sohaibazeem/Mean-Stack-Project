import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import {WithSocialComponent} from './pages/authentication/registration/with-social/with-social.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        loadChildren: './pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'bootstrap-table1',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap1/basic-bootstrap1.module#BasicBootstrap1Module',
      },{
        path: 'bootstrap-table2',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap2/basic-bootstrap2.module#BasicBootstrap2Module',
      },{
        path: 'bootstrap-table3',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap3/basic-bootstrap3.module#BasicBootstrap3Module',
      },{
        path: 'bootstrap-table4',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap4/basic-bootstrap4.module#BasicBootstrap4Module',
      },{
        path: 'bootstrap-table5',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap5/basic-bootstrap5.module#BasicBootstrap5Module',
      },{
        path: 'bootstrap-table6',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap6/basic-bootstrap6.module#BasicBootstrap6Module',
      },{
        path: 'bootstrap-table7',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap7/basic-bootstrap7.module#BasicBootstrap7Module',
      },{
        path: 'bootstrap-table8',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap8/basic-bootstrap8.module#BasicBootstrap8Module',
      },{
        path: 'map',
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user',
        loadChildren: './pages/user/profile/profile.module#ProfileModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      },{
        path:'simple-page1',
        loadChildren: './pages/simple-page1/simple-page1.module#SimplePage1Module'

      },{
        path:'simple-page2',
        loadChildren: './pages/simple-page2/simple-page2.module#SimplePage2Module'

      },{
        path:'simple-page3',
        loadChildren: './pages/simple-page3/simple-page3.module#SimplePage3Module'
      },{
        path:'simple-page4',
        loadChildren: './pages/simple-page4/simple-page4.module#SimplePage4Module'
      },{
        path:'simple-page5',
        loadChildren: './pages/simple-page5/simple-page5.module#SimplePage5Module'
      },{
        path:'simple-page6',
        loadChildren: './pages/simple-page6/simple-page6.module#SimplePage6Module'
      },{
        path:'simple-page7',
        loadChildren: './pages/simple-page7/simple-page7.module#SimplePage7Module'
      },{
        path:'simple-page8',
        loadChildren: './pages/simple-page8/simple-page8.module#SimplePage8Module'
      },{
        path: 'admin',
        loadChildren: './layout/auth/auth.component',
        canActivate: [AuthGuard]
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  // {
  //   path: 'register',
  //   component:WithSocialComponent
  // }
];
