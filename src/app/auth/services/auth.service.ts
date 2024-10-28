import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginCredentials: any) {
    console.log(loginCredentials);
    return this.http.post('https://reqres.in/api/login', loginCredentials);
  }

  isAuth() {
    if(localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
   
  }
}
