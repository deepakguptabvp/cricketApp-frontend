import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class User {
  constructor(public email:string, public password:string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  public loginUser(email: any, password: any) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    let user = new User(email, password);
    
    return this.http.post('http://localhost:8080/cricket-app/user/login',user);
  }

}
