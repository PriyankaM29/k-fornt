import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../../Class/Feature/feature';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardService {

  private _id!: number;
  public get_id(){
    return this._id;
  }
  public set_id(value: number) {
    this._id = value;
  }

  private apiUrl = 'http://localhost:8080/tpm/getfeature';
  // private apiUrl1 = 'http://localhost:8080/kap';
 
  constructor(private http: HttpClient,private userService:UserService) { }

  getFeatures(): Observable<Feature[]> {
    const token=this.userService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Feature[]>(`${this.apiUrl}`,{headers});
  }
}
