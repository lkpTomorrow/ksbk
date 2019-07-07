import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from "./pages.component";

import {DeviceMgmtModule} from "./device-mgmt/device-mgmt.module";

const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'device-mgmt', pathMatch: 'full'},
      {path: 'device-mgmt', loadChildren: './device-mgmt/device-mgmt.module#DeviceMgmtModule'},
      {path: 'basic-mgmt', loadChildren: './basic-mgmt/basic-mgmt.module#BasicMgmtModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
