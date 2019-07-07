import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaMenuComponent } from './components/ba-menu/ba-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [
    BaMenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BaMenuComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ]
})
export class NgaModule { }
