import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../activity-service/activity.service';
import { Observable, map } from 'rxjs';
import { Activity } from '../activity.model';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css'],
})
export class ActivityEditComponent implements OnInit {
  constructor(
    private activatedRouteService: ActivatedRoute,
    private activityService: ActivityService
  ) {}

  activity$!: Observable<Activity>;

  ngOnInit(): void {
    this.activatedRouteService.params
      .pipe(map((params) => this.activityService.getActivity(params['index'])))
      .subscribe((activity) => (this.activity$ = activity));
  }
}
