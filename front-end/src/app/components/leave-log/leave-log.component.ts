import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { ToHandleService } from '../../service/to-handle.service';
import { shallowEqualArrays } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-leave-log',
  templateUrl: './leave-log.component.html',
  styleUrls: ['./leave-log.component.css']
})
export class LeaveLogComponent implements OnInit {

  constructor(private handleService: ToHandleService) { }
  @Input() showr: boolean;
  @Input() user_id: string;
  handles: Handle[];
  ngOnInit() {
    //由服务去获取用户列表数据
    this.handleService.getHandlesByid(this.user_id).then(handles => this.handles = handles);
  }

}
