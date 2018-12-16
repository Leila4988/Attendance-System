import { Component, OnInit, Output, Input, Renderer2,ElementRef, ViewChild } from '@angular/core';
import { Process } from '../../domain/pr';
import { ToHandleService } from '../../service/to-handle.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  @Input() state: Process;
  @Input() showp: boolean;
  l0:string = "";
  l1:string = "";
  l2:string = "";
  l3:string = "";
  l4:string = "";
  count = 0;
  
  
   constructor(private toHandleService: ToHandleService){
   }

  ngOnInit() {
    
  }
  
  ngOnChanges(){
    this.count++;
    if(this.count > 1 && this.showp){
      console.log(this.state);
      if (this.state.schedule == 0) {
        this.l0 = "step-start step-done";
        this.l1 = "step-start step-active";
        this.l2 = "step-start";
        this.l3 = "step-start";
        this.l4 = "step-end";
      }
      else if (this.state.schedule == 1){
        this.l0 = "step-start step-done";
        this.l1 = "step-start step-done";
        this.l2 = "step-start step-active";
        this.l3 = "step-start";
        this.l4 = "step-end";
    }
    else if (this.state.schedule == 2){
      this.l0 = "step-start step-done";
      this.l1 = "step-start step-done";
      this.l2 = "step-start step-done";
      this.l3 = "step-start step-active";
      this.l4 = "step-end";
    }
    else if (this.state.schedule == 3){
      this.l0 = "step-start step-done";
      this.l1 = "step-start step-done";
      this.l2 = "step-start step-done";
      this.l3 = "step-start step-done";
      this.l4 = "step-end step-done";
    }
  }
  }

  delete(){
    this.toHandleService.deleteHandledByid(this.state.id);
  }
}
