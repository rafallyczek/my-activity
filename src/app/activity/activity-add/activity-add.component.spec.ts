import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAddComponent } from './activity-add.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ActivityAddComponent', () => {
  let component: ActivityAddComponent;
  let fixture: ComponentFixture<ActivityAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityAddComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ActivityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
