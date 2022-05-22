import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menuCtrl: MenuController) {
   }

   ionViewDidEnter() {
    this.menuCtrl.enable(true);
    document.title="Home - Beaconlife Cash"
  }

  ngOnInit() {
  }

  
}
