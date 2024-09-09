import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService  {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/companies/login`, credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/companies/signup`, userData);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    // Example: check if token exists in local storage or session storage
    return !localStorage.getItem('token');
  }
}

  // constructor(private cookieService: CookieService) {}

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const token = this.cookieService.get('token');

  //   if (token) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //   }

  //   return next.handle(request);
  // }




  

