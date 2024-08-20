import { Injectable } from '@angular/core';
import { Sprint } from '../../Class/sprint/sprint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  private baseURL="http://localhost:8080/tpm/createSprint";
  constructor(private httpClient:HttpClient){}
  addSprint(sprint: Sprint):Observable<any> {
    return this.httpClient.post(`${this.baseURL}`,sprint);
  }
}
