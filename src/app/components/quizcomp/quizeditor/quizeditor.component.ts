import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, IonInfiniteScroll, IonContent } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';

import { Device, Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import tinymce from 'tinymce';

@Component({
  selector: 'app-quizeditor',
  templateUrl: './quizeditor.component.html',
  styleUrls: ['./quizeditor.component.scss'],
})

export class QuizeditorComponent implements OnInit {


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
  @Input() storagekey: string = 'quiz';
  @Input() disablepager: Boolean = false;

  @Input() quizurl: string = '';

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


  instruction:any;
  postquestion:any;
  optiona:any;
  optionb:any;
  optionc:any;
  optiond:any;
  optione:any;
  correctopt:any;
  postanswer;any;
  year:any;
  examtype:any;
  topic:any;

  addyear:any;
  addexamtype:any;
  addtopic:any;
  
  coursename:any;
  courseid:any;
  coursedesc:any;
  coursepath:any;


  initialyear:any;
  initialexamtype:any;
  initialtopic:any;
  initialtimeoption:any;
  initialtimesec:any;
  initialreference:any;
  initialpostapi:any;


  slidefeature = {
    initialSlide: 0,
    slidesPerView:1, 
    autoplay:true,
    speed: 400
  };

  @Input() shownodata: Boolean = true;
  @Input() shownoconnection: Boolean = true;

  featurepost:any = [];
  featureresponse:any;
  newsite:Boolean=false;
  demopost=[1,2,3,4,5,6,7,8,9,10]

  //connectionstatuscode 0 = Loading, 1 = Data, 2=No Data, 3 = No connection
  connectionstatuscode=0;

  presentindex = 0;

  //Saving Inidicator
  startproceessing=false;
  editor: any;
  editor2: any;

  constructor(public generalservice: GeneralserviceService,public menuCtrl: MenuController,public alertController: AlertController,public navCtrl: NavController, public toastController: ToastController, private router: Router, private httpClient: HttpClient,
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
    console.log(this.generalservice.quizbase + this.quizurl +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"&session="+ this.generalservice.genrateuuid())
    let defaulturl =this.generalservice.quizbase + this.quizurl +"?updatetype="+ this.updatetype +"&userid="+ this.userid +"&postid="+ 1 +"&qstring="+ this.qstring +"&qstringb="+ this.qstringb +"&qstringc="+ this.qstringc +"&qstringd="+ this.qstringd +"&pageNum="+ this.pagenum+"&pageSize="+ this.pagesize+"&session="+ this.generalservice.genrateuuid();
     return defaulturl; 
  }

// Loading Function

async loadpost(){
  this.connectionstatuscode=0;
  this.loadstarted.emit();
  await this.httpClient
  .get(this.geturl())
  .subscribe(async res => {

    //this.featurepost = [];
    //this.featurepost = res["questions"];

    this.featureresponse= res;
    this.presentindex=  this.featureresponse["questions"].length

    setTimeout(async()  => {
    this.initialtexteditor();
    },Number(2000))

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
    //this.featurepost = [];
    //this.featurepost = res["post"];;


    this.featureresponse= res;
    this.presentindex=  this.featureresponse["questions"].length

    setTimeout(async()  => {
    this.initialtexteditor();
    },Number(2000))


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
    //this.featurepost = [];
    //this.featurepost = res["post"];;

    this.featureresponse= res;
    this.presentindex=  this.featureresponse["questions"].length

    setTimeout(async()  => {
    this.initialtexteditor();
    },Number(2000))

    
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

//show Toast
async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg ,
    duration: 2000
  });
  toast.present();
}


initialtexteditor(){
  tinymce.init({
    selector: '#question',
    height: 300,
    plugins : [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
    ],
    toolbar : 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab : true,
    setup: (editor) => {
      this.editor = editor;
      editor.on("keyup change", () => {
        const content = editor.getContent();
      });
    },
    //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx', //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx',
    images_upload_handler: function (blobInfo, success, failure) {
      var reader = new FileReader();
      reader.readAsDataURL(blobInfo.blob());
      reader.onload = function () {
          success(<string>this.result);
      }}
  });

  tinymce.init({
    selector: '#answer',
    height: 300,
    plugins : [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
    ],
    toolbar : 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab : true,
    setup: (editor) => {
      this.editor2 = editor;
      editor.on("keyup change", () => {
        const content = editor.getContent();
      });
    },
    //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx', //images_upload_url: 'https://mystudyappapi.profeworld.com/mainapi/adminlogic/picuploadpostinline.ashx',
    images_upload_handler: function (blobInfo, success, failure) {
      var reader = new FileReader();
      reader.readAsDataURL(blobInfo.blob());
      reader.onload = function () {
          success(<string>this.result);
      }}
  });
}

ngOnDestroy() {
  tinymce.remove(this.editor);
  tinymce.remove(this.editor2);
}

  ngAfterViewInit() {
    //this.initialtexteditor();
  }

  //The quiz questions manipulation

  //Add Question
  addquestion(){
    
    var newlayer = {
      "instruction": this. instruction,
      "question": tinymce.get('question').getContent(),
      "optiona": this.optiona,
      "optionb": this.optionb,
      "optionc": this.optionc,
      "optiond": this.optiond,
      "optione": this.optione,
      "correction":tinymce.get('answer').getContent(),
      "correctopt": this.correctopt,
      "year": this.year,
      "topic": this.topic,
      "examtype": this.examtype
    }

    this.featureresponse["questions"][this.presentindex]= newlayer;
    this.presentindex = this.featureresponse["questions"].length;
    this.clearquestion();
    this.savequizfile();
  }

    //Clear Question
   clearquestion(){
    

      tinymce.get("question").setContent("")
      tinymce.get("answer").setContent("")
      this.instruction = "";
      this.postquestion= "";
      this.optiona = "";
      this.optionb = "";
      this.optionc = "";
      this.optiond = "";
      this.optione = "";
      this.correctopt = "";
      this.postanswer = "";
      /*this.year = "";
      this.topic = "";
      this.examtype = "";
      */
    }

   //GetBack Question
   getbackquestion(index){

    this.presentindex = index;

    tinymce.get("question").setContent(this.featureresponse["questions"][this.presentindex]["question"])
    tinymce.get("answer").setContent(this.featureresponse["questions"][this.presentindex]["correction"])

    
   // this.postquestion= this.featureresponse["questions"][this.presentindex]["question"];
   // this.postanswer = this.featureresponse["questions"][this.presentindex]["correction"];

    this.instruction = this.featureresponse["questions"][this.presentindex]["instruction"];
    this.optiona = this.featureresponse["questions"][this.presentindex]["optiona"];
    this.optionb = this.featureresponse["questions"][this.presentindex]["optionb"];
    this.optionc = this.featureresponse["questions"][this.presentindex]["optionc"];
    this.optiond = this.featureresponse["questions"][this.presentindex]["optiond"];
    this.optione = this.featureresponse["questions"][this.presentindex]["optione"];
    this.correctopt = this.featureresponse["questions"][this.presentindex]["correctopt"];
    this.year = this.featureresponse["questions"][this.presentindex]["year"];
    this.topic = this.featureresponse["questions"][this.presentindex]["topic"];
    this.examtype = this.featureresponse["questions"][this.presentindex]["examtype"];
  }

  //Delete Question
  deletequestion(index){
    this.featureresponse["questions"].splice(index,1);
    this.presentindex = this.featureresponse["questions"].length;
  }

  //Save Quiz File.
  async savequizfile(){

    
     var  content = JSON.stringify(this.featureresponse);
     var quizfilename= this.quizurl;

    var obj = {
      "quizfilename":quizfilename,
      "post":content,
      "userid":this.userid,
      "quizid":"",
            "apikey":""
     };
    
            console.log(obj)
    
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
  
   this.startproceessing=true;
   this.loadstarted.emit();
   
    await this.httpClient
       .post(this.generalservice.apiurl + this.generalservice.savequizeditorfile,jsonData)
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
         this.startproceessing=false;

          
      if (res["statuscode"]!= 99){
        this.presentToast(res["status"]);
        this.loadcompletednull.emit();
     }
    
     if (res["statuscode"]== 99){
         this.loadcompleted.emit();
         this.presentToast(res["status"]);
      }
       
    }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
        this.startproceessing=false;
        this.loadfailure.emit();
        this.presentToast("Unable to connect to the Internet")
      });
  }
  

}
