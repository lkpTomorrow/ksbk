import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevCenterRoutingModule } from './dev-center-routing.module';
import { DevCenterComponent } from './dev-center.component';
import { IndexComponent } from './index/index.component';
import {DevCenterService} from "./dev-center.service";
import {NgaModule} from "../../theme/nga.module";
import { InterfaceClassificationComponent } from './interface-classification/interface-classification.component';
import { RoleInterfaceRulesComponent } from './role-interface-rules/role-interface-rules.component';
import { RoleMagComponent } from './role-mag/role-mag.component';
import { MenuMgmtComponent } from './menu-mgmt/menu-mgmt.component';

@NgModule({
  declarations: [DevCenterComponent, IndexComponent, InterfaceClassificationComponent, RoleInterfaceRulesComponent, RoleMagComponent, MenuMgmtComponent],
  imports: [
    CommonModule,
    DevCenterRoutingModule,
    NgaModule,
  ],
  providers:[
    DevCenterService,
  ]
})
export class DevCenterModule { }
