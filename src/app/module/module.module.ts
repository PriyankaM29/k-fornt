import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FeaturesComponent } from './features/features.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropService } from '../Service/dragdrop/dragdrop.service';
import { AddEpicComponent } from './add-epic/add-epic.component';
import { FeatureDashboardComponent } from './feature-dashboard/feature-dashboard.component';
import { FeatureDashboardService } from '../Service/feature-dashboard/feature-dashboard.service';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FeaturesComponent,
    DraganddropComponent,
    AddEpicComponent,
    FeatureDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  
   
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    AdminComponent,
    FeaturesComponent,
    DraganddropComponent,
    FeatureDashboardComponent
  ],
  providers:[DragdropService,FeatureDashboardService]
})
export class ModuleModule { }
