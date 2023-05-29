import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';
import { ActivityService } from './activity-service/activity.service';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(() => {
    const activityServiceSpy = jasmine.createSpyObj<ActivityService>([
      'getActivities',
    ]);
    activityServiceSpy.getActivities.and.callFake(function () {
      return of([
        {
          title: 'test',
          currentStreak: 0,
          longestStreak: 0,
        },
      ]);
    });
    TestBed.configureTestingModule({
      declarations: [ActivityComponent],
      imports: [AppRoutingModule, FontAwesomeModule],
      providers: [
        {
          provide: ActivityService,
          useValue: activityServiceSpy
        }
      ]
    });
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
