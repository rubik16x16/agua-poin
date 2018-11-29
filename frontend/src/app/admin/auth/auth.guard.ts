import { Injectable } from '@angular/core';

import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, CanActivateChild
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkLogin(url);
    }//end canActivate

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {

    let expirationTime= moment.unix(this.authService.getExpirationTime());
    
    if(moment().isBefore(expirationTime) && this.authService.getUserToken() != null){

      return true;
    }//end if

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['admin/login']);
    return false;
  }//end checkLogin
}//end AuthGuardClass
