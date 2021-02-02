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

  saveProduct(infoProd, imgProd: File): Observable<any> {
    const fd = new FormData();
    fd.append('category', infoProd.category);
    fd.append('name', infoProd.name);
    fd.append('excerpt', infoProd.excerpt);
    fd.append('description', infoProd.description);
    fd.append('price', infoProd.price);
    fd.append('stock', infoProd.stock);
    fd.append('image', imgProd, imgProd.name);
    fd.append('status', infoProd.status);

    return this._http.post<Product>(`${this.API_URI}/products`, fd);
  }

  
}
