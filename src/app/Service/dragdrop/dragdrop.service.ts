import { Injectable } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {
  private apiUrl = 'http://localhost:8080/kap/getfeature';
  private apiUrl1 = 'http://localhost:8080/kap/updateFeature';
 
  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('http://localhost:8080/kap/getfeature');
  }

  // updateFeaturePlannedFor(id: number, plannedFor: string): Observable<any> {
  //   console.log(id);
  //   console.log(plannedFor)
  //   return this.http.put(`${this.apiUrl1}/${id}`, { plannedFor });
  // }
  updateFeatureSprintId(feature:Feature):Observable<any>{
    console.log(feature);
    return this.http.put(`${this.apiUrl1}`,feature);

  }
}
