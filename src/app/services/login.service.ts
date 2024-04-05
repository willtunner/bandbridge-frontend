import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientt: HttpClient) {

   }

   login(email: StringConstructor, password: string) {
    return this.httpClientt.post<LoginResponse>("http://localhost:8081/auth/login", { email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-toke", value.token);
        sessionStorage.setItem("userName", value.name);
      })
    )
   }
}
