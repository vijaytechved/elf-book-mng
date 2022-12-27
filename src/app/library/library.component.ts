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
   const ckycData = {
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
    this.shared.CKYCPOst(ckycData).subscribe((res:any)=>{
      this.subscribe.add(
        this.ckyc.SetCKYCPOSTDATA(
         {
          CKYCNumber: res.result.CKYCNumber,
          UidNumber: res.result.UidNumber,
          address1: res.result.address1,
          address2: res.result.address2,
          address3: res.result.address3,
          city: res.result.city,
          corresAddress1: res.result.corresAddress1,
          corresAddress2: res.result.corresAddress2,
          corresAddress3: res.result.corresAddress3,
          corresCity:res.result.corresCity,
          corresCountry: res.result.corresCountry,
          corresDist: res.result.corresDist,
          corresPin:res.result.corresPin,
          corresState:res.result.corresState,
          dob: res.result.dob,
          email: res.result.email,
          firstName: res.result.firstName,
          lastName:res.result.lastName,
          middleName: res.result.middleName,
          permAndCorresAddSame: res.result.permAndCorresAddSame,
          pincode: res.result.pincode,
          state: res.result.state
         }
        )   
        )
    })
  }
}
