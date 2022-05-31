import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './visual/app.component';

import { ApiService, PlannerModule, PlannerService } from '@ns/planner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    BrowserModule,
    PlannerModule,
  ],
  providers: 
  [
    PlannerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
