import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  activityList: Activity[] = [];

  ngOnInit(): void {
    if (this.localStorageService.isEmpty()) {
      this.localStorageService.saveData(this.activityList);
    } else {
      this.activityList = this.localStorageService.loadData();
    }
  }
}
