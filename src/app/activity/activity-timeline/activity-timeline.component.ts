import { Component, Input, OnInit } from '@angular/core';
import { sub } from 'date-fns';
import { ActivityService } from '../activity-service/activity.service';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrls: ['./activity-timeline.component.css']
})
export class ActivityTimelineComponent implements OnInit {

  @Input() index = 0;
  date = new Date();

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.date.setHours(0, 0, 0, 0);
  }

  subDays(days: number): Date {
    return sub(this.date, { days: days });
  }

  toggleActivityRecord(date: Date): void {
    this.activityService.addOrDeleteActivityRecord(this.index, date);
  }

}
