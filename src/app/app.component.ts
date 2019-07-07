import { Component } from '@angular/core';
import {NzI18nService,zh_CN,en_US} from "ng-zorro-antd";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ksbk';

/**
 * 测试modal组件的语言：
 */
  isVisible = false;

  constructor(
    private nzI18nService: NzI18nService,
  ) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  /**
   * 切换语言
   */
  changeLang(lang){
    if(lang=='en'){
      this.nzI18nService.setLocale(en_US);
    }else {
      this.nzI18nService.setLocale(zh_CN);
    }
  }
}
