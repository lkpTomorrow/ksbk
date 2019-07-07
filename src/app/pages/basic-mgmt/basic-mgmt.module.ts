import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicMgmtRoutingModule } from './basic-mgmt-routing.module';
import { BasicMgmtComponent } from './basic-mgmt.component';
import { RoleMgmtComponent } from './role-mgmt/role-mgmt.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { OrganMgmtComponent } from './organ-mgmt/organ-mgmt.component';
import {NgaModule} from "../../theme/nga.module";

@NgModule({
  declarations: [BasicMgmtComponent, RoleMgmtComponent, UserMgmtComponent, OrganMgmtComponent],
  imports: [
    CommonModule,
    BasicMgmtRoutingModule,
    NgaModule,
  ]
})
export class BasicMgmtModule { }
