import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity-service/activity.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 } from 'uuid';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  activityForm!: FormGroup;

  constructor(private activityService: ActivityService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      id: v4(),
      title: ["", [Validators.required]],
      currentStreak: [0],
      longestStreak: [0],
      history: [[]]
    });
  }

  addActivity(): void {
    this.activityService.addActivity(this.activityForm.getRawValue());
    this.activityForm.reset(
      {
        id: v4(),
        title: "",
        currentStreak: 0,
        longestStreak: 0,
        history: []
      }
    );
    this.router.navigate(["/activities"]);
  }

}
