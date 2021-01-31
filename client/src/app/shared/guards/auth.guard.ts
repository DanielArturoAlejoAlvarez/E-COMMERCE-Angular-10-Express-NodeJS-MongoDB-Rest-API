import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _as: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._as.isAuthenticated()) {
      this._router.navigate([''])
      return false;
    }
    return true;
  }   
  
}
