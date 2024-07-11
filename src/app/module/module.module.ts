import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FeaturesComponent } from './features/features.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FeaturesComponent
  ]
})
export class ModuleModule { }
