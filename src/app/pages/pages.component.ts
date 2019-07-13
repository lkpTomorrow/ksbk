import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMenus();
  }

  /**
   * 折叠菜单
   */
  public isCollapsed = false;
  menuFold() {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * 获取菜单
   */
  public menus=[];
  getMenus(){
    // 调用接口返回menus：
    this.menus=[
      {
        "menuId": "0", // 当前的菜单id
        "parentId": "-1",
        "type": 0, // 0,1,2 菜单，tab，按钮
        "name": "全部", // 菜单名称
        "iconCls": "", // icon,一级菜单有icon
        "path": "", // 路由
        "sort": 0, // 排序
        "layer": 0, //
        "childs": [
          {
            "menuId": "1",
            "parentId": "0",
            "type": 0,
            "name": "首页",
            "iconCls": "heat-map",
            "path": "pages/dev-center/index",
            "sort": 0,
            "layer": 0,
            "childs": [

            ]
          },
          {
            "menuId": "2",
            "parentId": "0",
            "type": 0,
            "name": "系统配置",
            "iconCls": "box-plot",
            "path": "",
            "sort": 0,
            "layer": 0,
            "childs": [
              {
                "menuId": "3",
                "parentId": "2",
                "type": 0,
                "name": "菜单管理",
                "iconCls": "lock",
                "path": "pages/dev-center/menu-mgmt",
                "sort": 0,
                "layer": 0,
                "childs": [

                ]
              },
              {
                "menuId": "4",
                "parentId": "2",
                "type": 0,
                "name": "角色管理",
                "iconCls": "user",
                "path": "pages/dev-center/role-mag",
                "sort": 0,
                "layer": 0,
                "childs": [

                ]
              },
              {
                "menuId": "5",
                "parentId": "2",
                "type": 0,
                "name": "接口分类",
                "iconCls": "file-markdown",
                "path": "pages/dev-center/interface-classification",
                "sort": 0,
                "layer": 0,
                "childs": [

                ]
              },
            ]
          }
        ]
      }


    ][0].childs;
  }
}
