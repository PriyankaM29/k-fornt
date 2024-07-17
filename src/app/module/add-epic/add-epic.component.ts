import { Component } from '@angular/core';
import { Epic } from '../../Class/Epic/epic';
import { EpicService } from '../../Service/epic/epic.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-epic',
  templateUrl: './add-epic.component.html',
  styleUrl: './add-epic.component.css'
})
export class AddEpicComponent {
  epic:Epic=new Epic();
  constructor(private epicService:EpicService,private router:Router){}

  onSubmit(form:NgForm){
    const featureId= {
      
    }
    this.epic=form.value;
    this.epicService.addEpic(this.epic).subscribe(response=>
      {
        console.log("response from backend",response);
      });
  }

}
