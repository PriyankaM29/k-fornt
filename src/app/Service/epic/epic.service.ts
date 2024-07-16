import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  baseURL="http://localhost:8080/kap/"
  constructor(httpclint:HttpClient) { }

  addFeature(epic:Epic):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,epic);
  }
}
