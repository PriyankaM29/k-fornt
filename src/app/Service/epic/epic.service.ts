import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

 
  constructor(private httpClient:HttpClient) { }

 private baseURL="http://localhost:8080/tpm"
  addEpic(id:any,epic:Epic):Observable<any>{
    console.log(id);
    return this.httpClient.post(`${this.baseURL}/${id}`,epic);
  }

  
}
