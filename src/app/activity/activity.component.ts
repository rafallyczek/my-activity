import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';
import { ActivityService } from './activity-service/activity.service';
import { faPlus, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { sub } from 'date-fns';


@Component({
  selector: 'app-activities',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {}

  addBtn = true;
  iconPlus = faPlus;
  iconPen = faPen;
  iconXmark = faXmark;
  activityList$!: Observable<Activity[]>;
  date = new Date();

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activityList$ = this.activityService.getActivities();
  }
  
  deleteActivity(index: number): void {
    this.activityService.deleteActivity(index);
  }

  toggleAddBtn(): void {
    this.addBtn = !this.addBtn;
  }

  subDays(days: number): Date {
    return sub(this.date, {days: days});
  }

}
