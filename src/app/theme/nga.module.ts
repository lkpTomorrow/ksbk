import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaMenuComponent } from './components/ba-menu/ba-menu.component';

@NgModule({
  declarations: [
    BaMenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BaMenuComponent,
  ]
})
export class NgaModule { }
