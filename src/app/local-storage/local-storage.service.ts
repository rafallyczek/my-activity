import { Injectable } from '@angular/core';
import { Activity } from '../activity/activity.model';

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
    return JSON.parse(localStorage.getItem('activities')!);
  }
}
