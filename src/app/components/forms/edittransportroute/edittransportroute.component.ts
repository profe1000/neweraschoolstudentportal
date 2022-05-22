import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, IonInfiniteScroll } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Component({
  selector: 'app-edittransportroute',
  templateUrl: './edittransportroute.component.html',
  styleUrls: ['./edittransportroute.component.scss'],
})
export class EdittransportrouteComponent implements OnInit {

  Subclass:any;

  
  @Input() apihost: string = '';
  @Input() label: string = '';
  @Input() catid: string = '1';
  @Input() tagid: string = '1';
  @Input() qstring: string = '';
  @Input() qstringb: string = '';
  @Input() qstringc: string = '';
  @Input() qstringd: string = '';
  @Input() userid: string = '';
  @Input() updatetype: string = '1';
  @Input() apikey: string = '';
  @Input() sortby: string = '';
  @Input() pagenum: Number = 1;
  @Input() pagesize: Number = 20;
  @Input() showmainarticle: Boolean = true;
  @Input() delay: Number = 50;
  @Input() storagekey: string = 'students';
  @Input() disablepager: Boolean = false;
 
  @Output() reloadstarted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() reloadfailure: EventEmitter<any> = new EventEmitter();
 
  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
 
  Location:any;
  Price:any;
  transportroutesid:any;
  UUID:any;

  connectionstatuscode=0;
  featurepost:any = [];
  newsite:Boolean=false;
  demopost=[1,2,3,4,5,6,7,8,9,10]
 
  @Input() shownodata: Boolean = true;
  @Input() shownoconnection: Boolean = true;
  startproceessing:Boolean=false;
  processingmsg:any;
 
  constructor(public generalservice: GeneralserviceService,public menuCtrl: MenuController,public alertController: AlertController,public navCtrl: NavController, public toastController: ToastController, private router: Router, private httpClient: HttpClient,
    public loadingController: LoadingController,  public sanitizer: DomSanitizer) {
      this.loadinitialwithinitial();
    }
 
 
 
 
    
 async loadinitialwithinitial(){
   setTimeout(async()  => {
    await this.loadinit();
   },10)
 }
 
 
 async loadinit(){
   setTimeout(async()  => {
     await this.loadpost();
   },Number(this.delay))
 }
 
 
  ngOnInit() {}
 
 
 
  geturl(){
    console.log(this.generalservice.apiurl + this.generalservice.viewstudentapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.viewstudentapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
     return defaulturl; 
  }
 
 // Loading Function
 
 async loadpost(){
  this.connectionstatuscode=0;
  this.loadstarted.emit();
  await this.httpClient
  .get(this.geturl())
  .subscribe(async res => {
 
    this.featurepost = [];
    this.featurepost = res["post"];
    console.log(res["post"]);
    
    this.newsite=true;
 
    if(res["statuscode"] == 100){
    this.loadcompleted.emit();
    this.connectionstatuscode=1;
    }
 
    if(res["statuscode"] != 100){
      this.loadcompletednull.emit();
      if(this.shownodata){
        this.connectionstatuscode=2;
      }
      return
    }
 
    await Storage.set({
      key: this.storagekey,
      value: JSON.stringify(this.featurepost)
    });
 
   }, (err) => {
    console.log(err);
    this.loadfailure.emit();
    if(this.shownoconnection){
      this.connectionstatuscode=3;
    }
  });
 }
 
 async reloadinit(){
  setTimeout(async()  => {
    await this.reloadpost();
  },Number(this.delay))
 }
 
 
 async reloadpost(){
  let infscr= document.getElementById("myinfinitescroll") as HTMLIonInfiniteScrollElement
  infscr.disabled=false;
  this.pagenum=1;
  this.reloadstarted.emit();
  await this.httpClient
  .get(this.geturl())
  .subscribe(async res => {
    this.featurepost = [];
    this.featurepost = res["post"];;
    console.log("success1");
    this.newsite=true;
    this.reloadcompleted.emit();
    
    this.connectionstatuscode=1;
    
    if(res["statuscode"] == 99){
      this.reloadcompletednull.emit();
      if(this.shownodata){
        this.connectionstatuscode=2;
      }
      return
    }
 
    await Storage.set({
      key: this.storagekey,
      value: JSON.stringify(this.featurepost)
    });
 
   }, (err) => {
    console.log(err);
    this.reloadfailure.emit();
    if(this.shownoconnection){
      this.connectionstatuscode=3;
    }
  });
 }
 
 async refreshinit(){
  setTimeout(async()  => {
    await this.refreshpost();
  },Number(this.delay))
 }
 
 async refreshpost(){
  let infscr= document.getElementById("myinfinitescroll") as HTMLIonInfiniteScrollElement
  infscr.disabled=false;
  this.featurepost = []
  this.pagenum=1;
  this.reloadstarted.emit();
  this.connectionstatuscode=0;
 
  await this.httpClient
  .get(this.geturl())
  .subscribe(async res => {
    this.featurepost = [];
    this.featurepost = res["post"];;
    console.log("success1");
    this.newsite=true;
    this.reloadcompleted.emit();
    this.connectionstatuscode=1;
 
    if(res["statuscode"] == 99){
      this.reloadcompletednull.emit();
      if(this.shownodata){
        this.connectionstatuscode=2;
      }
      return
    }
 
    await Storage.set({
      key: this.storagekey,
      value: JSON.stringify(this.featurepost)
    });
 
   }, (err) => {
    console.log(err);
    this.reloadfailure.emit();
    if(this.shownoconnection){
      this.connectionstatuscode=3;
    }
  });
 }
 
 //This use local storage we can upadte this with capacitor storage
 async loadsyncpost(){
 
    const ret = await Storage.get({ key: this.storagekey});
    if (ret.value == null){
      return;
    }
  
   
    const val = JSON.parse(ret.value);
    console.log(val);
    this.featurepost = val;
     this.connectionstatuscode =1;
 } 
 
 async presentToast(msg) {
   const toast = await this.toastController.create({
     message: msg ,
     duration: 2000
   });
   toast.present();
 }
 
 
 
 
 // Finalize
 async proceed(){
 
 
   var obj = {
           "apikey":""
           };
   
   //Convert the obj to json string
  var jsonData = JSON.stringify(obj);
 
 
  this.startproceessing=true;
  this.loadstarted.emit();
  this.processingmsg="";
  
   await this.httpClient
      .post(this.generalservice.apiurl+'api/admin/add/addstoreitem.ashx',jsonData)
      .subscribe(async res => {
         //Connection successful, once you read the data in res you use the status code to perform logic
        console.log(res);
        this.startproceessing=false;
 
         
     if (res["statuscode"]!= 99){
       this.presentToast(res["status"]);
       this.loadcompletednull.emit();
       this.processingmsg=res["status"];
    }
   
    if (res["statuscode"]== 99){
        this.loadcompleted.emit();
        this.presentToast(res["status"]);
        this.processingmsg=res["status"];
     }
      
   }, (err) => {
       //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
       console.log(err);
       this.startproceessing=false;
       this.loadfailure.emit();
       this.presentToast("Unable to connect to the Internet")
       this.processingmsg="Unable to connect to the Internet";
     });
  }
 
 }
 