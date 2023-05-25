import { Component, OnInit, OnDestroy } from '@angular/core';
import { Activity } from './activity.model';
import { ActivityService } from './activity-service/activity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit, OnDestroy {
  constructor(private activityService: ActivityService) {}
  
  subscription!: Subscription;
  activityList!: Activity[];

  ngOnInit(): void {
    this.subscription = this.activityService.getActivities().subscribe((data) => {
      this.activityList = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
