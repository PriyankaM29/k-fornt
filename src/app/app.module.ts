import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleModule } from './module/module.module';
import { HomeComponent } from './module/home/home.component';
import { FeatureDashboardComponent } from './module/feature-dashboard/feature-dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './Interceptor/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule
    
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
