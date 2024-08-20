import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../Class/User/user';
import { UserService } from '../../Service/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) { }
  user: User = new User();
  token!: string;
  onSubmit(form: NgForm) {
    this.user = form.value;
    this.userService.loginUser(this.user).subscribe(
      data => {
        this.token = data.jwt;

        this.userService.setLoggedIn(true); // Set the user as logged in
       this.userService.setToken(this.token);
        this.navigateBasedOnRole(this.user.role);
      },
      error => {
        alert("UserName or Password is invalid");
      }
    );
  };
  
  private navigateBasedOnRole(role: string) {
    if (this.token && role === 'TPM') {
      this.userService.setUser(this.user);
      this.router.navigate(['/sprintForm']);
    } else if (this.token && role === 'ADMIN') {
      this.router.navigate(['/admin']);
    }
  }



}