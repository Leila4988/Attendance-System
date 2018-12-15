import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Process } from '../../domain/pr';
import { InquireService } from '../../service/inquire.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //state为子组件的唯一属性
  state: Process;
  temp_state: Process;
  constructor(private activatedRoute: ActivatedRoute, private inquireService: InquireService) { }

  user_id: string;
  
  show1 = false;
  show2 = false;
  ngOnInit() {
    //this.user_id = this.activatedRoute.snapshot.params['id'];
    this.user_id = "11";
    this.inquireService.inquireState(this.user_id).then(state => 
      this.temp_state = state);
  }

  check(){
    if(this.show1 == true){
      this.show1 = false;
      this.show2 = false;
      this.state = null;
    }
    else{
      this.show1 = true;
      this.show2 = true;
      this.state = this.temp_state;
    }
  }
}
