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

  //TODO: implement adding activity record to activity's history array
  addActivityRecord(date: Date): void {
    console.log(date);
  }

}
