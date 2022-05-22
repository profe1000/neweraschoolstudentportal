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
  selector: 'app-resulteditor',
  templateUrl: './resulteditor.component.html',
  styleUrls: ['./resulteditor.component.scss'],
})
export class ResulteditorComponent implements OnInit {

  teachercomment:any;
  principalcomment:any;
  teachername:any;
  principalname:any;
  promotionalstatement:any;
  attendance:any=0;
  schoolopened:any=0;
  nexttermfees:any=0;
  ptafees:any=0;
  house:any="";
  Studentuniquereg:any;
  nexttermresume:any;
  publishedstatus:any=false;

  catotal:any=0;
  ca2total:any=0;
  ca3total:any=0;
  ca4total:any=0;
  examtotal:any=0;
  overalltotal:any=0;
  averagescore:any=0;
  totalcourses:any;
  
 
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
  @Input() storagekey: string = 'result';
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
  resultdata:any;
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
    console.log(this.generalservice.apiurl + this.generalservice.viewresult +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.viewresult +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ this.postid +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
     return defaulturl; 
  }
 
 // Loading Function
 
 async loadpost(){
  this.connectionstatuscode=0;
  this.loadstarted.emit();
  await this.httpClient
  .get(this.geturl())
  .subscribe(async res => {
 
    this.resultdata = res;
    this.featurepost = [];
    this.featurepost = res["post"];
    console.log(res)
    this.newsite=true;
 
    if(res["statuscode"] == 100){
    this.loadcompleted.emit();
    this.connectionstatuscode=1;
    this.calculatetotalscore();

    this.teachercomment= this.resultdata.post[0].teachercomment;
    this.principalcomment=this.resultdata.post[0].principalcomment;
    this.promotionalstatement=this.resultdata.post[0].promotionalstatement;
    this.attendance = this.resultdata.post[0].attendance;
    this.schoolopened=this.resultdata.post[0].schoolopened;
    this.nexttermfees=this.resultdata.post[0].nexttermfees;
    this.ptafees=this.resultdata.post[0].ptafees;
    this.nexttermresume= this.generalservice.formatDate(this.resultdata.post[0].nexttermresume);
    this.publishedstatus=this.resultdata.post[0].publishedstatus;

    this.teachername = this.resultdata.post[0].teachername;
    this.principalname=this.resultdata.post[0].principalname;
    this.house=this.resultdata.post[0].studenthouse;
    this.Studentuniquereg=this.resultdata.post[0].studentspecialreg;

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


 calculatetotalscore(){
  this.catotal = 0;
  this.ca2total =0;
  this.ca3total= 0;
  this.ca4total=0;
  this.examtotal =0;
  this.overalltotal =0;
  this.totalcourses =this.resultdata.post.length;

  for(var i =0; i < this.resultdata.post.length; i++){
    if(this.resultdata.post[i].deletestatus == "false" || this.resultdata.post[i].deletestatus == false){
      this.catotal = this.catotal + this.resultdata.post[i].ca
      this.ca2total = this.ca2total + this.resultdata.post[i].ca2
      this.ca3total = this.ca3total + this.resultdata.post[i].ca3
      this.ca4total = this.ca4total + this.resultdata.post[i].ca4
      this.examtotal = this.examtotal + this.resultdata.post[i].exam
      this.overalltotal = this.overalltotal  + (this.resultdata.post[i].ca + this.resultdata.post[i].ca2 + this.resultdata.post[i].ca3 + this.resultdata.post[i].exam)
    } else{
      this.totalcourses = this.totalcourses - 1;
    }

   // Get the grade Index to return back to database for future reference
   this.resultdata.post[i].gradeid =  this.getgradecompindex(this.resultdata.post[i].ca + this.resultdata.post[i].ca2 + this.resultdata.post[i].ca3 + this.resultdata.post[i].exam)
   //alert(this.resultdata.post[i].gradeid)
  }
  //alert( this.totalcourses)
  this.averagescore =  (this.overalltotal / this.totalcourses).toFixed(2);
   //this.getgradecomp(62);
  //this.getgradeletter(2);

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
   this.resultdata = res;
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
    this.resultdata = res;
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
       this.updatesbehaviour(1);

       for (var i =0; i < this.resultdata.post.length; i++){
         this.updatescore(i);
       }

       for (var i =0; i < this.resultdata.postbehaviour.length; i++){
        this.updatesbehaviour(i);
      }

      alert("Result saved")
  }


  // Update Score Sheet

  updatedeletestatus($event,index){

    
    this.resultdata.post[index].deletestatus = $event.target.value;
    //alert($event.target.value)
    this.calculatetotalscore();
    this.updatescore(index);
  }


  updatescoreca1($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 0){
      this.resultdata.post[index].ca = 0
      this.calculatetotalscore();
      this.updatescore(index);
      return;
    }

    this.resultdata.post[index].ca = Number($event.target.value);
    this.calculatetotalscore();
    this.updatescore(index);
  }


  updatescoreca2($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 0){
      this.resultdata.post[index].ca2=0
      this.calculatetotalscore();
      this.updatescore(index);
      return;
    }

    this.resultdata.post[index].ca2 = Number($event.target.value);
    this.calculatetotalscore();
    this.updatescore(index);
  }

  updatescoreca3($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 0){
      this.resultdata.post[index].ca3= 0
      this.calculatetotalscore();
      this.updatescore(index);
      return;
    }

    this.resultdata.post[index].ca3 = Number($event.target.value);
    this.calculatetotalscore();
    this.updatescore(index);
  }


  updatescoreca4($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 0){
      this.resultdata.post[index].ca4 = 0
      this.calculatetotalscore();
      this.updatescore(index);
      return;
    }

    this.resultdata.post[index].ca4 = Number($event.target.value);
    this.calculatetotalscore();
    this.updatescore(index);
  }


