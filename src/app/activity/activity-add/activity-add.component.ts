import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity-service/activity.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      title: ["", [Validators.required]],
      currentStreak: [0],
      longestStreak: [0]
    });
  }

  addActivity(){
    this.activityService.addActivity(this.activityForm.getRawValue());
    this.activityForm.reset(
      {
        title: "",
        currentStreak: 0,
        longestStreak: 0
      }
    );
    this.router.navigate(["/activities"]);
  }

}
