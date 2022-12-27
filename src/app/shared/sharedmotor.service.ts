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

   const ckyc = new URLSearchParams();
   ckyc.append("source", ckycData.source);
   ckyc.append("customerType", ckycData.customerType);
   ckyc.append("uniqueTransactionNumber", ckycData.uniqueTransactionNumber);
   ckyc.append("idType", ckycData.idType);
   ckyc.append("idNo", ckycData.idNo);
   ckyc.append("dob", ckycData.dob);
   ckyc.append("mobileNo", ckycData.mobileNo);
   ckyc.append("pincode", "");
   ckyc.append("cKYCNo", "");
    
    return this.httpClient.post(this.url, ckyc,{headers:headers})
  }
 
}
