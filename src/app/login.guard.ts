import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let getGuard = sessionStorage.getItem("test");
      console.log(getGuard) 
      if(getGuard!=null ){
        let roles = next.data["role"] as Array<string>
        if(roles){
          var match = getGuard
          if(match){
            return true
          }
          else{
            this._router.navigate(["page-not-found"])
            return false         
          }
        }
        else{
          return true
        }
         }else{
          this._router.navigate(["page-not-found"])
           return false
         }
  }
  
}
