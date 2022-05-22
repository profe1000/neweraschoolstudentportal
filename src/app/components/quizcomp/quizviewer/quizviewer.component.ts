import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, IonInfiniteScroll, IonContent } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

import { Device, Plugins } from '@capacitor/core';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-quizviewer',
  templateUrl: './quizviewer.component.html',
  styleUrls: ['./quizviewer.component.scss'],
})
export class QuizviewerComponent implements OnInit {

  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;

  @Input() apihost: string = '';
  @Input() quizfile: string = '';
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
  @Input() storagekey: string = 'quiz';
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

  @Input() shownodata: Boolean = true;
  @Input() shownoconnection: Boolean = true;

  //connectionstatuscode 0 = Loading, 1 = Data, 2=No Data, 3 = No connection
  connectionstatuscode=0;

  //Main Quiz component
  @ViewChild(IonContent, {static: true}) content: IonContent;
 
  operatingsystem="";

  contentmeta:any;
  quizconfig:any;
  quizquestion:any;
  presentindex=0;
  quizfilterquestion;
  myanswer:any =[];
  mymhs:String;
  examended:Boolean=false;
  myscore:Number=0;
  mypercentscore:Number=0;
  answermode:string;
  performancemode=false;

  @Input() topic=" Quiz";
  @Input() filteryear="2021";
  @Input() filteryearindex=-1;
  @Input() filtertopic=-1;
  @Input() filterexamtype=-1;
  @Input() second:Number = 100;
  @Input() timermode:Boolean = false;
  @Input() questionlocation ="";
  @Input() configlocation="";
  

  performancemodevalue=[
    {
      "title":"Excellence",
      "status":"You are a Genius",
      "image":"assets/images/cbtcongrat.jpg"
    },
    {
      "title":"Good Job",
      "status":"You really did a Good Job",
      "image":"assets/images/cbtgoodjob.jpg"
    },
    {
      "title":"OOPS",
      "status":"You tried but you need some improvement",
      "image":"assets/images/cbtoops.jpg"
    },
    {
      "title":"Bursted",
      "status":"You perform Poorly, you really need to study the lecture note",
      "image":"assets/images/cbtbad.jpg"
    }
  ]

  performanceindex=3;
  quizhistoryscore=[];
  savedquestiondata=[];

      //Ngmodel
      opt:any;

    // Fore registration check
    usersdata:any;
    expiretime:Number=0;
    regstatus:Boolean =true;
    appid=1;

    regexpiretimepq: String="";
    usersdatapq:any;
    expiretimepq:Number=0;
    regstatuspq:Boolean =true;


    contentindex =-1 + "";
    loading:any;

    counttimeout:string= "0";
    timeoutsec=10000;

    haspostedscore=false;

  constructor(public generalservice: GeneralserviceService, public menuCtrl: MenuController,public alertController: AlertController,public navCtrl: NavController, public toastController: ToastController, private router: Router, private httpClient: HttpClient,
    public loadingController: LoadingController,  public sanitizer: DomSanitizer) {
      this.loadinitialwithinitial();
    }

    ngOnInit() {}

    
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

