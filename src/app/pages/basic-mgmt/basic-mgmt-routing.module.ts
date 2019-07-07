import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMgmtComponent} from "./user-mgmt/user-mgmt.component";
import {RoleMgmtComponent} from "./role-mgmt/role-mgmt.component";
import {OrganMgmtComponent} from "./organ-mgmt/organ-mgmt.component";

const routes: Routes = [
  {path:'',redirectTo:'user-mgmt',pathMatch:'full'},
  {path:'user-mgmt',component:UserMgmtComponent},
  {path:'role-mgmt',component:RoleMgmtComponent},
  {path:'organ-mgmt',component:OrganMgmtComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicMgmtRoutingModule { }
