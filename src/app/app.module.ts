import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivityModule } from './activity/activity.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarHeatmapComponent } from './statistics/calendar-heatmap/calendar-heatmap.component';
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    CalendarHeatmapComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    ActivityModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