  geturl(){
    console.log(this.generalservice.apiurl + this.generalservice.quizbase+ this.quizfile +  "?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"")
    let defaulturl = this.generalservice.apiurl + this.generalservice.quizbase+ this.quizfile + "?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"";
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
    this.featurepost = res["questions"];
    console.log(res["questions"]);
    
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

    // Initialised the quiz module
    this.quizconfig = res["quizconfig"];
    this.quizquestion = this.featurepost;
    this.loadpq();

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

        // Initialised the quiz module
        this.quizconfig = res["quizconfig"];
        this.quizquestion = this.featurepost;
        this.loadpq();

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

        // Initialised the quiz module
        this.quizconfig = res["quizconfig"];
        this.quizquestion = this.featurepost;
        this.loadpq();

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

//show Toast
async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}



// Main Quiz Processing Function
loadmathsscript() {
  setInterval(() => {
    eval('M.parseMath(document.body)');
  }, 100)
}

async loadpq(){
      this.loadmathsscript();
      this.getquizconfigsource();
      this.loadquizhistorydata();
      this.loadsavedquestiondata();
      this.filterquestion();
      this.checktime();
 }

 async getquizconfigsource(){

 }

   //Load Online Content
   async startloading(){
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      duration: this.timeoutsec + 2000,
      backdropDismiss: false
    });
    await this.loading.present();
  }

  async stoploading(){
    await this.loading.dismiss();
  }

  shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        console.log(1)
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;

        console.log(sourceArray[i])
       
    }

   
    return sourceArray;
}
   
 // End Load Content Online
 filterquestion(){

  console.log(this.quizquestion)
  var filteroption;

  if(this.filtertopic ==-1 && this.filterexamtype==-1){
       filteroption = d => d.year ===  this.filteryear;
  }
  else if(this.filtertopic ==-1 &&  this.filteryearindex==-1){
       filteroption = d => d.examtype ===  this.filterexamtype;
  }
  else if(this.filterexamtype==-1 &&  this.filteryearindex==-1){
       filteroption = d => d.topic === this.filtertopic;
  }
  else if(this.filterexamtype==-1){
       filteroption = d => d.topic === this.filtertopic &&  d.year ===  this.filteryear;
  }
  else if(this.filteryearindex==-1){
       filteroption = d => d.topic === this.filtertopic && d.examtype ===  this.filterexamtype;
  }
  else if(this.filtertopic ==-1){
       filteroption = d => d.year ===  this.filteryear  && d.examtype ===  this.filterexamtype;
  }
   else{
      filteroption = d => d.year ===  this.filteryear && d.topic === this.filtertopic  && d.examtype ===  this.filterexamtype;
  }

  


  this.quizfilterquestion=this.quizquestion.filter(filteroption);



  if(this.filterexamtype==-1 &&  this.filteryearindex==-1 && this.filtertopic ==-1 ){
    this.quizfilterquestion=this.quizquestion;
  }

  this.quizfilterquestion = this.shuffle(this.quizfilterquestion);

  //alert(this.quizfilterquestion.length + " Question Return " + this.quizquestion.questions.length);


  if (this.quizfilterquestion.length ==0){
    alert("No Question Found");
    this.menuCtrl.enable(true);
    if(this.operatingsystem=="android" || this.operatingsystem=="ios"){
      this.menuCtrl.enable(false);
    }
    this.navCtrl.back();
  }

  for(let i =0; i<this.quizfilterquestion.length; i++){
    this.myanswer[i]="F";
  }

  this.uncheckallradio()

 
 }

 getContent() {
  return document.querySelector('ion-content');
}
 
 nextquestion(){
   //this.pausescommpeech();
   //this.pause();
  if (Number(this.presentindex) > 2 && this.regstatus == false && this.regstatuspq == false){
    alert("You cannot Answer more Question unless your App is Activated");
    return;
  }

  if (this.presentindex == this.quizfilterquestion.length - 1){
    this.presentmsgAlert("You have reach the last question")
  } else{
    this.presentindex = this.presentindex + 1;
    this.uncheckallradio();
    this.content.scrollToTop(400);
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
 }

 prevquestion(){
  //this.pausescommpeech();
  //this.pause();
  if (this.presentindex == 0){
    this.presentmsgAlert("You are at the First Question")
  }else{
    this.presentindex = this.presentindex -1;
    this.uncheckallradio();
    this.content.scrollToTop(400);
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
 }


 updatemyanswer(optionvalue:string){
  this.myanswer[this.presentindex]=optionvalue;
 }

 uncheckallradio(){
   this.opt="F";
   this.checkcorrectanswer();
   this.checkanswermode();
 }

 checkcorrectanswer(){
    this.opt=this.myanswer[this.presentindex];
 }

 checkanswermode(){

  try {
 
  if (this.myanswer[this.presentindex] == "F"){
     this.answermode="mode3"
   } else if (this.myanswer[this.presentindex] == this.quizfilterquestion[this.presentindex].correctopt.toUpperCase()){
    this.answermode="mode1"
    }else{
      this.answermode="mode2"
    }
 } 
 catch (error) {  
    }

 }


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'My Result',
    subHeader: '',
    message: '<div style="overflow-y:auto;max-height:20px;"> You scored '+ this.myscore +' out of '+ this.quizfilterquestion.length +' <br /> <br /> Your Percentage score :'+ Math.floor(Number(this.myscore) / Number(this.quizfilterquestion.length) * 100)+' % </div>',
    buttons: ['OK']
  });
  await alert.present();
}

showperformancelog(){
  var percentage= Math.floor(Number(this.myscore) / Number(this.quizfilterquestion.length) * 100);
  this.mypercentscore=percentage;
  if (percentage > 70){
    this.performanceindex=0;
  } else if (percentage > 50){
    this.performanceindex=1;
  }else if (percentage > 40){
    this.performanceindex=2;
  }else{
    this.performanceindex=3;
  }
  this.performancemode = true
}

