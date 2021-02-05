import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this._jwtHelper.isTokenExpired(token);
  }

  setUser(user): void {
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  getCurrentUser() {
    const user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
}
