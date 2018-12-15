import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  user_id: string;
  edited: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user_id = this.activatedRoute.snapshot.params['id'];
  }

  check(){
    if(this.edited == true){
      this.edited = false;
    }
    else{
      this.edited = true;
    }
  }
}
