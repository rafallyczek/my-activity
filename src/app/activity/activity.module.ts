import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { FormsModule } from '@angular/forms';
import { ActivityService } from './activity-service/activity.service';

function initializeActivities(activityService: ActivityService){
  return () => activityService.init();
}

@NgModule({
  declarations: [
    ActivityComponent,
    ActivityAddComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeActivities,
      deps: [ActivityService],
      multi: true
    }
  ]
})
export class ActivityModule { }
