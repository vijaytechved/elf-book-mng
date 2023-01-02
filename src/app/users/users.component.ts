import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() name:string;
@Output() myEvent = new EventEmitter<any>()
test:any
users = ['Admin','Super Admin', 'Teacher','Student', 'Parent'];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.Users()
  }

  Users(){
  this.myEvent.emit(this.users) 
  }

}
