import { Component } from '@angular/core';
import { Feature } from '../../Class/Feature/feature';
import { Router } from '@angular/router';
import { FeatureService } from '../../Service/features/feature.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
constructor(private router : Router, private featureService : FeatureService) {}
feature:Feature=new Feature();
 onSubmit(form:NgForm){
  // console.log(form.value)
  this.feature=form.value;
  this.featureService.addFeature(this.feature).subscribe(response=>
    {
      console.log("response from backend",response);
    }, error => {
      console.error('Error submitting feature', error);
    }
  );

  this.router.navigate(['/featureDashboard']);
}

}
