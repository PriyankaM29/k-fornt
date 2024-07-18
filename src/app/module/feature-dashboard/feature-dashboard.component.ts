
import { Component, OnInit } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { FeatureDashboardService } from '../../Service/feature-dashboard/feature-dashboard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.css'
})

export class FeatureDashboardComponent implements OnInit{
  features: Feature[] = [];
  // featureID:Feature[]=[];

  constructor(private router:Router,private featureService:FeatureDashboardService ) { }

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(data=>
      {
        console.log(data);
      })
    this.fetchFeatures();
  }
  fetchFeatures() {
    this.featureService.getFeatures().subscribe((data) => {
      this.features = data;
    });
  }
  addEpic(id:number){
    console.log(id);
    this.featureService.set_id(id);
    this.router.navigate(['/addEpic']);
  }
}
