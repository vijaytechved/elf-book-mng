import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.css']
})
export class BehaviourComponent implements OnInit {
  @Input() inputBehaviour : any = {}
  showModelPop: boolean = false;
  moduleSection: any;
  constructor() { }

  ngOnInit(): void {
    this.inputBehaviour.subscribe((res:any)=>{
      console.log(res)
      this.showModelPop = res["isShow"];
      this.moduleSection = res["section"];
    });
  }

}
