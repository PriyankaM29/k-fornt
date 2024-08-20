import { Injectable } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sprint } from '../../Class/sprint/sprint';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {
  private apiUrl = 'http://localhost:8080/tpm/updateFeature';
 
  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('http://localhost:8080/tpm/getfeature');
  }

  // updateFeaturePlannedFor(id: number, plannedFor: string): Observable<any> {
  //   console.log(id);
  //   console.log(plannedFor)
  //   return this.http.put(`${this.apiUrl1}/${id}`, { plannedFor });
  // }
  updateFeatureSprintId(featureId:number,sprint:any):Observable<any>{
    console.log("This is a feature id sent to service"+featureId);
    console.log("this is a sprint sent to service"+sprint);
    console.log(sprint);
    return this.http.put(`${this.apiUrl}/${featureId}`,sprint);

  }
}
