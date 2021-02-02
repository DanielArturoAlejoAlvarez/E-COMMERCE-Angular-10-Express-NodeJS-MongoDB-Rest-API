import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Category from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /*httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem("token")
    })
  }*/

  constructor(private _http: HttpClient) { }

  API_URI = 'http://127.0.0.1:3000/api'

  getCategories(): Observable<any> {
    return this._http.get<Category[]>(`${this.API_URI}/categories`)
  }

}
