import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

<<<<<<< Updated upstream
  baseURL="http://localhost:8080/kap/"
<<<<<<< HEAD
  constructor(private httpClient:HttpClient) { }
=======
  constructor(private httpclient:HttpClient) { }
>>>>>>> 388ac7f992b205f9b48b08faca4767ffa7fff91c

  addFeature(epic:Epic):Observable<any>{
    return this.httpclient.post(`${this.baseURL}`,epic);
=======
  private baseURL="http://localhost:8080/kap/addEpic"
  
  constructor(private httpClient: HttpClient) { }
  addEpic(epic:Epic):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,epic);
>>>>>>> Stashed changes
  }

  
}
