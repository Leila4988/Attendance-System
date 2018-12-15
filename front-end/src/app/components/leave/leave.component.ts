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

  @Input() show1 = false;
  //通过输入属性来传输ID
  @Input() userid: string;
  leuser:Leave = {
    id : this.userid,
    reason : "a",
    cuttentTime : "q",
    startTime : "2018-8-9",
    finalTime : "2018-8-13"
  };

  constructor(private leaveService: LeaveService) { };

  ngOnInit() {
    console.log("创建！");
    console.log(this.leuser.id);
  }

  submit(){
    console.log(this.userid);
    //this.leaveService.postLeave(this.leuser).then();
  }

}
