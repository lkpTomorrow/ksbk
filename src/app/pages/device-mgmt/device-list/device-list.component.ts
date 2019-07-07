import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // 设备名称
  deviceName="";
  // 设备编号
  deviceCode="";
  // 设备型号
  deviceTypes=[
    {
      value: '浙江value',
      label: '浙江',
      children: [
        {
          value: '杭州value',
          label: '杭州',
          children: [
            {
              value: '西湖value',
              label: '西湖',
              isLeaf: true
            }
          ]
        },
        {
          value: '宁波value',
          label: '宁波',
          isLeaf: true
        }
      ]
    },
    {
      value: '江苏value',
      label: '江苏',
      children: [
        {
          value: '南京value',
          label: '南京',
          children: [
            {
              value: '中华门value',
              label: '中华门',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];



  selectedDeviceType: any[] | null = null;
  /**
   * 在线状态
   */
  onLineStatus=[
    {name:'在线',value:'1'},
    {name:'离线',value:'2'},
    {name:'未知',value:'3'},
  ];
  selectedOnLineStatus=null;

  // 开始日期
  StartDate = null; // new Date();
  // 结束日期
  endDate = null; // new Date();

  // 联动日期
  rangeDate = []; // [ new Date(), addDays(new Date(), 3) ];
  /**
   * 日期改变
   */
  onChange(result: Date): void {
    console.log('日期onChange: ', result);
  }

  /**
   * 设备型号change函数
   */
  deviceTypeChange(e){
    console.log("设备型号change：",e);
  }

  /**
   * 搜索函数
   */
  search(isFirstPage=false){
    if(isFirstPage){

    }
    let params={

    };
  }

  /**
   * 重置函数
   */
  reset(){

  }
}
