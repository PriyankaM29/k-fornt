import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../../Class/sprint/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintDashboardService {
  private apiUrl='http://localhost:8080/kap/getSprint';
  constructor(private http:HttpClient){ }
  getSprints():Observable<Sprint[]> {
    return this.http.get<Sprint[]>(`${this.apiUrl}`);
  }

}