  updatescoreexam($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 0){
      this.resultdata.post[index].exam =0
      this.calculatetotalscore();
      this.updatescore(index);
      return;
    }

    this.resultdata.post[index].exam = Number($event.target.value);
    this.calculatetotalscore();
    this.updatescore(index);
  }


  updatebehaviour($event,index){
    if(($event.target.value) == "" || ($event.target.value) < 1){
      this.resultdata.postbehaviour[index].score = 0
      return;
    }
    this.resultdata.postbehaviour[index].score = Number($event.target.value);
    this.updatesbehaviour(index);
  }



  getgradecomp(score){
    for(var i =0; i < this.resultdata.postgrades.length; i++)
    {
       if(this.resultdata.postgrades[i].minvalue <= score && score <= this.resultdata.postgrades[i].maxvalue){
         //alert(this.resultdata.postgrades[i].grade + '-' + this.resultdata.postgrades[i].gradeid)
         return this.resultdata.postgrades[i].grade;
       }
    }

  }


  getgradecompindex(score){
    for(var i =0; i < this.resultdata.postgrades.length; i++)
    {
       if(this.resultdata.postgrades[i].minvalue <= score && score <= this.resultdata.postgrades[i].maxvalue){
         //alert(this.resultdata.postgrades[i].grade + '-' + this.resultdata.postgrades[i].gradeid)
         return this.resultdata.postgrades[i].gradeid;
       }
    }

  }

  getgradeletter(gradeindex){
    for(var i =0; i < this.resultdata.postgrades.length; i++)
    {
       if(this.resultdata.postgrades[i].gradeid== gradeindex){
         //alert(this.resultdata.postgrades[i].grade)
         return this.resultdata.postgrades[i].grade;
       }
    }

  }




//Automatical Update of score in the feature
async updatescore(index){
 // the post obj
 var obj = {
   "resultid":this.resultdata.post[index].resultid,
   "studentclassid":this.resultdata.post[index].studentclassid,
   "courseid":this.resultdata.post[index].courseid,
   "deletestatus":this.resultdata.post[index].deletestatus,
   "ca":this.resultdata.post[index].ca,
   "ca2":this.resultdata.post[index].ca2,
   "ca3":this.resultdata.post[index].ca3,
   "ca4":0,
   "exam":this.resultdata.post[index].exam,
   "gradeid":this.resultdata.post[index].gradeid,
   "adminid":this.generalservice.userid,
   "apikey":this.generalservice.apikey
  };

 
  //alert(this.amount)



 
 //Convert the obj to json string
var jsonData = JSON.stringify(obj);
//this.startloading();

 await this.httpClient
    .post(this.generalservice.apiurl + this.generalservice.updateresultscore,jsonData)
    .subscribe(async res => {
       //Connection successful, once you read the data in res you use the status code to perform logic
      console.log(res);
     

       
   if (res["statuscode"]!= 99){
      this.presentToast(res["status"]);
    }
 
  if (res["statuscode"]== 99){
    //this.storage.set('logindetails', res);
     this.presentToast(res["status"]);
   }

   //this.stoploading();
    
    }, (err) => {
     //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
     console.log(err);
      //this.stoploading();
      this.presentToast("Unable to connect to the Internet")
    });
}

async updatesbehaviour(index){


  // the post obj
  var obj = {
    "resultbehaviourscoreid":this.resultdata.postbehaviour[index].resultbehaviourscoreid,
    "score":this.resultdata.postbehaviour[index].score,
    "adminid":this.generalservice.userid,
    "apikey":this.generalservice.apikey
          };
 
  
   //alert(this.amount)
 
 
 
  
  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 //this.startloading();
 
  await this.httpClient
     .post(this.generalservice.apiurl + this.generalservice.updateresultsheetbehaviour,jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      
 
        
    if (res["statuscode"]!= 99){
       this.presentToast(res["status"]);
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.presentToast(res["status"]);
    }
 
    //this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       //this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });
 }

 async updateresultmeta(index){

  // the post obj
  var obj = {
    "studentclassid":this.resultdata.post[0].studentclassid,
    "teachercomment":this.teachercomment,
    "principalcomment":this.principalcomment,
    "promotionalstatement": this.promotionalstatement,
    "attendance" : this.attendance,
    "schoolopened": this.schoolopened,
    "nexttermfees" : this.nexttermfees,
    "ptafees" : this.ptafees,
    "publishedstatus" : this.publishedstatus,
    "nexttermresume": this.nexttermresume,
    "teachername" : this.teachername,
    "principalname" : this.principalname,
    "studenthouse" : this.house,
    "studentspecialreg": this.Studentuniquereg,
    "adminid":this.generalservice.userid,
    "apikey":this.generalservice.apikey
  };
 
  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 //this.startloading();
 
  await this.httpClient
     .post(this.generalservice.apiurl + this.generalservice.updateresultsheetmeta,jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      
 
        
    if (res["statuscode"]!= 99){
       this.presentToast(res["status"]);
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.presentToast(res["status"]);
    }
 
    //this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       //this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });
 }

 
///////////Extra for test



 }
 