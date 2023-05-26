import { Component, OnInit, OnDestroy } from '@angular/core';
import { Activity } from './activity.model';
import { ActivityService } from './activity-service/activity.service';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit, OnDestroy {
  constructor(private activityService: ActivityService) {}

  addBtn = true;
  iconPlus = faPlus;
  subscription!: Subscription;
  activityList!: Activity[];

  ngOnInit(): void {
    this.loadActivities();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleAddBtn(){
    if(this.addBtn){
      this.addBtn = false;
    }else{
      this.addBtn = true;
    }
  }

  loadActivities(){
    this.subscription = this.activityService.getActivities().subscribe((data) => {
      this.activityList = data;
    });
  }
  
}
