import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-heatmap',
  templateUrl: './calendar-heatmap.component.html',
  styleUrls: ['./calendar-heatmap.component.css']
})
export class CalendarHeatmapComponent implements OnInit {

  date = new Date();
  daysInYear!: number;
  offset!: number;

  ngOnInit(): void {
    this.date.setHours(0, 0, 0, 0);
    this.date.setMonth(0, 1);
    this.daysInYear = this.calculateDaysInYear(this.date);
    this.offset = this.date.getDay() === 0 ? 6 : this.date.getDay() - 1;
  }

  //Calculate number of days in current year
  calculateDaysInYear(date: Date): number {
    let year = date.getFullYear();
    return year % 4 === 0 ? ( year % 100 === 0 ? ( year % 400 === 0 ? 366 : 365 ) : 366 ) : 365;
  }

}
