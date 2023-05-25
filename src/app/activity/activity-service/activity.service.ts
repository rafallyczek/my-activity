import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { Activity } from '../activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private localStorageService: LocalStorageService) { }

  activities: Activity[] = [];

  init(){
    if (this.localStorageService.isEmpty()) {
      this.localStorageService.saveData(this.activities);
    } else {
      this.activities = this.localStorageService.loadData();
    }
  }

  getActivities(){
    return this.activities;
  }
}
