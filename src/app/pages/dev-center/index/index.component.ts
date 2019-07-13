import { Component, OnInit } from '@angular/core';
import {DevCenterService} from "../dev-center.service";

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

  }

}
