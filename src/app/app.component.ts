import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elf-book-mng';
  childToParents:any
  name = "Vijay"
  users = ['Admin','Super Admin', 'Teacher','Student', 'Parent'];

  ngOninit(){
  //  this.click(true)
  } 
  getDatachildToParents(t){
   this.childToParents = t 
 //  console.log('childToParents', t)
  }
}
