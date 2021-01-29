import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  API_URI = 'http://127.0.0.1:3000/api';

  getUsers(): Observable<any> {
    return this._http.get<User[]>(`${this.API_URI}/users`);
  }



  saveUser(newUser: User): Observable<any> {
    return this._http.post<User>(`${this.API_URI}/users`, newUser);
  }
}
