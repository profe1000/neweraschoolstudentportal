import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

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

  const ret = await Storage.get({ key: 'studentlogindetails'});
  if (ret.value == null){
    this.router.navigate(["login"]);
  }

  const val = JSON.parse(ret.value);
  console.log(val)
 }


 async syncprofile(){
  
  //Convert the obj to json string
 var jsonData = JSON.stringify("");

  await this.http
     .post('https://beaconlifecash.com.ng/api/users/auth/viewprofileapi.ashx',jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);

        
    if (res["statuscode"]!= 99){
      this.presentToast(res["status"]);
   }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
     await Storage.set({
       key: 'userlogindetails',
       value: JSON.stringify(res)
     });

    }
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
      this.presentToast("Unable to connect to the Internet")
     });
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

}
