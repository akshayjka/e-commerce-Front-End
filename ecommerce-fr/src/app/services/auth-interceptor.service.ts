import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RegisterServicesService } from './register-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private service : RegisterServicesService
    
  ) { }

  private username = 'test';
  private password = 'test@123';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.service.logout();
        }
        return throwError(err);
      })
    );
  }
}
