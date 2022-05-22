import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, IonInfiniteScroll } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-selectservercomp',
  templateUrl: './selectservercomp.component.html',
  styleUrls: ['./selectservercomp.component.scss'],
})
export class SelectservercompComponent implements OnInit {

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
  @Input() pagesize: Number = 50;
  @Input() showmainarticle: Boolean = true;
  @Input() delay: Number = 50;
  @Input() storagekey: string = 'goodscategory';
  @Input() selvalue: string = ''
  @Input() headername: string = 'Select'
  @Input() apiurl: string = 'https://mystudyappapi.profeworld.com/mainapi/sitelogic/viewapi/viewvideos.ashx';
  @Input() titlename: string = "title";
  @Input() valuename: string ="videoid";
  titlearray=[];
  valuearray=[];


  @Output() reloadstarted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() reloadfailure: EventEmitter<any> = new EventEmitter();

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
  
  @Output() getselectdvalue: EventEmitter<any> = new EventEmitter();
  
  featurepost:any = [];
  newsite:Boolean=false;
  demopost=[1,2,3,4,5,6,7,8,9,10]

 

  category:any="0";

  slidefeature = {
    initialSlide: 0,
    slidesPerView:1, 
    autoplay:true,
    speed: 400
  };

  loading:any;


  constructor(public menuCtrl: MenuController,public alertController: AlertController,public navCtrl: NavController, public toastController: ToastController, private router: Router, private httpClient: HttpClient,
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
    
    console.log(this.apiurl+"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.apiurl+"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
     return defaulturl; 
  }


  async loadpost(){
    this.loadstarted.emit();
    await this.httpClient
    .get(this.geturl())
    .subscribe(res => {
      this.featurepost = [];
      this.featurepost = res["post"];
      for (var i =0; i < this.featurepost.length; i++){
        this.titlearray[i]= this.featurepost[i][this.titlename];
        this.valuearray[i]= this.featurepost[i][this.valuename];
      }

      console.log(res["post"]);
      this.newsite=true;
      this.loadcompleted.emit();

      this.category =  this.selvalue +"";

      if(res["statuscode"] == 99){
        this.loadcompletednull.emit();
      }

     }, (err) => {
      console.log(err);
      this.loadfailure.emit();
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
    await this.httpClient
    .get(this.geturl())
    .subscribe(res => {
      this.featurepost = [];
      this.featurepost = res["post"];;
      console.log("success1");
      this.newsite=true;
      this.reloadcompleted.emit();
      
      if(res["statuscode"] == 99){
        this.reloadcompletednull.emit();
        this.presentToast("No User Found");
      }

     }, (err) => {
      console.log(err);
      this.reloadfailure.emit();
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
    await this.httpClient
    .get(this.geturl())
    .subscribe(res => {
      this.featurepost = [];
      this.featurepost = res["post"];;
      console.log("success1");
      this.newsite=true;
      this.reloadcompleted.emit();
      
      if(res["statuscode"] == 99){
        this.reloadcompletednull.emit();
        this.presentToast("No User Found");
      }

     }, (err) => {
      console.log(err);
      this.reloadfailure.emit();
    });
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


  openpage(pageid){
    this.router.navigate(['userdetails/'+ pageid + '']);
  }

  realmoney(amount){
    return "₦" + amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace("$","")
  }

  getselectedindex(){
    this.getselectdvalue.emit(this.category);
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


// Delete Function here


async startloading(msg) {
  this.loading = await this.loadingController.create({
    message: msg
  });
  await this.loading.present();
}

async stoploading() {
  await this.loading.dismiss();
}

}

