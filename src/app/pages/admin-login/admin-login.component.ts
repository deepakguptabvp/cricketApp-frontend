import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private snack: MatSnackBar, private adminService: AdminLoginService, private router:Router) { }

  adminData = {
    email: "",
    password: ""
  }

  ngOnInit(): void { }

  formSubmit() {
    console.log("Form submitted successfully");
    if (this.adminData.email == '' || this.adminData.email == null) {
      alert("Email is required !");
      return;
    }

    if (this.adminData.password == '' || this.adminData.password == null) {
      alert("Password is required !");
      return;
    }

    this.adminService.loginUser(this.adminData.email, this.adminData.password).subscribe(
      (data: any) => {
        console.log('success ', data);
        Swal.fire('Success', 'Welcome to Fantasy Cricket App', 'success')
        // alert('Welcome to Fantasy Cricket App');
        this.router.navigate(['admin-dashboard']);
      },
      (error) => {
        console.log(JSON.stringify(error));
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      });

  }
}


