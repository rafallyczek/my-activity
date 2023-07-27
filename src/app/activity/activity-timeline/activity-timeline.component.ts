import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { sub } from 'date-fns';
import { ActivityService } from '../activity-service/activity.service';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrls: ['./activity-timeline.component.css']
})
export class ActivityTimelineComponent implements OnInit {

  @Input() index: number = 0;
  @Input() history: Date[] = [];
  @Input() color!: string;
  @Output() activityRecordToggled = new EventEmitter();
  date = new Date();

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.date.setHours(0, 0, 0, 0);
  }

  subDays(days: number): Date {
    return sub(this.date, { days: days });
  }

  toggleActivityRecord(date: Date): void {
    this.activityService.addOrDeleteActivityRecord(this.index, date);
    this.activityRecordToggled.emit();
  }

  findRecord(date: Date): boolean {
    if(this.history.find(record => record.getTime() === date.getTime())){
      return true;
    }
    return false;
  }

}
