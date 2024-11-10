import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// Import jwtDecode as a named import
import { jwtDecode } from 'jwt-decode';



import { Observable } from 'rxjs';
import { loginDTO } from '../shared/Interfaces/interfaces';





@Injectable({
  providedIn: 'root'
})



export class RegisterServicesService {

  commonUrl:string = "http://localhost:8080";

   // SNACK BAR OR TOASTER....
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'bottom';

   // TOKEN EXPIRATION
   private tokenExpirationTimer: any;


  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.startLogoutTimer(token);
  }

  getDecodedToken() {
    const token = localStorage.getItem('token');
    // return token ? jwt_decode(token) : null;
    return token ? jwtDecode(token) : null;

  }

    // Check expiration status on page load to ensure no expired token persists
     checkTokenExpirationOnInit() {
      const expirationTime = this.getTokenExpirationTime();
      if (expirationTime && expirationTime <= Date.now()) {
        this.logout(); // Token expired, so log out
      }
    }

  getTokenExpirationTime() {
    const decodedToken: any = this.getDecodedToken();
    return decodedToken ? decodedToken.exp * 1000 : null;
  }

  private startLogoutTimer(token: string) {
    const expirationTime = this.getTokenExpirationTime();
    if (expirationTime) {
      const timeout = expirationTime - Date.now();
      this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
      }, timeout);
    }
  }

  logout() {
    localStorage.removeItem('token');
    clearTimeout(this.tokenExpirationTimer);
    this.router.navigate(['/register']); // Redirect to login page
  }

  createUserApi(user:any) :Observable<any> {
    return this.http.post(`${this.commonUrl}/api/user`,user);
  }

  loginUserApi(body:loginDTO) : Observable<any> {
    return this.http.post(`${this.commonUrl}/login/user`,body);
  }

  openSnackBar(duration:any, message:any, horizontalPosition:any, verticalPosition:any) {
    this._snackBar.open(message, 'Close', {
      duration : duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }

}
