import { Component } from '@angular/core';

import { User } from '../../Class/User/user';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router : Router, private userService : UserService) {}
  usr:User| null = null;
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.usr = user;
    });
    console.log(this.usr);
  }
}
