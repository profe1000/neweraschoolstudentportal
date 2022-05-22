import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  @ViewChild('appcont1',{"static":true}) appcont1;

  showsearch = false;
  showdate=false;
  showverify=false;

  mystartdate:any;
  myenddate:any;
  mysearchstring:any;

  qstring:any="";
  qstringb:any="";
  updatetype:any="1";

  displaytype=1;
  postid:any;



  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.myinit();
  }

  ionViewDidEnter() {
   this.menuCtrl.enable(true);
   document.title="Student - My school Portal"
 }

 ngOnInit() {
 }

 async myinit(){
  //await this.getprofile();
 }


 changedisplaypage(index){
     this.displaytype= index;
 }

 async getprofile(){

  const ret = await Storage.get({ key: 'adminlogindetails'});
  if (ret.value == null){
    this.router.navigate(["login"]);
  }

  const val = JSON.parse(ret.value);
  console.log(val)
 }



 async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}

  // Search Column
stopsearch(){
   this.toogleshowsearch();
   this.qstring="";
   this.qstringb="";
   this.updatetype=1;
   this.appcont1.refreshinit();
 }


 startsearch(){
  this.toogleshowsearch();
  this.qstring=this.mysearchstring;
  this.updatetype=3;
  this.appcont1. refreshinit();
 }


  toogleshowsearch(){
    this.showsearch = !this.showsearch ;
  }


  startshowverify(){

    if(!this.showverify){
      this.updatetype=8;
      this.appcont1.refreshinit();
    } else{
      this.updatetype=1;
      this.appcont1.refreshinit();
    }
    this.showverify= !this.showverify;
   }
  

 
   // Search Column

stopdate(){
  this.toogleshowdate();
  this.qstring="";
  this.qstringb="";
  this.updatetype=1;
  this.appcont1. refreshinit();
  this.appcont1.reloadpost();
}


startdate(){
  this.toogleshowdate();
  this.qstring=this.mystartdate;
  this.qstringb=this.myenddate;
  this.updatetype=5;
  this.appcont1.refreshinit();
}


 toogleshowdate(){
   this.showdate= !this.showdate;
 }

 
 showedit($event){
  this.postid = $event
  this.changedisplaypage(3);
}

}
