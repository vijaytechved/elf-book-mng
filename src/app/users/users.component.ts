import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() name:string;
 // users = ['Admin','Super Admin', 'Teacher','Student', 'Parent']
  constructor() { 
    
  }

  ngOnInit(): void {
   // this.Users()
  }

  Users(){
  //this.users  
  }

}
