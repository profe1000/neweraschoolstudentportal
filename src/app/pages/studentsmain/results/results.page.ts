import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
const { Storage } = Plugins;


@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  @ViewChild('appcont1',{"static":false}) appcont1;

  showsearch = false;
  showdate=false;
  showfilter=false;

  mystartdate:any;
  myenddate:any;
  mysearchstring:any="";

  qstring:any="1";
  qstringb:any="";
  qstringc:any="";
  qstringd:any="";
  postid:any="";
  userid:any="0";
  updatetype:any="1";

  displaytype=1;



  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.myinit();
  }

  ionViewDidEnter() {
   this.menuCtrl.enable(true);
   document.title="Student- My school Portal"
   this.generalservice.getprofile(); 
   this.generalservice.myinit();
   this.userid = this.generalservice.userid+"";
 }

 ngOnInit() {
 }

 async myinit(){
  //await this.getprofile();
 }


 changedisplaypage(index){
    this.displaytype= index;
 }


 async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}

  // Search Column
  toogleshowsearch(){
    this.showsearch = !this.showsearch ;
  }

   startsearch(){
    this.displaytype =1;
    this.qstring = this.mysearchstring;
    this.updatetype=1;
    this.appcont1. refreshinit();
    this.showsearch = false;
   }


  stopsearch(){
    this.mysearchstring="";
    this.qstring="";
    this.qstringb="";
    this.qstringc="";
    this.qstringd="";
    this.userid="";
    this.postid="";
    this.updatetype=1;
    this.appcont1. refreshinit();
    this.showsearch = false;
  }


  removesearchpanel(){
    this.showsearch = false;
  }
  

 
 showedit($event){
  this.postid = $event
  this.changedisplaypage(3);
}


//Get Value from Input
getourselectdvalue($event){
  //alert($event)
}

getourselectdvalueqstringb($event){
   this.qstringb = $event
}

getourselectdvalueqstringc($event){
  this.qstringc = $event
}

getourselectdvalueqstringd($event){
  this.qstringd = $event
}




}
