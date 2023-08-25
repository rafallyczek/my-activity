import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { Activity } from 'src/app/activity/activity.model';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string | null => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      clear: () => {
        store = {};
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save activities in local storage', () => {
    const activities: Activity[] = [
      {
        id: "test",
        title: "test",
        currentStreak: 0,
        longestStreak: 0,
        history: [],
        color: "test"
      }
    ]
    service.saveData(activities);
    expect(JSON.parse(localStorage.getItem("activities")!)).toEqual(activities);
  });

  it('should load activities from local storage', () => {
    const activities: Activity[] = [
      {
        id: "test",
        title: "test",
        currentStreak: 0,
        longestStreak: 0,
        history: [],
        color: "test"
      }
    ]
    localStorage.setItem("activities", JSON.stringify(activities));
    expect(service.loadData()).toEqual(activities);
  });

  it('should return "true" when local storage is empty', () => {
    localStorage.clear();
    expect(service.isEmpty()).toBe(true);
  });

  it('should return "false" when local storage contains activities', () => {
    const activities: Activity[] = [
      {
        id: "test",
        title: "test",
        currentStreak: 0,
        longestStreak: 0,
        history: [],
        color: "test"
      }
    ]
    localStorage.setItem("activities", JSON.stringify(activities));
    expect(service.isEmpty()).toBe(false);
  });
});
