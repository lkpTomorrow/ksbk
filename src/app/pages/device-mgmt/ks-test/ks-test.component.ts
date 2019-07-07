import { Component, OnInit } from '@angular/core';
import {en_US, NzI18nService, zh_CN} from "ng-zorro-antd";

@Component({
  selector: 'app-ks-test',
  templateUrl: './ks-test.component.html',
  styleUrls: ['./ks-test.component.scss']
})
export class KsTestComponent implements OnInit {


  ngOnInit() {
  }
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
