import { Component, OnInit, Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { ToHandleService } from '../../service/to-handle.service';

@Component({
  selector: 'app-already-checked',
  templateUrl: './already-checked.component.html',
  styleUrls: ['./already-checked.component.css']
})

export class AlreadyCheckedComponent implements OnInit {
  @Input() shows: boolean;
  @Input() user_id: string;
  handles: Handle[];

  constructor(private handleService: ToHandleService) { }
  ngOnInit() {
    //由服务去获取用户列表数据
    this.handleService.getHandledByid(this.user_id).then(handles => this.handles = handles);
    console.log(this.handles);
  }

}
