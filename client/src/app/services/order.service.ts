import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api'

  getOrders(): Observable<any> {
    return this._http.get(`${this.API_URI}/orders`)
  }

  saveOrder(newOrder): Observable<any> {
    return this._http.post(`${this.API_URI}/orders`, newOrder)
  }
}
