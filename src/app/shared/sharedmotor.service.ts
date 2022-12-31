import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedmotorService {
  
  url = 'https://uat.universalsompo.in/CKYC_API/api/CKYC/searchDownload';
  SmsUrl = 'http://universal-sompo.ind.in/communication/api/sendsms?mobileNo=98888888888&sms=Dear Hello ,Greetings from Universal Sompo General Insurance!  Click here https://www.usgi.co.in/p?q=ed3ASVwPRK to complete your KYC. Please ignore if you have completed the KYC.'
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

  getSMSdata(){
    return this.httpClient.get(this.SmsUrl)
  }
 
}
