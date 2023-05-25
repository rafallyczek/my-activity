import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivityComponent } from './activity/activity.component';
import { ActivityAddComponent } from './activity/activity-add/activity-add.component';
import { FormsModule } from '@angular/forms';
import { ActivityService } from './activity/activity-service/activity.service';

function initializeApp(activityService: ActivityService){
  return () => activityService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ActivityAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ActivityService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
