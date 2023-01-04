import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
//import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedmotorService {
  
 // url = 'https://uat.universalsompo.in/CKYC_API/api/CKYC/searchDownload';
  url= 'https://uat.universalsompo.in/CKYC_Wrapper_Web/api/CKYC/searchDownload';
  SmsUrl = 'http://universal-sompo.ind.in/communication/api/sendsms?mobileNo=98888888888&sms=Dear Hello ,Greetings from Universal Sompo General Insurance!  Click here https://www.usgi.co.in/p?q=ed3ASVwPRK to complete your KYC. Please ignore if you have completed the KYC.'
  constructor(private httpClient:HttpClient) { }


  
  CKYCPOst(ckycData){
   const headers = new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded'
   }) 

   const ckyc = new URLSearchParams();
   ckyc.append("userid", 'usgi_ckyc_user');
   ckyc.append("password", 'Usgi!@2022');
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
    //.pipe(catchError(this.handleError));
  }
  SMSGetData(){
    return this.httpClient.get(this.SmsUrl)
    //.pipe(catchError(this.handleError))
  }

  getSMSdata(){
    return this.httpClient.get(this.SmsUrl)
  }

  // private handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = error.error;
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     errorMessage = error.error;
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   errorMessage = error.error; 
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
 
}
