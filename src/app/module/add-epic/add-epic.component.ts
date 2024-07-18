import { Component, OnInit } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { EpicService } from '../../Service/epic/epic.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { FeatureDashboardService } from '../../Service/feature-dashboard/feature-dashboard.service';

@Component({
  selector: 'app-add-epic',
  templateUrl: './add-epic.component.html',
  styleUrl: './add-epic.component.css'
})
export class AddEpicComponent implements OnInit{
  epic:Epic=new Epic();
  id!:number;
  constructor(private epicService:EpicService,private router:Router,private featureService:FeatureDashboardService){}
  ngOnInit(): void {
    
    this.id=this.featureService.get_id();
    console.log(this.id);
  }

  onSubmit(form:NgForm){
    
    this.epicService.addEpic(this.id,this.epic).subscribe(response=>
      {
        console.log("response from backend",response);
      });
  }

}
