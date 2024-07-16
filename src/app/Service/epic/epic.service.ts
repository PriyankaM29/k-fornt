import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  baseURL="http://localhost:8080/kap/"
  constructor(private httpclient:HttpClient) { }

  addFeature(epic:Epic):Observable<any>{
    return this.httpclient.post(`${this.baseURL}`,epic);
  }
}
