import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Process } from '../../domain/pr';
import { InquireService } from '../../service/inquire.service';
import { scheduleMicroTask } from '@angular/core/src/util';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.css']
})
export class EmployeeMenuComponent implements OnInit {

  showl: boolean;
  showp: boolean;
  showr: boolean;
  showd: boolean;
  //查询process时所需的state对象
  state: Process;
  temp_state: Process =
  {
    id:"123",
    schedule: 0
  };
  constructor(private activatedRoute: ActivatedRoute, private inquireService: InquireService) { }

  user_id: string;
  ngOnInit() {
    //this.user_id = this.activatedRoute.snapshot.params['id'];
    this.user_id = "11";
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
  }
  
  leave(){
    this.showl = true;
    this.showp = false;
    this.showr = false;
    this.showd = false;
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
    this.state = null;
  }
  process(){
    this.showl = false;
    this.showp = true;
    this.showr = false;
    this.showd = false;
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
    this.state = this.temp_state;
  }
  searchr(){
    this.showl = false;
    this.showp = false;
    this.showr = true;
    this.showd = false;
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
    this.state = null;
  }
  searchd(){
    this.showl = false;
    this.showp = false;
    this.showr = false;
    this.showd = true;
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
    this.state = null;
  }

}
