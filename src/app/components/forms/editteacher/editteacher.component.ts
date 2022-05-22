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
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.scss'],
})
export class EditteacherComponent implements OnInit {

 
  Surname:any;
  Firstname:any;
  Middlename:any;
  Nationality:any;
  state:any;
  localovernment:any;
  Email:any;
  Phonenumber:any;
  Address:any;
  Gender:any;
  Religion:any;
  Dateofbirth:any;
  Bloodgroup:any;
  Dateofentry:any;
  healthInfo:any;
  imageurl:any;
  teachercategory:any;
  teacherqualification:any;
  teacherposition:any;
  nextofkinname:any;
  nextofkinphone:any;
  nextofkinrship:any;
  nextofkinaddress:any;
  bankname:any;
  AccountNumber:any;
  AccountName:any;
  teacherid:any;

  

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
    console.log(this.generalservice.apiurl + this.generalservice.vieteacherapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.vieteacherapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
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

    
      this.Surname=res["post"][0]["stafflname"]
      this.Firstname=res["post"][0]["stafffname"]
      this.Middlename=res["post"][0]["staffoname"]
      this.Nationality=res["post"][0]["Nationality"]
      this.state=res["post"][0]["state"]
      this.localovernment=res["post"][0]["localgovernment"]
      this.Email=res["post"][0]["email"]
      this.Phonenumber=res["post"][0]["phonenum"]
      this.Address=res["post"][0]["address"]
      this.Gender=res["post"][0]["gender"]
      this.Religion=res["post"][0]["religion"]
      this.Dateofbirth=res["post"][0]["Dateofbirth"]
      this.Bloodgroup=res["post"][0]["Bloodgroup"]
      this.Dateofentry=res["post"][0]["Dateofentry"]
      this.healthInfo=res["post"][0]["healthinfo"]
      this.imageurl=res["post"][0]["dpurl"]
      this.teachercategory=res["post"][0]["staffcategorycategory"]
      this.teacherqualification=res["post"][0]["staffqualification"]
      this.teacherposition=res["post"][0]["staffposition"]
      this.nextofkinname=res["post"][0]["nextofkinname"]
      this.nextofkinphone=res["post"][0]["nextofkinphone"]
      this.nextofkinrship=res["post"][0]["nextofkinrship"]
      this.nextofkinaddress=res["post"][0]["nextofkinaddress"]
      this.bankname=res["post"][0]["bankname"]
      this.AccountNumber=res["post"][0]["AccountNumber"]
      this.AccountName=res["post"][0]["AccountName"]


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
   //alert(this.imageurl + " "+ this.imagesub1 + " " + this.imagesub2 + " "+ this.imagesub3)
   // the post obj
 
   if(this.imageurl == "" || this.imageurl == null || this.imageurl=="noimage"){
       alert("You must Add atleast an image");
       return;
    }
 
 
   var obj = {
    "Surname":this.Surname,
    "Firstname":this.Firstname, 
    "Middlename":this.Middlename,
    "Nationality":this.Nationality,
    "state":this.state,
    "localgovernment":this.localovernment,
    "Email":this.Email,
    "Phonenumber":this.Phonenumber,
    "Address":this.Address,
    "Gender":this.Gender,
    "Religion":this.Religion,
    "Dateofbirth":this.Dateofbirth, 
    "Bloodgroup":this.Bloodgroup,
    "Dateofentry":this.Dateofentry,
    "healthInfo":this.healthInfo,
    "imageurl":this.imageurl,
    "teachercategory":this.teachercategory,
    "teacherqualification":this.teacherqualification,
    "teacherposition":this.teacherposition,
    "nextofkinname":this.nextofkinname,
    "nextofkinphone":this.nextofkinphone,
    "nextofkinrship":this.nextofkinrship,
    "nextofkinaddress":this.nextofkinaddress,
    "bankname":this.bankname,
    "AccountNumber":this.AccountNumber,
    "AccountName":this.AccountName,
    "adminid":this.generalservice.userid,
    "apikey":this.generalservice.apikey,
    "teacherid":this.teacherid
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

  getourselectdvalue($event){
  //alert($event)
}

 receiveurl($event,index){
    //alert($event)
    console.log($event)
    this.imageurl="";
    this.imageurl=$event;
  }

   removefile($event,index){
    console.log($event)
    this.imageurl="";
    this.imageurl=$event;
  }


   ///Get all selected values from dynamic select control

 getourselectdvaluecountry($event){
  //alert($event)
  this.Nationality = $event;
}

getourselectdvaluestate($event){
  //alert($event)
  this.state = $event;
}

getourselectdvaluelga($event){
  //alert($event)
  this.localovernment = $event;
}

getourselectdvaluegender($event){
  //alert($event)
  this.Gender = $event;
}

getourselectdvaluereligion($event){
  //alert($event)
  this.Religion = $event;
}

getourselectdvaluebloodgroup($event){
  //alert($event)
  this.Bloodgroup = $event;
}




 
 }
 

