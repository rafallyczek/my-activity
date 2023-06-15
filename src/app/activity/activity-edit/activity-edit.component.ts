import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../activity-service/activity.service';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css'],
})
export class ActivityEditComponent implements OnInit {
  activityForm!: FormGroup;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      currentStreak: [0],
      longestStreak: [0],
      history: [[]],
    });
    this.setForm();
  }

  setForm() {
    this.activatedRouteService.params
      .pipe(map((params) => this.activityService.getActivity(params['index'])))
      .subscribe((activity) => {
        if (activity == null) {
          this.router.navigate(['/activities']);
        } else {
          this.activityForm.setValue(activity);
        }
      });
  }

  updateActivity() {
    console.log(this.activityForm.getRawValue());
  }
}
