import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
const { Storage } = Plugins;


@Component({
  selector: 'app-enotes',
  templateUrl: './enotes.page.html',
  styleUrls: ['./enotes.page.scss'],
})
export class EnotesPage implements OnInit {

  @ViewChild('appcont1',{"static":false}) appcont1;

  showsearch = false;
  showdate=false;
  showfilter=false;

  mystartdate:any;
  myenddate:any;
  mysearchstring:any="";

  qstring:any="";
  qstringb:any="";
  qstringc:any="";
  qstringd:any="";
  postid:any="";
  userid:any="";
  updatetype:any="1";

  displaytype=1;



  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.myinit();
  }

  ionViewDidEnter() {
   this.menuCtrl.enable(true);
   document.title="Student - My school Portal"
 }

 ngOnInit() {
 }

 async myinit(){
  await this.generalservice.myinit();
  this.qstringc=this.generalservice.subclassid;
  this.qstringd ="1";
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
