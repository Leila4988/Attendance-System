import { Component, OnInit, Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { ToHandleService } from '../../service/to-handle.service';

@Component({
  selector: 'app-department-log',
  templateUrl: './department-log.component.html',
  styleUrls: ['./department-log.component.css']
})
export class DepartmentLogComponent implements OnInit {

  @Input() showd: boolean;
  @Input() user_id: string;
  handles: Handle[];
  constructor(private handleService: ToHandleService) { }
  ngOnInit() {
    //由服务去获取用户列表数据
    this.handleService.getHandlesByid(this.user_id).then(handles => this.handles = handles);
  }


}
