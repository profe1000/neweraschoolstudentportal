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
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.scss'],
})
export class ViewcoursesComponent implements OnInit {

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
  
  featurepost:any = [];
  newsite:Boolean=false;
  demopost=[1,2,3,4,5,6,7,8,9,10]

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

  //connectionstatuscode 0 = Loading, 1 = Data, 2=No Data, 3 = No connection
  connectionstatuscode=0;

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
    console.log(this.generalservice.apiurl + this.generalservice.viewcourseapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid  +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.viewcourseapi +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid  +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
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
   try {
    let infscr= document.getElementById("myinfinitescroll") as HTMLIonInfiniteScrollElement
  infscr.disabled=false;
  }
  catch(err) {
  }
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
   try {
    let infscr= document.getElementById("myinfinitescroll") as HTMLIonInfiniteScrollElement
  infscr.disabled=false;
  }
  catch(err) {
  }
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


  openpage(pageid){
    this.router.navigate(['userdetails/'+ pageid + '']);
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

//Showslected option

//Showslected option
showslectedoption(pageindex,$event){

  if($event.target.value==1){
      this.loadmyeditfunction(pageindex);
  } else if($event.target.value==2){
    //this.router.navigate(["/parent/" + this.featurepost[pageindex].id +'/' + this.featurepost[pageindex].firstname])
  } else if($event.target.value==3){
    this.alertdeletepost(pageindex)
  } else if($event.target.value==4){
    alert("Archived student function not ready")
  } else if($event.target.value==5){
    alert("Approved student function not ready")
  } 
  }
  
  // Delete Function here
  async alertdeletepost(index) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: 'Are You sure you want to Delete this Course',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.deletefile(index);
        }
      }]
    });
    await alert.present();
  }
  
  async deletefile(index){
    // the post obj
    var obj = {
      "apikey":"",
            };
  
  
  
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
   //this.startloading();
  
    await this.httpClient
       .get(this.generalservice.apiurl + this.generalservice.sampledelete + "?userid=1&id="+ this.featurepost[index].id +"")
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
        
  
          
      if (res["statuscode"]!= 100){
         this.presentToast("Delete Error");
       }
    
     if (res["statuscode"]== 100){
       //this.storage.set('logindetails', res);
        this.presentToast("Delete Successful");
      }
  
      //this.stoploading();
       
       }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
         //this.stoploading();
         this.presentToast("Unable to connect to the Internet")
       });
  
       
     
     this.featurepost.splice(index,1);
     
  }


//Confirm Order
openconfirm(pageindex){

  this.alertconfirmorder(pageindex)

}


async alertconfirmorder(index) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: 'Are You sure you want to Confirm this order',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }, {
      text: 'Okay',
      handler: () => {
        this.confirmfile(index);
      }
    }]
  });
  await alert.present();
}

async confirmfile(index){
  this.featurepost[index].orderstatus=  1;

  // the post obj
  var obj = {
    "storeorderid":this.featurepost[index].storeorderid,
    "orderstatuscode":1,
    "itemnum":1,
    "apikey":"",
          };

  
   //alert(this.amount)

 

  
  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 //this.startloading();

  await this.httpClient
     .post(this.generalservice.apiurl +'api/admin/update/updateorderstatus.ashx',jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      

        
    if (res["statuscode"]!= 99){
       this.presentToast("Unable to Update Order");
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.presentToast("Order Updated");
    }

    //this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       //this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });

   
}


// Transist Function here
opentransist(pageindex){

  this.alerttransistpost(pageindex)

}

async alerttransistpost(index) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: 'Are You sure you want to move the order to transist',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }, {
      text: 'Okay',
      handler: () => {
        this.transistitem(index);
      }
    }]
  });
  await alert.present();
}

async transistitem(index){
  this.featurepost[index].orderstatus=  2;

  // the post obj
  var obj = {
    "storeorderid":this.featurepost[index].storeorderid,
    "orderstatuscode":2,
    "itemnum":1,
    "apikey":"",
          };

  
   //alert(this.amount)

 

  
  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 //this.startloading();

  await this.httpClient
     .post(this.generalservice.apiurl +'api/admin/update/updateorderstatus.ashx',jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      

        
    if (res["statuscode"]!= 99){
       this.presentToast("Unable to Update Order");
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.presentToast("Order Updated");
    }

    //this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       //this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });

   
}


// Complete Function here
opencompleteorder(pageindex){

  this.aletcompletepost(pageindex)

}

async aletcompletepost(index) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: 'Are You sure this order has been Delivered',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }, {
      text: 'Okay',
      handler: () => {
        this.completeitem(index);
      }
    }]
  });
  await alert.present();
}

async completeitem(index){
  this.featurepost[index].orderstatus=  3;

  // the post obj
  var obj = {
    "storeorderid":this.featurepost[index].storeorderid,
    "orderstatuscode":3,
    "itemnum":1,
    "apikey":"",
          };

  
   //alert(this.amount)

 

  
  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 //this.startloading();

  await this.httpClient
     .post(this.generalservice.apiurl +'api/admin/update/updateorderstatus.ashx',jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      

        
    if (res["statuscode"]!= 99){
       this.presentToast("Unable to Update Order");
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.presentToast("Order Updated");
    }

    //this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       //this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });

   
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

//Emit postid

loadmyeditfunction(pageindex){
  this.loadeditfunction.emit(this.featurepost[pageindex].id);
  //alert(this.featurepost[pageindex].storeorderid)
}

loadmyorderdispatch(pageindex){
  this.loadorderdespatch.emit(this.featurepost[pageindex].storeorderid);
}

loadmyordermessage(pageindex){
  this.loadordermessage.emit(this.featurepost[pageindex].storeorderid);
}

}
