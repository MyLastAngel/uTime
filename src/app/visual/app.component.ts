import { Component } from '@angular/core';
import { PlannerService } from '@ns/planner';

@Component({
  selector: 'u-time-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'uTime';

  constructor(
    public service : PlannerService
  )
  {

  }

  public onClick()
  {
    this.service.sideMenuMode = this.service.sideMenuMode == 'full' ? 'short' : 'full'; 
    this.service.check();
  }
}
