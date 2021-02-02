import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  

  constructor(private _http: HttpClient) {}

  API_URI = 'http://127.0.0.1:3000/api';

  getProducts(): Observable<any> {
    return this._http.get(`${this.API_URI}/products`)
  }

  

  
}
