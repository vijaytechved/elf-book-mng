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
  btnColor:string = 'red'
  isDisabled:boolean = true
  inputValue=''
  salary = 20;
  authe : any = {"mobile":"","otp":""}
  users = ['Admin','Super Admin', 'Teacher','Student', 'Parent']
  constructor(private router:Router, private shared:SharedmotorService, private ckyc:SharedMotorCKYCRepository) 
  
  {
    const colors = ['red','black','white','orange','blue','yellow'];
    this.btnColor = colors[Math.floor(Math.random()*5)]
   // console.log(this.btnColor)
   setTimeout(()=>{
   this.isDisabled = false
   },2000);
  //  let onlyUrl = ""
  //  let c : any = new Array
  //  onlyUrl = window.location.href
   
  //  c = onlyUrl.split("#");
  //  console.log(c)
  //  if(c[0] == "http://localhost:4200/"){
  //   console.log(c)
  //    this.authe.mobile = "3328307448";
  //    this.authe.otp = "~!@#$%";
  //  }else{
  //  }
   }

  ngOnInit(): void {
  }
  checkLogin(){
    this.router.navigate(['book-list'])
    sessionStorage.setItem('test','login');
    this.getlocalData()
    this.getSMSDara()

  }

inputValueByInput(e){
this.inputValue = e.target.value
//console.log(e.target.value)
}

  getRandomCOlrs(){
  //   const colors = ['red','black','white','orange','blue','yellow'];
  //  setTimeout(()=>{
  //  // this.btnColor = Math.round((Math.random*5))
  //  const nums=[23,3,45,6,6,656,77]; 
  //   Math.max(nums[23])
  //  },1000)
  }

  getSMSDara(){
    this.shared.getSMSdata().subscribe((res:any)=>{
      console.log(res)
    })
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
  SmsSend(){
    this.shared.SMSGetData().subscribe({
      next: (data)=>console.log('data',data),
      error: (err)=>console.log('error',err),
      complete:()=>console.log('complete')
    });
  }
}
