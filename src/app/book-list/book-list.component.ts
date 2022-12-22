import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  behaviourMatrix = new BehaviorSubject({});
  getGuard:any
  books= [
    {
      name:"Test"
    },
    {
      name:"Test2"
    },
    {
      name:"Test3"
    },
    {
      name:"Test4"
    },
    {
      name:"Test5"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getGuard = sessionStorage.getItem("test");
    if(this.getGuard){
      this.router.navigate(['book-list'])
    }

  }

  modifyArray(){
    this.behaviourMatrix.next({"isShow" : true,"section":""})
    let b = this.books
    b.forEach(ele=>{
    if(ele.name === 'Test2'){
      ele.name = '0' 
    }
    })
    let p:any =b
  //   p = b.push(p)
  // b.map((element:any)=>{
  //   if(element.name === 'Test2'){
  //     Object.assign(element.name, {"name":'0'})
  //   }   
  // })
  b.map((x)=>{
    if(x.name.includes("Test2")){
      x['name'] = x.name.replace("Test2","0");
      this.books
    } else{
      this.books
    }
  })
  // allData.forEach(element => {
  //   this.listDate.push(element)
  // });
  // p.forEach(w=>{
  //   this.books.push(w)
  // })
  // this.books.push(p)
  //   console.log(p)

   }
   clickForMoreDetails = () => {
    this.behaviourMatrix.next({"isShow" : true,"section":""})
  }

}
