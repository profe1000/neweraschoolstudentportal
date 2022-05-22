import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setprofile',
  templateUrl: './setprofile.page.html',
  styleUrls: ['./setprofile.page.scss'],
})
export class SetprofilePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
  }

  ionViewDidEnter() {
   this.menuCtrl.enable(false);
   document.title="Set Profile- Beaconlife Cash"
 }



 ngOnInit() {
 }


}
