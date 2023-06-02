import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';
import { ActivityService } from './activity-service/activity.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {}

  addBtn = true;
  iconPlus = faPlus;
  activityList$!: Observable<Activity[]>;

  ngOnInit(): void {
    this.loadActivities();
  }

  toggleAddBtn(){
    if(this.addBtn){
      this.addBtn = false;
    }else{
      this.addBtn = true;
    }
  }

  loadActivities(){
    this.activityList$ = this.activityService.getActivities();
  }
  
}
