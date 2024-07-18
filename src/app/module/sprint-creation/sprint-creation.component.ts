import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SprintDashboardService } from '../../Service/sprint-dashboard/sprint-dashboard.service';
import { SprintService } from '../../Service/sprint/sprint.service';
import { Sprint } from '../../Class/sprint/sprint';
import { NgForm } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-sprint-creation',
  templateUrl: './sprint-creation.component.html',
  styleUrl: './sprint-creation.component.css'
})
export class SprintCreationComponent {
  constructor(private route:Router,private sprintService:SprintService){}
  sprint:Sprint=new Sprint();
  onSubmit(form:NgForm){
    this.sprint=form.value;
    this.sprintService.addSprint(this.sprint).subscribe(response=>{
      console.log("Sprint backend response");
    },
  error=>{
    console.log("Error in submitting sprint form",error);
  });
  this.route.navigate(['/sprintdashboard']);

  }
}
