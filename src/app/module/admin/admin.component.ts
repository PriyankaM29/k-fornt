import { Component, OnInit } from '@angular/core';

import { User } from '../../Class/User/user';

import { Router } from '@angular/router';
import { UserService } from '../../Service/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  constructor(private router : Router, private userService : UserService) {}
  usr:User| null = null;
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.usr = user;
    });
    console.log(this.usr);
  }
}
