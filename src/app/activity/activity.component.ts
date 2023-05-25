import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';
import { ActivityService } from './activity-service/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {}

  activityList: Activity[] = [];

  ngOnInit(): void {
    this.activityList = this.activityService.getActivities();
  }
}
