import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
const { Storage } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  
  bardata:any=[];
  labeldata:any=[];
  colorArray: any=[];
  bordercolorArray: any=[];


  bardatab:any=[];
  labeldatab:any=[];
  colorArrayb: any=[];
  bordercolorArrayb: any=[];

  showgraph=false;
  showgraphb=false;

  userid =0;


  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
     this.myinit();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    document.title="Student Home - School Management System"
    this.generalservice.getprofile(); 
    this.generalservice.myinit();
    this.userid = this.generalservice.userid;
  }
 

  
 async loadgraphdetails(){
  this.labeldata = ['Income','Expenses']
  this.bardata=[578900, 209100]
  this.colorArray= ['#2CC54E','#F96571']
  this.bordercolorArray=['#2CC54E','#F96571']



   // Second Chart
   this.labeldatab = [this.getdaynum(-6), this.getdaynum(-5), this.getdaynum(-4), this.getdaynum(-3), this.getdaynum(-2), this.getdaynum(-1), this.getdaynum(0)]
   this.bardatab=[45,62,71,68,69,65,71]

   for (let i = 0; i < 7; i++) {
    this.colorArrayb.push("rgba(31, 121, 168,1)");
    this.bordercolorArrayb.push("rgba(31, 121, 168,1)");
    }

   this.showgraph=true; 
   this.showgraphb=true;
}

async myinit(){
 await this.loadgraphdetails();
}





 async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}


    // Date manipulation
    getdaynum(int){
      var dt = new Date();
      dt.setDate(dt.getDate() + int);
      var myday =  ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat']
      return  myday[dt.getDay()];
    }


}
