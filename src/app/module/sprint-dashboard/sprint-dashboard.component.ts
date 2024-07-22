import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SprintDashboardService } from '../../Service/sprint-dashboard/sprint-dashboard.service';
import { Sprint } from '../../Class/sprint/sprint';

@Component({
  selector: 'app-sprint-dashboard',
  templateUrl: './sprint-dashboard.component.html',
  styleUrl: './sprint-dashboard.component.css'
})
export class SprintDashboardComponent implements OnInit {
  sprints:Sprint[]=[];
constructor(private router:Router,private sprintService:SprintDashboardService){}
  ngOnInit(): void {
    this.sprintService.getSprints().subscribe(data=>
      {
        console.log(data);
      } )
    this.fetchSprints();
  }
  fetchSprints(){
    this.sprintService.getSprints().subscribe((data)=>
    {
      this.sprints=data;
    });
  }
  addSprint(){
    this.router.navigate(['/sprintForm']);
  }
}
