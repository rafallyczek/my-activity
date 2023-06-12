import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityService } from './activity-service/activity.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';

function initializeActivities(activityService: ActivityService){
  return () => activityService.init();
}

@NgModule({
  declarations: [
    ActivityComponent,
    ActivityAddComponent,
    ActivityEditComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
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
