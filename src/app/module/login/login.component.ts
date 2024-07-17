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
  constructor(private router : Router, private userService : UserService) {}
user:User=new User();
 onSubmit(form:NgForm){
  this.user=form.value;
  if(this.user.email==='super@gmail.com' && this.user.password==='asd'){
         this.router.navigate(['/dragdrop']);
       }
  
//   this.userService.loginUser(this.user).subscribe(
//     data=>{
 
 
//     if(this.user.email==='super@gmail.com' && this.user.password==='asd'){
//       this.router.navigate(['/admin']);
//     }
//     else{
//       alert("Login Successfull");
//       this.router.navigate(['/home']);
//     }
//     this.user=data;
//     this.userService.setUser(this.user);
//     this.userService.setLoggedIn(true);
   
//   },
 
//   error=>{
// alert("UserName or Password is invalid");
//   }
//   )
 
 
 };

}