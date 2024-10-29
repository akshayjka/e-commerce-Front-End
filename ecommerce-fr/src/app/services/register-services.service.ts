import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  commonUrl:string = "http://localhost:8080/api";

   // SNACK BAR OR TOASTER....
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  private createBasicAuthHeader(username: string, password: string): HttpHeaders {
    const encodedCredentials = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json'
    });
    return headers;
  }

  createUserApi(user:any, username: string, password: string) :Observable<any> {
    const headers = this.createBasicAuthHeader(username, password);
    return this.http.post(`${this.commonUrl}/user`,user, { headers });
  }

  openSnackBar(duration:any, message:any, horizontalPosition:any, verticalPosition:any) {
    this._snackBar.open(message, 'Close', {
      duration : duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }

}
