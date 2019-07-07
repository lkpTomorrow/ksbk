import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ba-menu',
  templateUrl: './ba-menu.component.html',
  styleUrls: ['./ba-menu.component.scss']
})
export class BaMenuComponent implements OnInit {

  constructor() { }

  @Input() isCollapsed:any; // 折叠菜单用的标记
  ngOnInit() {
  }

}
