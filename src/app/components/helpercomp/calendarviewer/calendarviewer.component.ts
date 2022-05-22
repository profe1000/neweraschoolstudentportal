import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarviewer',
  templateUrl: './calendarviewer.component.html',
  styleUrls: ['./calendarviewer.component.scss'],
})
export class CalendarviewerComponent implements OnInit {

  othermessage:any;
 
  constructor() { }

  ngOnInit() {}

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

}
