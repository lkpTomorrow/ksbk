import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * 折叠菜单
   */
  public isCollapsed = false;
  menuFold() {
    this.isCollapsed = !this.isCollapsed;
  }

}
