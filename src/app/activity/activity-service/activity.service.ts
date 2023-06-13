import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { Activity } from '../activity.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private localStorageService: LocalStorageService) {}

  activities$!: Observable<Activity[]>;

  init(): void {
    if (this.localStorageService.isEmpty()) {
      this.localStorageService.saveData([]);
    }
    this.activities$ = of(this.localStorageService.loadData());
  }

  getActivities(): Observable<Activity[]> {
    return this.activities$;
  }

  getActivity(index: number): Observable<Activity> {
    return this.activities$.pipe(map((activities) => activities[index]));
  }

  addActivity(activity: Activity): void {
    const data = this.localStorageService.loadData();
    data.push(activity);
    this.localStorageService.saveData(data);
    this.activities$ = of(data);
  }

  deleteActivity(index: number): void {
    const data = this.localStorageService.loadData();
    data.splice(index, 1);
    this.localStorageService.saveData(data);
    this.activities$ = of(data);
  }
}
