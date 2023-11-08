import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar) { }

  public user = {
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    phone: "",
    age: "",
    password: ""
  }

  ngOnInit(): void { }

  formSubmit() {

    if (this.user.firstName == '' || this.user.firstName == null) {
      alert("First Name is required !");
      return;
    }

    if (this.user.lastName == '' || this.user.lastName == null) {
      alert("Lasr Name is required !");
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      alert("Email is required !");
      return;
    }

    if (this.user.state == '' || this.user.state == null) {
      alert("State is required !");
      return;
    }

    if (this.user.phone == '' || this.user.phone == null) {
      alert("Phone number is required !");
      return;
    }

    if (this.user.age == '' || this.user.age == null) {
      alert("Age is required !");
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      alert("Password is required !");
      return;
    }

    // register new user
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log("success", data);
        Swal.fire('Success', 'User registered successully', 'success')
        this.router.navigate(['/user-login']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', 'okay', {
          duration: 2000
        })
      })
  }

}
