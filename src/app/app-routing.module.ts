import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './module/admin/admin.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';
import { FeaturesComponent } from './module/features/features.component';
import { DraganddropComponent } from './module/draganddrop/draganddrop.component';
import { FeatureDashboardComponent } from './module/feature-dashboard/feature-dashboard.component';
import { AddEpicComponent } from './module/add-epic/add-epic.component';
import { features } from 'process';

const routes: Routes = [
  //admin
  {path:'admin',component:AdminComponent},

  //home
  {path:'home',component:HomeComponent},

  //login
  {path:'login',component:LoginComponent},
  //drag and drop
  {path:'dragdrop',component:DraganddropComponent},
  //feature dashboard
  {path:'featureDashboard',component:FeatureDashboardComponent},
  // add epic
  {path:'addEpic',component:AddEpicComponent},

  {path:'featureFrom',component:FeatureDashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
