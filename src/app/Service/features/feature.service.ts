
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  
  private baseURL="http://localhost:8080/kap/createfeature";
  constructor(private httpClient: HttpClient) { }
  addFeature(feature:Feature):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,feature);
  }
}
