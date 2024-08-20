import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../Class/User/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usrSubject = new BehaviorSubject<User | null>(null);  //used to store the user state
  private loggedInSubject = new BehaviorSubject<boolean>(false); // same as above one used to store  logged in status
  token!:string;
  private baseURL="http://localhost:8080/auth/login"; //api endpoints
  
 
  constructor(private httpClient: HttpClient, private router:Router) { }
 
 
  loginUser(user:User):Observable<any>{
    console.log(user);
    return this.httpClient.post(`${this.baseURL}`,user);
  }
  setToken(token:string){
      localStorage.setItem('token',token);
      console.log("This is set token methid");
      console.log(token);
  }
  getToken():string|null{
    return localStorage.getItem('token');
  }
  logout():void{
    localStorage.removeItem(this.token);
    this.router.navigate(['/login']);
  }
  isTokenExpired(): boolean {
    const payload = JSON.parse(atob(this.token.split('.')[1]));
    console.log(payload.exp < Date.now() / 1000);
    return payload.exp < Date.now() / 1000;
  }
  setLoggedIn(loggedIn: boolean): void {
    this.loggedInSubject.next(loggedIn);
  }
  getLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
  setUser(user: User): void {
    this.usrSubject.next(user);
  }
  getUser(): Observable<User | null> {
    return this.usrSubject.asObservable();
  }
  isLoggedIn$ = this.loggedInSubject.asObservable();
 
}
