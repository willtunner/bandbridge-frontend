import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8081/auth"

  constructor(private httpClientt: HttpClient) {

   }

   login(email: string, password: string) {
    return this.httpClientt.post<LoginResponse>(`${this.apiUrl}/login`, { email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("userName", value.name);
      })
    )
   }

   signup(name: string, email: string, password: string) {
    return this.httpClientt.post<LoginResponse>(`${this.apiUrl}/register`, { name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("userName", value.name);
      })
    )
   }
}
