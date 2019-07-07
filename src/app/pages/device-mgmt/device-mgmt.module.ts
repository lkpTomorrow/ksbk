import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceMgmtRoutingModule } from './device-mgmt-routing.module';
import { DeviceMgmtComponent } from './device-mgmt.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { OverViewComponent } from './over-view/over-view.component';
import { AlarmQueryComponent } from './alarm-query/alarm-query.component';

@NgModule({
  declarations: [DeviceMgmtComponent, DeviceListComponent, OverViewComponent, AlarmQueryComponent],
  imports: [
    CommonModule,
    DeviceMgmtRoutingModule
  ]
})
export class DeviceMgmtModule { }
