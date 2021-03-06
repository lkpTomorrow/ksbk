import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  constructor(
    private nzModalService: NzModalService,
  ) {
  }

  ngOnInit() {
  }

  // 设备名称
  deviceName = "";
  // 设备编号
  deviceCode = "";
  // 设备型号
  deviceTypes = [
    {
      value: '挖机value',
      label: '挖机',
      children: [
        {
          value: '大挖机value',
          label: '大挖机',
          children: [
            {
              value: '长臂大挖机value',
              label: '长臂大挖机',
              isLeaf: true
            }
          ]
        },
        {
          value: '小挖机value',
          label: '小挖机',
          isLeaf: true
        }
      ]
    },
    {
      value: '泵车value',
      label: '泵车',
      children: [
        {
          value: '车载泵value',
          label: '车载泵',
          children: [
            {
              value: '小车载泵value',
              label: '小车载泵',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];


  selectedDeviceType: any[] | null = null; // 选中格式：["挖机value", "大挖机value", "长臂大挖机value"]
  /**
   * 在线状态
   */
  onlineStatus = [
    {name: '在线', value: '1'},
    {name: '离线', value: '2'},
    {name: '未知', value: '3'},
  ];
  selectedOnlineStatus = null;

  // 开始日期
  startDate = null; // new Date();
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
  deviceTypeChange(e) {
    console.log("设备型号change：", e);
  }

  /**
   * 搜索函数
   */
  search(isFirstPage = false) {
    if (isFirstPage) {
      this.ksPage = 1;
      this.ksSize = 10;
    }
    let params = {
      page: this.ksPage || 1,
      size: this.ksSize || 10,
      deviceName:this.deviceName||'', // 设备名称
      deviceCode:this.deviceCode||'', // 设备编号
      deviceType:this.selectedDeviceType&&this.selectedDeviceType.join('/'), // 设备型号
      onlineStatus:this.selectedOnlineStatus, // 在线状态
      startDate:this.startDate, // 开始日期
      endDate:this.endDate, // 结束日期
    };
    console.log("search函数的参数：", params);
  }

  /**
   * 重置函数
   */
  reset() {
    // 置空搜索条件

  }


  /**
   * table的mock数据
   */
  listOfData = [
    {
      id:1,
      deviceName: 'name1',
      deviceCode: 'code1',
      deviceType: '',
      onlineStatus: '1', // 在线：1；离线：2；未知：3；
      startDate: 'New York No. 1 Lake Park',
      endDate: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];


  /***
   * 分页数据
   */
  ksTotal = 50;
  ksPage = 1;
  ksSize = 10;

  // 页数改变
  pageChange(e) {
    console.log('页数pageChange:', e);
    this.ksPage = e;
    this.search();
  }

  // size改变
  sizeChange(e) {
    console.log('大小sizeChange:', e);
    this.ksSize = e;
    this.search();
  }

  /**
   * 新增-弹框
   */
  addEditItem=null;
  add(){
    this.addEditItem=null;
  }
  /**
   * 编辑-弹框
   */
  public deviceAddEditFlag=false;
  edit(item) {
    this.addEditItem=item;
    this.deviceAddEditFlag=true;
  }
  // 关闭-编辑弹框
  addEditCancel(e) {
    this.deviceAddEditFlag=false;
    if(e=='ok'){
      this.search();
    }


  }

  /**
   * 删除-弹框
   */
  delete(item) {
    let that = this;
    /*this.nzModalService.confirm({
      nzTitle: '<i>确定要删除该条数据吗?</i>',
      nzContent: '<b>一些描述内容</b>',
      nzOnOk: () => {
        console.log('OK');
        that.deleteOk(item);
      }
    });*/
    this.nzModalService.confirm({
      nzTitle: '确定要删除该条数据吗?',
      nzContent: '<b style="color: red;">一些描述内容2</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('OK');
        that.deleteOk(item);
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
      nzIconType: 'user',
    });
  }

  deleteOk(item) {
    this.search();
  }


}