hideperformancelog(){
  this.performancemode=false;
  this.content.scrollToTop(400);
}

markscript(){
  //this.presentmsgAlert(this.quizfilterquestion[0].correctopt.toUpperCase())
  //alert(this.quizfilterquestion[0].correctopt)
  this.myscore=0;
 for(let i =0; i < this.quizfilterquestion.length; i++){
   try {
    if ( this.myanswer[i] == this.quizfilterquestion[i].correctopt.toUpperCase()){
      this.myscore = Number(this.myscore) +1;
    } else if (this.quizfilterquestion[i].correctopt.toUpperCase() == "BONUS"){
      this.myscore = Number(this.myscore) +1;
    }
  } catch (error) {
    
  }
  
   
  }
}

async presentsubmitalert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: 'Are You sure you want to submit this quiz',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }, {
      text: 'Okay',
      handler: () => {
        this.markscript();
        this.examended=true;
        //this.presentindex=0;
        //this.checkanswermode();
        //this.presentAlert();
        //this.showperformancelog();
        this.submittestscoreonline();
        //this.addquestiontohistory();
      }
    }]
  });

  await alert.present();
}


async presentexitalert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: 'Are You sure you want to Exit this quiz',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
      }
    }, {
      text: 'Okay',
      handler: () => {
        this.menuCtrl.enable(true);
        if(this.operatingsystem=="android" || this.operatingsystem=="ios"){
          this.menuCtrl.enable(false);
        }
        this.navCtrl.back();
      }
    }]
  });

  await alert.present();
}

async presentmsgAlert(msg) {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: '',
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}

checktime(){
  setInterval(() => {
    if (this.timermode == false){
      this.mymhs= "No Time"
      return
    }

    if(this.second > 0){
      if (this.examended){
       this.second = Number(this.second) - 0;
     }else{
      this.second = Number(this.second) - 1;
     }
      this.mymhs= this.converttohms(this.second);
    } else if(this.second == 0){
      this.markscript();
      this.examended=true;
      //this.presentindex=0;
      //this.checkanswermode();
      //this.presentAlert();
      //this.showperformancelog();
      this.submittestscoreonline();
      //this.addquestiontohistory()
    }  
  }, 1000)
}


converttohms(seconds){

  let d = Number(seconds);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? "" : "") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? "" : "") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";

  sDisplay =  Number(sDisplay) < 10 ? "0" + sDisplay : sDisplay;
  sDisplay =  Number(sDisplay) == 0 ? "0" + sDisplay : sDisplay;

  mDisplay =  Number(mDisplay) < 10 ? "0" + mDisplay : mDisplay;
  mDisplay =  Number(mDisplay) == 0 ? "0" + mDisplay: mDisplay;

  hDisplay =  Number(hDisplay) == 0 ? "0" + hDisplay: hDisplay;

  return hDisplay +":" + mDisplay + ":" + sDisplay; 

}

//On all pages That need it
 async registercheck(){

  /*await this.storage.get('regstatus-'+ this.appid).then((val) => {
    this.usersdata = val || 0;
    this.expiretime = this.usersdata.expiretime || 0;
  });*/


  const ret = await Storage.get({ key: 'regstatus-'+ this.appid });
  const user = JSON.parse(ret.value);
  this.usersdata = user;
  this.expiretime = this.usersdata.expiretime || 0;

  console.log("Expire time = " + this.expiretime); 
  
  let date: Date = new Date();  
  let mtsp= this.toTimestamp(date);

  if ( this.expiretime > mtsp){
     this.regstatus= true;
  }

  console.log("Registration status = " + this.regstatus); 
  //this.regstatus= true;

}

toTimestamp(strDate){
let datum = Date.parse(strDate);
return datum/1000;
}

async registercheckpqonly(){
const ret = await Storage.get({ key: 'regstatuspqpqonly-'+ this.appid });
const user = JSON.parse(ret.value);
this.usersdatapq = user;
this.expiretimepq = this.usersdatapq.expiretimepq || 0;

console.log("Expire time PQ only = " + this.expiretimepq); 

let date: Date = new Date();  
let mtsp= this.toTimestamp(date);

if ( this.expiretimepq > mtsp){
   this.regstatuspq= true;
}
console.log("Registration status = " + this.regstatuspq); 
}

