import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";

import {DeviceMgmtModule} from "./device-mgmt/device-mgmt.module";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', redirectTo: 'gyauth', pathMatch: 'full'},
  {path:'gyauth',loadChildren:'./auth/auth.module#AuthModule'},
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'device-mgmt', pathMatch: 'full'},
      {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
      {path: 'device-mgmt', loadChildren: './device-mgmt/device-mgmt.module#DeviceMgmtModule'},
      {path: 'basic-mgmt', loadChildren: './basic-mgmt/basic-mgmt.module#BasicMgmtModule'},
      {path: 'dev-center', loadChildren: './dev-center/dev-center.module#DevCenterModule'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
