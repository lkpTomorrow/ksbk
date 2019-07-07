import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-device-add-edit',
  templateUrl: './device-add-edit.component.html',
  styleUrls: ['./device-add-edit.component.scss']
})
export class DeviceAddEditComponent implements OnInit {

  constructor() { }

  @Input() addEditItem:any;
  @Output() onAddEditCancel= new EventEmitter();
  public modalTitle="新增";

  public deviceName=''; // 设备名称
  public deviceCode=''; // 设备编号
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
  // 在线状态
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

  ngOnInit() {
    if(!this.addEditItem){
      this.modalTitle='新增';
    }else {
      this.modalTitle='编辑';
    }
  }


  /**
   * 确定
   */
  handleOk(){
    // 调用接口，处理逻辑，然后在关闭弹框，刷新列表
    if(!this.addEditItem){ // 调用新增接口

    }else{// 调用编辑接口

    }
    this.onAddEditCancel.emit('ok');
  }
  /**
   * 取消
   */
  handleCancel(){
    this.onAddEditCancel.emit('cancel');
  }
}
