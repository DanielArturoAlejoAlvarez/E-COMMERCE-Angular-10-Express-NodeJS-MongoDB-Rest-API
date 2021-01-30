import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api/auth'

  signIn(user): Observable<any> {
    return this._http.post(`${this.API_URI}/login`, user)
  }

}
