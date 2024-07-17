import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Feature } from '../../Class/Feature/feature';
import { DragdropService } from '../../Service/dragdrop/dragdrop.service';
import { ok } from 'node:assert';
import { stringify } from 'node:querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrl: './draganddrop.component.css'
})
export class DraganddropComponent implements OnInit{
  productBacklog: Feature[] = [];
  sprint1: Feature[] = [];
  sprint2: Feature[] = [];

  constructor(private router:Router,private featureService: DragdropService) { }

  ngOnInit(): void {
    // this.featureService.getFeatures().subscribe(data=>
    //   {
    //     console.log(data);
    //   })
    this.fetchFeatures();
  }
  addButton() {
    alert("add feature")
    this.router.navigate(['/featureForm']);
  }

  fetchFeatures() {
    this.featureService.getFeatures().subscribe((features: Feature[]) => {
      this.productBacklog = features.filter(feature => feature.plannedFor === 'pending');
      this.sprint1 = features.filter(feature => feature.plannedFor === 'sprint 1');
      this.sprint2 = features.filter(feature => feature.plannedFor === 'sprint 2');
    });
  }

  drop(event: CdkDragDrop<Feature[]>, container: string) {
    // console.log(event.previousContainer:stringify);
    // console.log(event.container);
    // console.log(event.currentIndex);
    // console.log(event.previousIndex);
    // console.log(event.container.data);
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
    //console.log(id);
    this.featureService.updateFeaturePlannedFor(id, plannedFor).subscribe();
  }
  

}
