import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Handle } from '../../domain/ha'
import { ToHandleService } from '../../service/to-handle.service';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {
  @Input() showh: boolean;
  @Input() user_id: string;
  handles: Handle[];
  constructor(private handleService: ToHandleService) { }
  
  submit(){
    console.log(this.handles);
    this.handles.forEach(element => {
      this.handleService.putHandle(element, element.id);
    });
  }
  ngOnInit() {
    //由服务去获取用户列表数据
    this.handleService.getUnHandlesByid(this.user_id).then(handles => this.handles = handles);
  }

}
