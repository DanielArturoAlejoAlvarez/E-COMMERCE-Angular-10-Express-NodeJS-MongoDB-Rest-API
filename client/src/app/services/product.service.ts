import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  }

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api'


  saveProduct(newProduct: Product): Observable<any> {
    return this._http.post<Product>(`${this.API_URI}/product`, newProduct)
  }

}
