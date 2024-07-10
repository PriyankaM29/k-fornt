import { Component } from '@angular/core';
import { User } from './Class/User/user';

import { Router } from '@angular/router';
import { UserService } from './Service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kap-Frontend';
  
  
    isLoggedIn=false;
    user: User | null = null;
  
    constructor(private userService: UserService, private router : Router) {}
  
    ngOnInit(): void {
      this.userService.isLoggedIn$.subscribe(loggedIn => {
        this.isLoggedIn = loggedIn;
      });
      this.userService.getUser().subscribe(user => {
        this.user = user;
      });
    }
  
    profileButton() {
      this.router.navigate(['/profile']);
    }
    capital(value: string | null | undefined): string {
      if (!value) return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
