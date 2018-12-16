import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { InquireService } from '../../service/inquire.service';

@Component({
  selector: 'app-leave-log',
  templateUrl: './leave-log.component.html',
  styleUrls: ['./leave-log.component.css']
})
export class LeaveLogComponent implements OnInit {

  constructor(private inquireService: InquireService) { }
  @Input() showr: boolean;
  @Input() user_id: string;
  handles: Handle[];
  ngOnInit() {
    //由服务去获取用户列表数据
    this.inquireService.inquireLeaveInfo(this.user_id).then(handles => this.handles = handles);
  }

}
