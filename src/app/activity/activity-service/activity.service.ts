import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { Activity } from '../activity.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private localStorageService: LocalStorageService) { }

  activities$!: Observable<Activity[]>;

  init(){
    if (this.localStorageService.isEmpty()) {
      this.localStorageService.saveData([]);
    }
    this.activities$ = of(this.localStorageService.loadData());
  }

  getActivities(){
    return this.activities$;
  }

  addActivity(activity: Activity){
    const data = this.localStorageService.loadData();
    data.push(activity);
    this.localStorageService.saveData(data);
    this.activities$ = of(data);
  }

}
