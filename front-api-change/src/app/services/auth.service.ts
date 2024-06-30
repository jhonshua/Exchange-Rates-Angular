import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  static isAuthenticated() {
    throw new Error('Method not implemented.');
  }

//path API
  private LOGIN_URL = 'http://localhost:5000/auth';
  private tokenKey = 'authToken'

//constructor you are injecting two dependencies
  constructor(private HttpClient: HttpClient, private router: Router) { }

//methods

  login(email: string, password: string): Observable<any> {
    return this.HttpClient.post<any>(this.LOGIN_URL, { email, password }).pipe(
      tap((response) => {
        if (response.accessToken) {
          this.setToken(response.accessToken)
        }
      })
    )
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    if(typeof window !== 'undefined'){
    return localStorage.getItem(this.tokenKey);
    }else{
      return null
    }

  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));

    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login'])
  }

}





