import { Component } from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class BasicComponent {
  restrictOneOpen = false; 
  accordionTypeEmbed = false;
  menu = [
    {
      title: '数据接入',
      children: [{ title: '点位接入' }, { title: '协议配置' }],
    },
    {
      title: '通信管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '协议管理',
      open: true,
      children: [{ title: 'OPC通讯协议' }, { title: 'Modbus协议管理' }],
    },
  ];

  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
  }
  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          { title: 'Child Content 1' },
          { title: 'Child Content 2' },
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }
  log(...v) {
    console.log(...v);
  }
}
