import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedmotorService {
  
  url = 'https://uat.universalsompo.in/CKYC_API/api/CKYC/searchDownload';
  constructor(private httpClient:HttpClient) { }


  
  CKYCPOst(ckycData){
   const headers = new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded'
   }) 
   const ckyc = {
    "source": ckycData.source,
    "customerType": ckycData.customerType,
    "uniqueTransactionNumber": ckycData.uniqueTransactionNumber,
    "idType": ckycData.idType,
    "idNo": ckycData.idNo,
    "dob": ckycData.dob,
    "mobileNo": ckycData.mobileNo,
    "pincode": "",
    "cKYCNo": ""
    }
    return this.httpClient.post(this.url, ckyc,{headers:headers})
  }
 
}
