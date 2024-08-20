
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  
  private baseURL="http://localhost:8080/tpm/createfeature";
  constructor(private httpClient: HttpClient) { }
  addFeature(feature:Feature):Observable<any>{
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // return this.httpClient.post(`${this.baseURL}`,tempFeature,{ headers });
    return this.httpClient.post(`${this.baseURL}`,feature);
  }
}
