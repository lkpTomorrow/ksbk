import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {MenuMgmtComponent} from "./menu-mgmt/menu-mgmt.component";
import {RoleMagComponent} from "./role-mag/role-mag.component";
import {InterfaceClassificationComponent} from "./interface-classification/interface-classification.component";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'menu-mgmt', component: MenuMgmtComponent},
  {path: 'role-mag', component: RoleMagComponent},
  {path: 'interface-classification', component: InterfaceClassificationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevCenterRoutingModule { }
