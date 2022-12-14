import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  getGuard:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getGuard = sessionStorage.getItem("test");
    if(this.getGuard){
      this.router.navigate(['book-list'])
    }
  }




}
