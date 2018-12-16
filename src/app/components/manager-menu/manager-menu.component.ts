import { Component, OnInit } from '@angular/core';
import { Handle } from '../../domain/ha'
import { Router, ActivatedRoute } from '@angular/router';
import { ToHandleService } from '../../service/to-handle.service';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})

export class ManagerMenuComponent implements OnInit {
  showh = false;
  shows = false;
  user_id: string;

  constructor(private activatedRoute: ActivatedRoute, private handleService: ToHandleService) { }
  ngOnInit() {
    this.user_id = this.activatedRoute.snapshot.params['id'];
    //this.user_id = "21";
  }

  handle(){
    this.showh = true;
    this.shows = false;
  }

  search(){
    this.showh = false;
    this.shows = true;
  }

}
