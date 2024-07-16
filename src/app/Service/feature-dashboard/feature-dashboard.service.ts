import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../../Class/Feature/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardService {

  private apiUrl = 'http://localhost:8080/kap/getfeature';
  // private apiUrl1 = 'http://localhost:8080/kap';
 
  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    console.log()
    return this.http.get<Feature[]>(`${this.apiUrl}`);
  }
}
