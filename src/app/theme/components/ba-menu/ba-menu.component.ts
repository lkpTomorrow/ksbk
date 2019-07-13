import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ba-menu',
  templateUrl: './ba-menu.component.html',
  styleUrls: ['./ba-menu.component.scss']
})
export class BaMenuComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  @Input() isCollapsed: any; // 折叠菜单用的标记
  @Input() menus: any; // 折叠菜单用的标记
  ngOnInit() {
    console.log("传递进来的menus：", this.menus);
  }

  /*menus = [
    {path: '/pages/dashboard/index', name: '首页', hasChildren: false, icon: 'pushpin'},
    {
      path: '', name: '设备管理', hasChildren: true, icon: 'sound',
      children: [
        {path: '/pages/device-mgmt/device-list', name: '设备列表', hasChildren: false,},
        {path: '/pages/device-mgmt/over-view', name: '设备总览', hasChildren: false},
        {
          path: '', name: '三级菜单', hasChildren: true,
          children: [
            {path: '/pages/device-mgmt/alarm-query', name: '报警查询', hasChildren: false},
            {path: '/pages/device-mgmt/ks-test', name: '测试页面', hasChildren: false},
          ]
        },
      ]
    },
    {
      path: '', name: '基础管理', hasChildren: true, icon: 'skin',
      children: [
        {path: '/pages/basic-mgmt/role-mgmt', name: '角色管理', hasChildren: false},
        {path: '/pages/basic-mgmt/organ-mgmt', name: '机构管理', hasChildren: false},
        {path: '/pages/basic-mgmt/user-mgmt', name: '用户管理', hasChildren: false},
      ]
    },
  ]*/

  goToPath(item) {
    this.router.navigate([item.path]);
    /*if(item.hasChildren){

    }else{
      this.router.navigate([item.path]);
    }*/

  }
}
