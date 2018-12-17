import { Component, OnInit, Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { InquireService } from '../../service/inquire.service';

@Component({
  selector: 'app-department-log',
  templateUrl: './department-log.component.html',
  styleUrls: ['./department-log.component.css']
})
export class DepartmentLogComponent implements OnInit {

  @Input() showd: boolean;
  @Input() user_id: string;
  handles: Handle[];
  constructor(private inquireService: InquireService) { }
  ngOnInit() {
    //由服务去获取用户列表数据
    this.inquireService.inquireDepartmentInfo(this.user_id).then(handles => this.handles = handles);
  }


}
