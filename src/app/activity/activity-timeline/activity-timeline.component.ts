import { Component } from '@angular/core';
import { sub } from 'date-fns';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrls: ['./activity-timeline.component.css']
})
export class ActivityTimelineComponent {

  date = new Date();

  subDays(days: number): Date {
    return sub(this.date, { days: days });
  }

}
