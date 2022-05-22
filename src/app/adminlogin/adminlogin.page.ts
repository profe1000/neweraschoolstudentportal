import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
  hideprogress=true;
  email:any;
  pass:any;

  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,private storage: Storage,public httpClient: HttpClient, private router: Router, public loadingController: LoadingController) {
     this.storage.remove('adminlogindetails');
   }

  ionViewDidEnter() {
    this.hideprogress=true;
    this.menuCtrl.enable(false);
    document.title="Signin - Gadol Admin"
  }

  ngOnInit() {
  }

  login(){
    
  }

  

}
