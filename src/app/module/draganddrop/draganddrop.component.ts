import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Feature } from '../../Class/Feature/feature';
import { DragdropService } from '../../Service/dragdrop/dragdrop.service';
import { ok } from 'node:assert';
import { stringify } from 'node:querystring';
import { Router } from '@angular/router';
import { SprintDashboardComponent } from '../sprint-dashboard/sprint-dashboard.component';
import { Sprint } from '../../Class/sprint/sprint';
import { SprintDashboardService } from '../../Service/sprint-dashboard/sprint-dashboard.service';
import { response } from 'express';

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrl: './draganddrop.component.css'
})
export class DraganddropComponent implements OnInit{
  productBacklog: Feature[] = [];
  currentSprint: Feature[] = [];
  sprints:Sprint[]=[];


  currentDate=new Date();

  constructor(private router:Router,private featureService: DragdropService,private sprintService:SprintDashboardService){
  
  }

  ngOnInit(): void {
    this.sprintService.getSprints().subscribe((sprints:Sprint[]) => {
      this.sprints= sprints.filter(sprint => new Date(sprint.endDate)>= this.currentDate);
      console.log(this.currentSprint);
     });
      this.featureService.getFeatures().subscribe((feature:Feature[])=>{
        this.productBacklog=feature.filter(f=>f.sprintId===null);
      });
  }
  addButton() {
     this.router.navigate(['/featureFrom']);
  }

  getFeaturesForSprint(sprintId:number):Feature[]{
    
     const sprint=this.sprints.find(s=>s.sprintId===sprintId);
      return sprint? sprint.features:[];
  }

  drop(event: CdkDragDrop<Feature[]>, sprintId?:number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const feature = event.container.data[event.currentIndex];
      feature.sprintId=sprintId||null;
      // this.sprintService.getSprints(sprintId);
      console.log(feature);
    this.featureService.updateFeatureSprintId(feature).subscribe(data=>{
     console.log(data);
     
     
    },
    error=>{
      console.log("error");
    });



    }
  }

  // updateFeaturePlannedFor(id: number, plannedFor: string) {
  //   console.log(plannedFor);
  //   this.featureService.updateFeaturePlannedFor(id, plannedFor).subscribe();
  // }



}


  
 


