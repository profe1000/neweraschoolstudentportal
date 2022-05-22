import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss'],
})
export class AddadminComponent implements OnInit {

  startproceessing:Boolean=false;
  Surname:any;
  Firstname:any;
  Middlename:any;
  Nationality:any;
  state:any;
  localovernment:any;
  Email:any;
  Phonenumber:any;
  Address:any;
  imageurl :any;
  
  admintype :any;
  viewstudent :any =0;
  viewteacher :any  =0;
  viewcourse :any =0;
  viewclass :any =0;
  addstudent :any =0;
  addteacher :any =0;
  addcourse :any =0;
  addclass :any =0;
  editstudent :any =0;
  editteacher :any =0;
  editcourse :any =0;
  editclass :any =0;
  viewpayment :any =0;
  setpayment :any =0;
  editadmin :any =0;


 
  UUID:any;

  @Input() userid: string = '';
  @Input() apikey: string = '';

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
  processingmsg:any;





 


  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public http: HttpClient,public loadingController: LoadingController) {
      this.loadinit();
   }

   async loadinit(){
   }


  ngOnInit() {}


  async proceed(){
    //alert(this.imageurl + " "+ this.imagesub1 + " " + this.imagesub2 + " "+ this.imagesub3)
    // the post obj

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
        "imageurl":this.imageurl,
        "admintype":this.admintype,
        "adminid":this.generalservice.userid,
        "apikey":this.generalservice.apikey,
      };
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
  
   this.startproceessing=true;
   this.loadstarted.emit();
   this.processingmsg="";
   
    await this.http
       .post(this.generalservice.apiurl + this.generalservice.addadmin,jsonData)
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






}
