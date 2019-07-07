import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeviceMgmtRoutingModule} from './device-mgmt-routing.module';
import {DeviceMgmtComponent} from './device-mgmt.component';
import {DeviceListComponent} from './device-list/device-list.component';
import {OverViewComponent} from './over-view/over-view.component';
import {AlarmQueryComponent} from './alarm-query/alarm-query.component';
import {FormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NgaModule} from "../../theme/nga.module";
import { KsTestComponent } from './ks-test/ks-test.component';
import { DeviceAddEditComponent } from './device-list/device-add-edit/device-add-edit.component';

@NgModule({
  declarations: [
    DeviceMgmtComponent,
    DeviceListComponent,
    OverViewComponent,
    AlarmQueryComponent,
    KsTestComponent,
    DeviceAddEditComponent],
  imports: [
    CommonModule,
    DeviceMgmtRoutingModule,
    NgaModule,
  ]
})
export class DeviceMgmtModule {
}
