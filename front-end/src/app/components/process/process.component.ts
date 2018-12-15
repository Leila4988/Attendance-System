import { Component, OnInit, Output, Input, Renderer2,ElementRef, ViewChild } from '@angular/core';
import { Process } from '../../domain/pr';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  @Input() state: Process;
  @Input() show2: boolean;
  l1:string = "";
  l2:string = "";
  l3:string = "";
  count = 0;
  
   constructor(){
   }

  ngOnInit() {
    
  }
  
  ngOnChanges(){
    this.count++;
    if(this.count > 1 && this.show2){
      console.log(this.state);
      if (this.state.schedule == 0) {
      this.l1 = "step-start";
      this.l2 = "step-start";
      this.l3 = "step-end";
      }
      else if (this.state.schedule == 1){
      this.l1 = "step-start step-done";
      this.l2 = "step-start";
      this.l3 = "step-end";
    }
    else if (this.state.schedule == 2){
      this.l1 = "step-start step-done";
      this.l2 = "step-start step-done";
      this.l3 = "step-end";
    }
    else if (this.state.schedule == 3){
      this.l1 = "step-start step-done";
      this.l2 = "step-start step-done";
      this.l3 = "step-end step-done";
    }
  }
  }

}