async addquestiontohistory(){
var newdata= 
{
 "coursename":this.quizconfig.Name,
 "courseid":this.quizconfig.courseid,
 "questionask":this.quizfilterquestion.length,
 "correct":this.myscore,
 "wrong": (Number(this.quizfilterquestion.length) - Number(this.myscore)),
 "percentagescore" : this.mypercentscore
}
this.quizhistoryscore[this.quizhistoryscore.length]= newdata;
//this.storage.set('quizhistorydata-'+ this.appid, this.quizhistoryscore);

await Storage.set({
  key: 'quizhistorydata-'+ this.appid,
  value: JSON.stringify(this.quizhistoryscore)
});
}

async loadquizhistorydata(){
/*await this.storage.get('quizhistorydata-'+ this.appid).then((val) => {
  if (val == null || val == ""){
    return;
  }
  this.quizhistoryscore=val;
  //alert(this.quizhistoryscore[0].coursename)
}, (err) => {
  console.log(err);
}); */

const ret = await Storage.get({ key: 'quizhistorydata-'+ this.appid});
if (ret.value == null){
  return;
}
const val = JSON.parse(ret.value);
console.log(val);
this.quizhistoryscore=val;
}


async addsavedquestions(index){
var newdata= 
{
 "coursename":this.quizconfig.Name,
 "coursepath":this.quizconfig.coursepath,
 "courseid":this.quizconfig.courseid,
 "instruction": this.quizfilterquestion[index].instruction,
  "question": this.quizfilterquestion[index].question,
  "optiona": this.quizfilterquestion[index].optiona,
  "optionb": this.quizfilterquestion[index].optionb,
  "optionc": this.quizfilterquestion[index].optionc,
  "optiond": this.quizfilterquestion[index].optiond,
  "optione": this.quizfilterquestion[index].optione,
  "correctopt": this.quizfilterquestion[index].correctopt,
  "correction": this.quizfilterquestion[index].correction,
  "year": this.quizfilterquestion[index].year,
  "topic": this.quizfilterquestion[index].topic,
  "topicname": this.topic,
  "examtype": this.quizfilterquestion[index].examtype
}
this.savedquestiondata[this.savedquestiondata.length]= newdata;
//this.storage.set('savedquestiondata-'+ this.appid, this.savedquestiondata);

await Storage.set({
  key: 'savedquestiondata-'+ this.appid,
  value: JSON.stringify(this.savedquestiondata)
});

alert("Question has being saved")
}

async loadsavedquestiondata(){
/* await this.storage.get('savedquestiondata-'+ this.appid).then((val) => {
  if (val == null || val == ""){
    return;
  }
  this.savedquestiondata=val;
  // alert(this.savedquestiondata[0].topicname)
}, (err) => {
  console.log(err);
}); */

const ret = await Storage.get({ key: 'savedquestiondata-'+ this.appid+ this.appid});
if (ret.value == null){
  return;
}
const val = JSON.parse(ret.value);
console.log(val);
this.savedquestiondata=val;
}

gotoquestion(num){
if (Number(num) > 2 && this.regstatus == false && this.regstatuspq == false){
  alert("You cannot Answer This Question unless your App is Activated");
  this.hidepop();
  return;
}

this.presentindex = num;
this.uncheckallradio();
this.content.scrollToTop(400);
this.hidepop();
}

popgotoquestion(){
document.getElementById('popimage').style.display='block'
}

hidepop(){
document.getElementById('popimage').style.display='none'
}

//Used to Post Quiz Score
async submittestscoreonline(){

  if (this.haspostedscore){
    return;
  }
  // the post obj
  var obj = {
    "quizid":this.postid,
    "score":this.myscore,
    "totalscore":(Number(this.quizfilterquestion.length)),
    "percentage": Math.floor(Number(this.myscore) / Number(this.quizfilterquestion.length) * 100),
    "timeleft":this.second,
    "userid":this.generalservice.userid,
    "apikey":this.generalservice.apikey
            };


  //Convert the obj to json string
 var jsonData = JSON.stringify(obj);
 this.startloading();
 
  await this.httpClient
     .post(this.generalservice.apiurl + this.generalservice.addquizscore,jsonData)
     .subscribe(async res => {
        //Connection successful, once you read the data in res you use the status code to perform logic
       console.log(res);
      
 
        
    if (res["statuscode"]!= 99){
       this.presentToast(res["status"]);
     }
  
   if (res["statuscode"]== 99){
     //this.storage.set('logindetails', res);
      this.haspostedscore=true;
      this.presentToast(res["status"]);
      this.router.navigate(["usersignin"]);
    }
 
    this.stoploading();
     
     }, (err) => {
      //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
      console.log(err);
       this.stoploading();
       this.presentToast("Unable to connect to the Internet")
     });
 }

}
