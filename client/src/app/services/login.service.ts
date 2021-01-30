import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api/auth'

  signIn(user): Observable<any> {
    return this._http.post(`${this.API_URI}/login`, user)
  }

}
