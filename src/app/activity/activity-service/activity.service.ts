import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { Activity } from '../activity.model';
import { Observable, map, of } from 'rxjs';
import { sub, toDate } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  activities$!: Observable<Activity[]>;

  constructor(private localStorageService: LocalStorageService) {}

  init(): void {
    if (this.localStorageService.isEmpty()) {
      this.localStorageService.saveData([]);
    }
    this.activities$ = of(this.localStorageService.loadData());
  }

  getActivities(): Observable<Activity[]> {
    return this.activities$;
  }

  getActivity(index: number): Activity | null {
    let result!: Activity | null;
    this.activities$
      .pipe(
        map((activities) => {
          return index > activities.length - 1 || index < 0
            ? null
            : activities[index];
        })
      )
      .subscribe((activity) => {
        result = activity;
      });
    return result;
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

  updateActivity(activity: Activity): void {
    const data = this.localStorageService.loadData();
    const index = data.findIndex((item) => item.id === activity.id);
    data[index] = activity;
    this.localStorageService.saveData(data);
    this.activities$ = of(data);
  }

  addOrDeleteActivityRecord(index: number, date: Date): void {
    let activity = this.getActivity(index);

    if (activity == null) {
      return;
    }

    if (!activity?.history.find((record) => record.getTime() === date.getTime())) {
      activity?.history.push(date);
    } else {
      let recordIndex = activity?.history.findIndex((record) => record.getTime() === date.getTime());
      activity.history.splice(recordIndex, 1);
    }

    activity.history = activity.history.sort((dateA, dateB) => dateB.getTime() - dateA.getTime());

    activity = this.updateStreaks(activity);

    this.updateActivity(activity);
  }

  updateStreaks(activity: Activity): Activity {

    activity.currentStreak = this.calculateCurrentStreak(activity);
    activity.longestStreak = this.calculateLongestStreak(activity);
    return activity;

  }

  calculateCurrentStreak(activity: Activity): number {

    if (activity.history.length == 0){
      return 0;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (activity.history[0].getTime() !== today.getTime()){
      return 0;
    }

    let date = activity.history[0];

    let currentStreak = 1;

    for (let i = 1; i<activity.history.length; i++){
      let yesterday = sub(date, { days: 1 });
      if (activity.history[i].getTime() === yesterday.getTime()) {
        currentStreak += 1;
        date = toDate(activity.history[i]);
      } else {
        break;
      }
    }

    return currentStreak;

  }

  calculateLongestStreak(activity: Activity): number {

    if (activity.history.length == 0){
      return 0;
    }

    let date = activity.history[0];

    let longestStreak = 0;
    let count = 1;

    for (let i = 1; i<activity.history.length; i++){
      let yesterday = sub(date, { days: 1 });
      if (activity.history[i].getTime() === yesterday.getTime()) {
        count += 1;
      } else {
        if (count > longestStreak) {
          longestStreak = count;
        }
        count = 1;
      }
      date = toDate(activity.history[i]);
    }

    if (count > longestStreak) {
      longestStreak = count;
    }

    return longestStreak;

  }

}
