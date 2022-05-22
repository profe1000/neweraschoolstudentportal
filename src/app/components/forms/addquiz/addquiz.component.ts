import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';


@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.scss'],
})
export class AddquizComponent implements OnInit {

  title:any;
  tag:any;
  content:any;
  quizindex:any;
  quizsubindex:any;
  quizindexgroup:any;
  publishedstatus:any;
  quizfilename:any;
  UUID:any;

  @Input() userid: string = '';
  @Input() apikey: string = '';

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
  processingmsg:any;


  startproceessing:Boolean=false;

  quizinitialfile={
    "statuscode":"100",
    "statusmessage":"Retrive successfully",
    "fileversioncode":1,

      "quizconfig":{
         "Name": "Quiz Name",
          "Pathname": "",
          "description": "Description of quiz",
          "icon": "media/icon.png?2",
          "certkey": "kidjjdo900iwsmsmsmsiw0w00k",
          "Version": 1,
          "Author": "Profeworld Technology",
          "courseid": 0,
          "years":[2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
          "examtype":[],
          "topics":[],
          "settingsource":"external",          
          "initialyear":-1,
          "initialexamtype":-1,
          "initialtopic":-1,
          "initialtimeoption":0,
          "initialtimesec": 3600,
          "initialreference":"",
          "initialpostapi": ""
        },
       
       "questions": []
       
    }


  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public http: HttpClient,public loadingController: LoadingController) {
      this.loadinit();
   }

   async loadinit(){
   }


  ngOnInit() {}


  async proceed(){
    //alert(this.imageurl + " "+ this.imagesub1 + " " + this.imagesub2 + " "+ this.imagesub3)
    // the post obj

    this.content = JSON.stringify(this.quizinitialfile);
    this.quizfilename= this.generalservice.genrateuuid()+".json"

    var obj = {
      "title":this.title,
      "post":this.content,
      "tag":this.tag,
      "caption":"",
      "categoryid":"",
      "publishedstatus":this.publishedstatus,
      "userid":this.userid,
      "quizindex":this.quizindex,
      "quizsubindex":this.quizsubindex,
      "quizfilename": this.quizfilename,
      "quizindexgroup":this.quizindexgroup,
            "apikey":""
            };
    
            console.log(obj)
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
  
   this.startproceessing=true;
   this.loadstarted.emit();
   this.processingmsg="";
   
    await this.http
       .post(this.generalservice.apiurl + this.generalservice.addonlinequiz,jsonData)
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


  triminput(inputstring){
    return inputstring.trim();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg ,
      duration: 2000
    });
    toast.present();
  }


  getourselectdvalue($event){
    //alert($event)
   }


}
