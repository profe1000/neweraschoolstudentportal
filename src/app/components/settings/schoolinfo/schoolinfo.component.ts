import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolinfo',
  templateUrl: './schoolinfo.component.html',
  styleUrls: ['./schoolinfo.component.scss'],
})
export class SchoolinfoComponent implements OnInit {

  schoolname:any;
  slogan:any;
  phonenumber:any;
  email:any;
  schoologo:any;


  constructor() { }

  ngOnInit() {}

}
