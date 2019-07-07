import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {NgaModule} from "../theme/nga.module";
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    PagesComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgaModule,
  ]
})
export class PagesModule { }
