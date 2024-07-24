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
      this.sprintService.getSprints().subscribe(data=>{
        this.sprints=data;
      });
  }

  ngOnInit(): void {
    this.fetchFeatures();
  }
  addButton() {
     this.router.navigate(['/featureFrom']);
  }

  fetchFeatures() {
    this.featureService.getFeatures().subscribe((features: Feature[]) => {
      this.productBacklog = features.filter(feature => feature.sprintId === null);
      console.log(this.productBacklog);
      this.currentSprint = features.filter(feature => {
        const sprint = this.sprints.find(s => s.sprintId === feature.sprintId);
          return sprint ;
        });



      // this.sprint1 = features.filter(feature => feature.plannedFor === 'current'  );
      // this.sprint2 = features.filter(feature => feature.plannedFor === 'previous');
    });
  }

  drop(event: CdkDragDrop<Feature[]>, container: string) {
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
this.updateFeaturePlannedFor(feature.featureId, container);
    }
  }

  updateFeaturePlannedFor(id: number, plannedFor: string) {
    console.log(plannedFor);
    this.featureService.updateFeaturePlannedFor(id, plannedFor).subscribe();
  }



}


  
 


