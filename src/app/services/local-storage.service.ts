import { Injectable } from '@angular/core';
import { Activity } from '../activity/activity.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  isEmpty() {
    if (localStorage.getItem('activities') == null) {
      return true;
    }
    return false;
  }

  saveData(data: Activity[]) {
    localStorage.setItem('activities', JSON.stringify(data));
  }

  loadData() {
    return JSON.parse(localStorage.getItem('activities')!);
  }
}
