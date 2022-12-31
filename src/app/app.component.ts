import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elf-book-mng';
  test:any
  name = "Vijay"
  users = ['Admin','Super Admin', 'Teacher','Student', 'Parent']
  click(t){
   this.test = t 
  }
}
