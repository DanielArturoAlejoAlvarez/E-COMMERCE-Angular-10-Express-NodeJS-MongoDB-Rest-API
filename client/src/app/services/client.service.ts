import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Client from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  }

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api'

  getClients(): Observable<any> {
    return this._http.get<Client[]>(`${this.API_URI}/clients`)
  }


}
