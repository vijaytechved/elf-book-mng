import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedmotorService } from '../shared/sharedmotor.service';
import { Subscription } from 'rxjs';
import { SharedMotorCKYCRepository } from '../shared/shared.ckyc.repository';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  ckycData= {
    "source": "ONLINE",
    "customerType": "I",
    "uniqueTransactionNumber": "ONLINE/031184/108",
    "idType": "PAN",
    "idNo": "AATPU7693N",
    "dob": "03-11-1984",
    "mobileNo": "9888888888",
    "pincode": "",
    "cKYCNo": ""
  }
  subscribe= new Subscription;
  constructor(private router:Router, private shared:SharedmotorService, private ckyc:SharedMotorCKYCRepository) { }

  ngOnInit(): void {
  }
  checkLogin(){
    this.router.navigate(['book-list'])
    sessionStorage.setItem('test','login');
    this.getlocalData()

  }
  getlocalData(){
    this.subscribe.add(
    this.ckyc.SetCKYCPOSTDATA(
     this.ckycData
    )   
    )
    this.shared.CKYCPOst(this.ckycData).subscribe((fdf)=>{
      console.log(fdf)
    })
  }
}
