import { Component, OnInit, Input } from '@angular/core';
import { Leave } from '../../domain/le';
import { LeaveService } from '../../service/leave.service';
import { InquireService } from '../../service/inquire.service';
import { Annual } from '../../domain/an';
import { Process } from '../../domain/pr';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  @Input() showl = false;
  //通过输入属性来传输ID
  @Input() user_id: string;
  state: Process;
  startdate: Date;
  enddate: Date;
  annual: Annual;
  leuser: Leave = {
    id : this.user_id,
    reason : "",
    cuttentTime : "",
    startTime : "",
    finalTime : ""
  };

  constructor(private leaveService: LeaveService, private inquireService: InquireService) { };

  ngOnInit() {
    this.inquireService.inquireAnnualInfo(this.user_id).then(annual => this.annual = annual);
    this.inquireService.inquireState(this.user_id).then(state => this.state = state);
    console.log(this.leuser.id);
  }

  submit(){
    this.startdate = new Date(this.leuser.startTime);
    this.enddate = new Date(this.leuser.finalTime);
    var now = new Date();
    console.log(now);
    if(this.startdate.getTime() < now.getTime()){
      alert("输入错误：请假时间应晚于当前时间！");
    }
    else if(this.enddate.getTime() < this.startdate.getTime()){
      alert("请假结束时间晚于开始时间，请假失败！");
    }
    else if((this.enddate.getTime() - this.startdate.getTime()) < this.annual.annual){
      alert("请假天数多于剩余年假天数，请假失败！");
    }
    else if(this.state.schedule == 0 || this.state.schedule == 1 || 
      this.state.schedule == 2 || this.state.schedule == 3){
      alert("您有一个请假申请正在审批中，请勿重复请假！");
    }
    else if(this.leuser.cuttentTime[4]!='-' || this.leuser.cuttentTime[7]!='-'
      || this.leuser.startTime[4]!='-' || this.leuser.finalTime[7]!='-'
      || this.leuser.finalTime[4]!='-' || this.leuser.finalTime[7]!='-'){
      alert("输入日期格式错误，请重新输入！");
    }
    else{
      this.leaveService.postLeave(this.leuser).then();
    }
  }

}
