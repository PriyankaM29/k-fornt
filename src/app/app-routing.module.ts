import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './module/admin/admin.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './module/login/login.component';
import { FeaturesComponent } from './module/features/features.component';
import { DraganddropComponent } from './module/draganddrop/draganddrop.component';

const routes: Routes = [
  //admin
  {path:'admin',component:AdminComponent},

  //home
  {path:'home',component:HomeComponent},

  //login
  {path:'login',component:LoginComponent},
  {path:'dragdrop',component:DraganddropComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
