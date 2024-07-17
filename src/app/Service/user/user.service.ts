import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../Class/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usrSubject = new BehaviorSubject<User | null>(null);  //used to store the user state
  private loggedInSubject = new BehaviorSubject<boolean>(false); // same as above one used to store  logged in status
 
  private baseURL="http://localhost:8080/api/v1/users/records"; //api endpoints
  private baseURL2="http://localhost:8080/api/v1/users/login";
 
  constructor(private httpClient: HttpClient) { }
 
 
  loginUser(user:User):Observable<any>{
    console.log(user);
    return this.httpClient.post(`${this.baseURL2}`,user);
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
