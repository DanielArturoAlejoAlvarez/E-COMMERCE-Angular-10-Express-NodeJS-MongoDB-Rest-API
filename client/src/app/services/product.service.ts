import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      //'Authorization': localStorage.getItem('token')
      'Content-Type': 'multipart/form-data',
    }),
  };

  constructor(private _http: HttpClient) {}

  API_URI = 'http://127.0.0.1:3000/api';

  saveProduct(infoProd, imgProd: File): Observable<any> {
    const fd = new FormData();
    fd.append('category', infoProd.category);
    fd.append('name', infoProd.name);
    fd.append('excerpt', infoProd.excerpt);
    fd.append('description', infoProd.description);
    fd.append('price', infoProd.price);
    fd.append('stock', infoProd.stock);
    fd.append('image', imgProd);
    fd.append('status', infoProd.status);

    return this._http.post(`${this.API_URI}/product`, fd);
  }
}
