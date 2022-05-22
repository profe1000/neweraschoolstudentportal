import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-uploaddp',
  templateUrl: './uploaddp.component.html',
  styleUrls: ['./uploaddp.component.scss'],
})
export class UploaddpComponent implements OnInit {

  @Input() userid: string = '';
  @Input() apikey: string = '';
  @Input() img1: string = "https://beaconlifecash.com.ng/files/dp/dp.png";
  @Input() accountnumber: string = '';


  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();

  processingmsg="";

  hasimage1=false;
  formData =null;
  imagefile1="";




  startproceessing=false;
  email:any;
  pwd:any;

  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.loadinitialwithinitial();
  }


 async loadinitialwithinitial(){
   setTimeout(async()  => {
    await this.loadinit();
   },10)
 }

 async loadinit(){
  this.getuserdetails();
 }

  ngOnInit() {}
  

  async getuserdetails(){
    await this.http
       .get("https://beaconlifecash.com.ng/api/users/view/viewbeaconaccountname.ashx?qstring="+ this.accountnumber +"")
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
      if (res["statuscode"]!= 100){
        this.presentToast(res["status"]);
      }
    
     if (res["statuscode"]== 100){
         this.userid=res["post"][0]["userid"];
         this.img1=res["post"][0]["dpurl"];
      }
       
    }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
        this.presentToast("Unable to connect to the Internet")
      });
   }
  pickpicture(){
    document.getElementById('piclogo').click();
  }
  
  
  showpicture(event) {
    var fileList = event.target.files;
    var myFile = fileList[0];
  
    var myFileName = myFile.name;
    var myFileSize = myFile.size;
    var myFileType = myFile.type;
  
    //alert(window.URL.createObjectURL(fileList[0]) + " " + myFile.size);
    
    //this.image=window.URL.createObjectURL(fileList[0]);
  
   //alert(myFileType);
  
    if (myFileSize > (1024 * 5000 )){
      alert("Your Image exceed 5mb");
      return;
    }
  
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.img1 = event.target.result;
        this.hasimage1=true;
        this.uploadpicture();
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      
    this.formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => this.formData.append('photos', file, file.name));
  }
  
  
  async uploadpicture(){
    
    if(this.hasimage1= false){
       this.presentToast("You must pick a file to upload");
       return;
    }
  

    this.startproceessing=true;
    this.loadstarted.emit();
    this.processingmsg="";
  
    alert(this.userid)
    // this api uses both post and get request we send the formdata(containing the image as post and the id and api key as get.
    await this.http.post('https://beaconlifecash.com.ng/api/users/auth/useruploadprofilepic.ashx?userid='+ this.userid +'&apikey=jsjjssjjsjssjj', this.formData).subscribe(res => {
      console.log(res);
     
      this.startproceessing=false;
      this.hasimage1=false;
      this.formData =null;


      if(Number(res['statuscode']) == Number(99)){
        this.presentToast(res["status"]);
        this.loadcompleted.emit();
        this.processingmsg=res["status"];
      }

      if (res["statuscode"]!= 99){
        this.presentToast(res["status"]);
        this.loadcompletednull.emit();
       this.processingmsg=res["status"];
     }
  

      
   }, (err) => {
    this.presentToast("Unable to connect to the Internet");
     this.img1 = "https://beaconlifecash.com.ng/files/dp/dp.png"
     this.startproceessing=false;
     console.log(err);
  });
  
  }

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
