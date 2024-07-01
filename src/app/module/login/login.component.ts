import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { User } from '../../Class/User/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router, private userService : UserService) {}
user:User=new User();
 onSubmit(form:NgForm){
  alert("login successfull")
 }
}
