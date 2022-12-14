import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
    this.router.navigate(['book-list'])
    sessionStorage.setItem('test','login')
  }
}
