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
  selector: 'app-autocompserver',
  templateUrl: './autocompserver.component.html',
  styleUrls: ['./autocompserver.component.scss'],
})
export class AutocompserverComponent implements OnInit {

  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;

  @Input() apihost: string = '';
  @Input() label: string = '';
  @Input() catid: string = '1';
  @Input() tagid: string = '1';
  @Input() qstring: string = '';
  @Input() qstringb: string = '';
  @Input() qstringc: string = '';
  @Input() qstringd: string = '';
  @Input() userid: string = '';
  @Input() postid: string = '';
  @Input() updatetype: string = '1';
  @Input() apikey: string = '';
  @Input() sortby: string = '';
  @Input() pagenum: Number = 1;
  @Input() pagesize: Number = 20;
  @Input() showmainarticle: Boolean = true;
  @Input() delay: Number = 50;
  @Input() storagekey: string = 'students';
  @Input() disablepager: Boolean = false;

  @Input() headername: string = 'Select'
  @Input() apiurl: string = 'https://mystudyappapi.profeworld.com/mainapi/sitelogic/viewapi/viewvideos.ashx';
  @Input() titlename: string = "title";
  @Input() valuename: string ="videoid";

  @Output() reloadstarted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() reloadfailure: EventEmitter<any> = new EventEmitter();

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();

  
  @Output() loadeditfunction: EventEmitter<any> = new EventEmitter();
  @Output() loadorderdespatch: EventEmitter<any> = new EventEmitter();
  @Output() loadordermessage: EventEmitter<any> = new EventEmitter();

  
  @Output() getselectdvalue: EventEmitter<any> = new EventEmitter();
  
  featurepost:any = [];
  newsite:Boolean=false;
  demopost=[1,2,3,4,5,6,7,8,9,10]

  autocomptext:any;

  slidefeature = {
    initialSlide: 0,
    slidesPerView:1, 
    autoplay:true,
    speed: 400
  };

  studentstatus=["<span class='w3-text-orange w3-round'> Pending </span>", "<span class='w3-text-green  w3-round'> Active  </span>","<span class='w3-text-blue  w3-round'> Graduated </span>","<span class='w3-text-pale-green  w3-round'> Archive </span>","<span class='w3-text-red'> Deleted </span>"]
  paymentstatus=["Not Paid","Paid"];

  loading:any;

  orderfilter:any="0";
  orderfiltername:any="All Students";
  orderfilternamearray=["All Students", "Pending Orders","Confirm Orders","Transist Orders","Delivered Orders","Rejected Orders"]
  orderfilterupdatetype=["1", "2","3","4","5","6"]

  @Input() shownodata: Boolean = true;
  @Input() shownoconnection: Boolean = true;

  //connectionstatuscode 0 = Loading, 1 = Data, 2=No Data, 3 = No connection,5 = nothing shows
  connectionstatuscode=5;

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
     //await this.loadpost();
     if(this.disablepager){
      this.toggleInfiniteScroll();
    }
   },Number(this.delay))
 }


  ngOnInit() {}

  updatepostview(){
    this.pagenum= 1;
    this.featurepost = [];
    this.orderfiltername=this.orderfilternamearray[this.orderfilter]
    this.refreshpost();
  }


  geturl(){
    console.log(this.generalservice.apiurl + this.generalservice.viewparentapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.viewparentapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
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

async refreshinit(){
  setTimeout(async()  => {
    await this.refreshpost();
  },Number(this.delay))
}

async refreshpost(){
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
  
  loadData(event) {
    //this.noconnection=false;
    this.pagenum = Number(this.pagenum)+1;
     this.httpClient
      .get(this.geturl())
      .subscribe(res => {

      if(res["statuscode"] == 100){
       this.featurepost =   this.featurepost.concat(res["post"]);
       event.target.complete();
        }

      // alert(this.featurepost.length)
       if (this.featurepost.length < (Number(this.pagesize) * Number(this.pagenum)) ) {
        console.log("disabled");
        event.target.disabled = true;
        event.target.complete();
      }
       console.log("success");
       }, (err) => {
        console.log(err);
      });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }



  realmoney(amount){
    return "₦" + amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace("$","")
  }


 //Dateformattting
 mydatestring(datestring){
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var day="";

  var d = new Date(datestring);

  
  if (d.getDate() < 10){
    day="0" +  d.getDate() +"";
  } else{
    day=  d.getDate() +"";
  }

  var n = day + "-"  + mS[d.getUTCMonth()] + "-"  + d.getUTCFullYear();
  return n; 
 }

 returndatetimestr(datestring){
  var mydate = new Date(datestring);
  var monthst, dayst, hr,mm;
  if((mydate.getMonth()+1) < 10){
    monthst=  "-0"
   } else{
    monthst= "-"
   }

   if(mydate.getDate() < 10){
    dayst=  "-0"
   } else{
    dayst=  "-"
   }

   if(mydate.getHours() < 10){
    hr=  "0" + mydate.getHours()
   } else{
    hr=  mydate.getHours()
   }

   
   if(mydate.getMinutes() < 10){
    mm=  "0" + mydate.getMinutes()
   } else{
    mm=  mydate.getMinutes()
   }


  //2020-05-17T01:00:00
  console.log(mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate()+ "T"+ hr +":" + mm + ":00" )
  return (mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate()+ "T"+ hr +":" + mm + ":00" )
}

returndatestr(datestring){
  var mydate = new Date(datestring);
  console.log(mydate)

 var monthst, dayst;

  if((mydate.getMonth()+1) < 10){
   monthst=  "-0"
  } else{
   monthst= "-"
  }

  if(mydate.getDate() < 10){
   dayst=  "-0"
  } else{
   dayst=  "-"
  }
 
  console.log(mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate())
  return mydate.getFullYear()+ monthst +(mydate.getMonth()+1) + dayst + mydate.getDate();
}

returnfulldatestr(datestring){
  var mydate = new Date(datestring);
  console.log(mydate)
  return (mydate)
}


//show Toast
async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}


async startloading(msg) {
  this.loading = await this.loadingController.create({
    message: msg
  });
  await this.loading.present();
}

async stoploading() {
  await this.loading.dismiss();
}

//Emit Postid
loadchange($event){
  if (this.autocomptext == ""){
    this.connectionstatuscode = 5;
    return;
  }
  this.qstring = this.autocomptext;
  this.reloadpost();
}

getselectedindex(pageindex){
  this.autocomptext = this.featurepost[pageindex].parentSurname + ' ' +  this.featurepost[pageindex].parentFirstname + ' ' +  this.featurepost[pageindex].parentMiddlename;
  this.connectionstatuscode = 5;
  this.getselectdvalue.emit(this.featurepost[pageindex].parentid);
  
  
  setTimeout(async()  => {
    this.connectionstatuscode = 5;
   },100)
}

}

