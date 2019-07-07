import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceListComponent} from "./device-list/device-list.component";
import {OverViewComponent} from "./over-view/over-view.component";
import {AlarmQueryComponent} from "./alarm-query/alarm-query.component";
import {KsTestComponent} from "./ks-test/ks-test.component";

const routes: Routes = [
  {path:'',redirectTo:'device-list',pathMatch:'full'},
  {path:'device-list',component:DeviceListComponent},
  {path:'over-view',component:OverViewComponent},
  {path:'alarm-query',component:AlarmQueryComponent},
  {path:'ks-test',component:KsTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceMgmtRoutingModule { }
