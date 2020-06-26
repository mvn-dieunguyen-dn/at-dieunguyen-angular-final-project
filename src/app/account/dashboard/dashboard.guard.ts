import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  isLogin = false;
  constructor(
    private login: LoginService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.login.isLogin;
  }
  checkLogin() {
    if (localStorage.getItem('currentUser')){
      this.isLogin = true;
    }
    return this.isLogin;
  }
}
