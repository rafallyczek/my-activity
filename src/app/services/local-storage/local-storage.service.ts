import { Injectable } from '@angular/core';
import { Activity } from 'src/app/activity/activity.model';
import { parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  constructor() {}

  isEmpty(): boolean {
    if (localStorage.getItem('activities') == null) {
      return true;
    }
    return false;
  }

  saveData(data: Activity[]): void {
    localStorage.setItem('activities', JSON.stringify(data));
  }

  loadData(): Activity[] {
    const activities: Activity[] = JSON.parse(localStorage.getItem('activities')!);
    activities.forEach(activity => {
      activity.history.forEach((record, index) => activity.history[index] = parseISO(record))
    });
    return activities;
  }
}
