import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';


@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.scss'],
})
export class AddfeesComponent implements OnInit {

  Coursetitle:any;
  Classid:any;
  feestitle:any;
  amount:any;
  description:any;
  Session:any;
  loading:any;

  UUID:any;

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
     this.addgenerafees();
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

  getourselectdvaluepresentclass($event){
    //alert($event)
    this.Classid = $event;
  }


  async addgenerafees(){
    // the post obj
    var obj = {
  
      "titleoffees":this.feestitle,
      "classid":this.Classid,
      "subclassid":(this.Classid * 2),
      "sessionsid":this.generalservice.presentsession,
      "termid": this.generalservice.presentterm,
      "amountoffees":this.amount,
      "description":this.description,    
      "adminid":this.generalservice.userid,
      "apikey":this.generalservice.apikey
    
    };
   
    
     //alert(this.amount)
   
   
   
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
   this.startloading("Please Wait");
   
    await this.http
       .post(this.generalservice.apiurl + this.generalservice.addgeneralfees,jsonData)
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
   
      this.stoploading();
       
       }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
         this.stoploading();
         this.presentToast("Unable to connect to the Internet")
       });
   }

   async startloading(msg){
    this.loading = await this.loadingController.create({
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await this.loading.present();
  }
  
  async stoploading(){
    await this.loading.dismiss();
  }
  


}
