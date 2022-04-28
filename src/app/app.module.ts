import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlannerModule } from '@ns/planner';
import { AppComponent } from './visual/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
