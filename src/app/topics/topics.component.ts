import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics:string[]=["Components","*ngFor","function calling","*ngIf"]
  show:boolean=false
  btnText:string="Show"

  model(){
    this.show=!this.show
    if(this.show) this.btnText="Close"
    else this.btnText="Show"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
