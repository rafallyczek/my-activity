import { Component } from '@angular/core';
import { Activity } from './activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  activityList: Activity[] = [
    {
      title: "Running",
      currentStreak: 0,
      longestStreak: 0
    },
    {
      title: "Reading",
      currentStreak: 7,
      longestStreak: 7
    },
    {
      title: "Listening practice",
      currentStreak: 1,
      longestStreak: 5
    },
  ];

}
