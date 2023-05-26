import { Component } from '@angular/core';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity-service/activity.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent {

  constructor(private activityService: ActivityService, private router: Router) {}

  activity: Activity = {
    title: "",
    currentStreak: 0,
    longestStreak: 0
  }

  addActivity(activityForm: NgForm){
    this.activityService.addActivity({title: this.activity.title, currentStreak: this.activity.currentStreak, longestStreak: this.activity.longestStreak});
    activityForm.resetForm({
      title: "",
      currentStreak: 0,
      longestStreak: 0
    });
    this.router.navigate(["/activities"]);
  }

}
