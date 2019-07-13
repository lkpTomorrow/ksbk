import { Component, OnInit } from '@angular/core';
import {DevCenterService} from "../dev-center.service";
import {AppCommon} from "../../../common/app-common";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private devCenterService:DevCenterService,
  ) { }

  ngOnInit() {
    AppCommon.userInfo={name:1,age:2};
  }

}
