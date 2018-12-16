import { Component, OnInit, Input } from '@angular/core';
import { Leave } from '../../domain/le';
import { LeaveService } from '../../service/leave.service';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  @Input() showl = false;
  //通过输入属性来传输ID
  @Input() user_id: string;
  leuser:Leave = {
    id : this.user_id,
    reason : "",
    cuttentTime : "",
    startTime : "",
    finalTime : ""
  };

  constructor(private leaveService: LeaveService) { };

  ngOnInit() {
    console.log("创建！");
    console.log(this.leuser.id);
  }

  submit(){
    console.log(this.user_id);
    //this.leaveService.postLeave(this.leuser).then();
  }

}
