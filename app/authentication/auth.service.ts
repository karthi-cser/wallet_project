import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {


  private readonly loginUrl = 'http://saksh.website/vapi/a8center/tlogin.php';
  private readonly registerUrl = 'http://saksh.website/vapi/a8center/register.php';

  private readonly loginUrl1 = 'https://auth.globo4x.com/laravel/public/api/auth/login';
private readonly registerUrl1 = 'https://auth.globo4x.com/laravel/public/api/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl1, body);
  }

  login(body) {
    return this.http.post(this.loginUrl1, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
    
  }

  getToken() {
    let token = localStorage.getItem('token');



    return token;
  }
}