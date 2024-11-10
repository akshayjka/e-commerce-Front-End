import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  commonUrl:string = "http://localhost:8080";

  constructor(private http :HttpClient) { }

  getProductList() :Observable<any> {
    return this.http.get(`${this.commonUrl}/product/productList`);
  }
}
