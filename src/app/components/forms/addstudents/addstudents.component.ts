import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';


@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.scss'],
})
export class AddstudentsComponent implements OnInit {

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
  Studentcategory:any;
  Bloodgroup:any;
  Dateofentry:any;
  healthInfo:any;
  imageurl:any;
  Entryclass:any;
  presentclass:any;


  UUID:any;
  @Input() img1: string = "assets/images/noimage.png";
  @Input() img2: string = "assets/images/noimage.png";
  @Input() img3: string = "assets/images/noimage.png";
  @Input() img4: string = "assets/images/noimage.png";

  @Input() userid: string = '';
  @Input() apikey: string = '';

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
  processingmsg:any;





  startproceessing:Boolean=false;



  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public http: HttpClient,public loadingController: LoadingController) {
      this.loadinit();
   }

   async loadinit(){
   }


  ngOnInit() {}


  async proceed(){
    //alert(this.imageurl + " "+ this.imagesub1 + " " + this.imagesub2 + " "+ this.imagesub3)
    // the post obj

    if(this.imageurl == "" || this.imageurl == null || this.imageurl=="noimage"){
        alert("You Include an Image");
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
        "Studentcategory":this.Studentcategory,
        "Bloodgroup":this.Bloodgroup,
        "Dateofentry":this.Dateofentry,
        "healthInfo":this.healthInfo,
        "imageurl":this.imageurl,
        "Entryclass":this.Entryclass,
        "presentclass":this.presentclass,
        "adminid":this.generalservice.userid,
        "apikey":this.generalservice.apikey,
        "uuid": this.generalservice.genrateuuid()
     };
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
  
   this.startproceessing=true;
   this.loadstarted.emit();
   this.processingmsg="";
   
    await this.http
       .post(this.generalservice.apiurl + this.generalservice.addstudent,jsonData)
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


   //Multiple Imaage Management
    getmyselectdvalue($event,index){
    //alert($event)
  }

  numberofpictleft($event,index){
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



  receivefile($event,index){
    //alert($event)
    //alert(index)
  }

 

  getourselectdvalue($event){
      //alert($event)
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

  getourselectdvaluecat($event){
    //alert($event)
    this.Studentcategory= $event;
  }

  getourselectdvaluebloodgroup($event){
    //alert($event)
    this.Bloodgroup = $event;
  }

  getourselectdvalueentryclass($event){
    //alert($event)
    this.Entryclass = $event;
  }

  getourselectdvaluepresentclass($event){
    this.presentclass = $event;
  }

}
