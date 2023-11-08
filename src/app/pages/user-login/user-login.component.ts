import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserLoginService, private snack: MatSnackBar, private router:Router) { }

  loginData = {
    email: "",
    password: ""
  }
    
  ngOnInit(): void { }

  formSubmit() {

    if (this.loginData.email == '' || this.loginData.email == null) {
      alert("Email is required !");
      return;
    }

    if (this.loginData.password == '' || this.loginData.password == null) {
      alert("Password is required !");
      return;
    }

    this.userService.loginUser(this.loginData.email, this.loginData.password).subscribe(
      (data: any) => {
        this.userService.loginStatusSubject.next(true);
        Swal.fire('Success', 'Welcome to Fantasy Cricket App', 'success')
        // alert('Welcome to Fantasy Cricket App');
        this.router.navigate(['user-match-fixtures']);
      },
      (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      })
  }

}
