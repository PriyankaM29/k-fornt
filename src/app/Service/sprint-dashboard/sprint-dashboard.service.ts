import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../../Class/sprint/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintDashboardService {
  private apiUrl='http://localhost:8080/tpm/getSprint';
  private apiURL="http://localhost:8080/tpm/getsprintbyId";
  constructor(private http:HttpClient){ }
  getSprints():Observable<Sprint[]> {
    return this.http.get<Sprint[]>(`${this.apiUrl}`);
  }
  getsprintbyId(sprintId:any):Observable<Sprint>{
    console.log("This is sprintID"+sprintId);
    return this.http.get<Sprint>(`${this.apiURL}/${sprintId}`);
  }

}
