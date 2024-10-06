import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  commonUrl:string = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  private createBasicAuthHeader(username: string, password: string): HttpHeaders {
    const encodedCredentials = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`
    });
    return headers;
  }

  createUserApi(user:any, username: string, password: string) :Observable<any> {
    const headers = this.createBasicAuthHeader(username, password);
    return this.http.post(`${this.commonUrl}/user`,user);
  }

}
