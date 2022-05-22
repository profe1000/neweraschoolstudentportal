import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-setprofilecomp',
  templateUrl: './setprofilecomp.component.html',
  styleUrls: ['./setprofilecomp.component.scss'],
})
export class SetprofilecompComponent implements OnInit {

  @Input() userid: string = '';
  @Input() apikey: string = '';

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();

  processingmsg="";



  
  startproceessing=false;
  email:any;
  pwd:any;

  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {

   }

  ngOnInit() {}
  
  async proceed(){
    // the post obj
    var obj = {
      "email":this.triminput(this.email),
      "pwd":this.triminput(this.pwd)
            };
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
  
   this.startproceessing=true;
   this.loadstarted.emit();
   this.processingmsg="";
   
    await this.http
       .post('https://beaconlifecash.com.ng/api/users/auth/signinapi.ashx',jsonData)
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
  
  navigateroot(pagename){
    this.navCtrl.navigateRoot(pagename);
  }

  navigate(pagename){
    this.navCtrl.navigateForward(pagename);
  }
  

}
