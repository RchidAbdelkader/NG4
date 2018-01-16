import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }else{

      this.router.navigate(['login']);
      return false;
    }

  }
}
