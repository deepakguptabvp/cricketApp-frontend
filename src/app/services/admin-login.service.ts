import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class Admin {
  constructor(public email: string, public password: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  public loginUser(email: any, password: any) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    let admin = new Admin(email, password);

    return this.http.post('http://localhost:8080/cricket-app/admin/login', admin);
  }

}
