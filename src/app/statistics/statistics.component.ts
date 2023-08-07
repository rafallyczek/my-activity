import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../activity/activity.model';
import { ActivityService } from '../activity/activity-service/activity.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  activityList$!: Observable<Activity[]>;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityList$ = this.activityService.getActivities();
  }

}
