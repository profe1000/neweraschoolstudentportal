import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, ActionSheetController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { report } from 'process';

@Component({
  selector: 'app-generaluploadimage',
  templateUrl: './generaluploadimage.component.html',
  styleUrls: ['./generaluploadimage.component.scss'],
})
export class GeneraluploadimageComponent implements OnInit {

  @Input() name: string = 'uploader1';

  @Input() userid: string = '';
  @Input() apikey: string = '';
  @Input() apiurl: string = "https://mystudyappapi.profeworld.com/mainapi/sitelogic/addapi/picuploadforumvb.ashx";
  @Input() img1: string = "assets/images/selectimage.png";

  @Input() titletext: string = 'Title Text Here';
  @Input() textselectinit: string = 'Select Image';
  @Input() textselect: string = 'Select Image';
  @Input() textupload: string = 'Upload Image';


  @Input() autoupload: Boolean= false;
  @Input() showselectbtn: Boolean= false;
  @Input() showtitletext: Boolean= false;
  @Input() showpictureuploadopt: Boolean= false;

  @Input() imagewidth: string="120px";
  @Input() imageheigth: string="120px";


  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();

  @Output() getuploadurl: EventEmitter<any> = new EventEmitter();
  @Output() getuploadfile: EventEmitter<any> = new EventEmitter();
  @Output() removeuploadpicture: EventEmitter<any> = new EventEmitter();

  processingmsg="";
  hasimage=false;
  formData =null;
  imagefile="";
  uploadprogressvideo=0;
  startupload=false;
  returnimageurl="";
  returnimagefile="";

  startproceessing=false;
  email:any;
  pwd:any;




  constructor( public actionSheetController: ActionSheetController,public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.loadinitialwithinitial();
  }


 async loadinitialwithinitial(){
   setTimeout(async()  => {
    await this.loadinit();
   },10)
 }

 async loadinit(){
 }

  ngOnInit() {}

  async pictureoption() {

    if (!this.showpictureuploadopt){
      this.pickpicture();
      return;
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Picture Option',
      buttons: [
         {
        text: 'Select Image from Album',
        icon: '',
        handler: () => {
          this.pickpicture();
        }
      }, {
        text: 'Select Image from camera',
        icon: '',
        handler: () => {
          this.snappicture();
        }
      } ]
    });
    await actionSheet.present();
  }

  pickpicture(){
    document.getElementById('picfromfile').click();
  }

  snappicture(){
    document.getElementById('picfromcam').click();
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
        this.hasimage=true;
        this.returnimagefile= event.target.result;
        
        this.getuploadfile.emit(this.returnimagefile);    

        if(this.autoupload){
          this.uploadpicture();
        }

      }
      reader.readAsDataURL(event.target.files[0]);
   
    }

    this.formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => this.formData.append('photos', file, file.name));

  }
  
  async uploadpicture(){
    
    if(this.hasimage= false){
       this.presentToast("You must pick a file to upload");
       return;
    }
  

    this.startproceessing=true;
    this.loadstarted.emit();
    this.processingmsg="";
    this.uploadprogressvideo=0;
    this.startupload = true;

    // this api uses both post and get request we send the formdata(containing the image as post and the id and api key as get.
    await this.http.post(this.apiurl + '?userid='+ this.userid +'&apikey=jsjjssjjsjssjj', this.formData,{responseType:'json',reportProgress:true,observe:'events'}).subscribe(res => {
     
     console.log(res["body"]);

     if(res.type === HttpEventType.DownloadProgress){
        this.uploadprogressvideo = Math.round((100 * res.loaded)/ res.total);
      } else if(res.type === HttpEventType.Response){
        this.uploadprogressvideo = 100;
      }


      if (res["body"]){

        this.startupload = false;
        this.startproceessing=false;
        this.hasimage=false;
        this.formData =null;


      if(Number(res["body"]['statuscode']) == Number(99)){
        this.presentToast(res["body"]["status"]);
        this.loadcompleted.emit();
        this.processingmsg=res["body"]["status"];
        this.returnimageurl=res["body"]["imagelocation"];

        this.getuploadurl.emit(res["body"]["imagelocation"]);
      }

      if (res["body"]["statuscode"]!= 99){
        this.presentToast(res["body"]["status"]);
        this.loadcompletednull.emit();
        this.processingmsg=res["body"]["status"];
     }

    }

      
   }, (err) => {
    
     this.presentToast("Unable to connect to the Internet");
     this.img1 = "assets/images/selectimage.png"
     this.startproceessing=false;
     console.log(err);
  });
  
  }

async removepicture(){
  this.startupload = false;
  this.startproceessing=false;
  this.hasimage=false;
  this.formData =null;
  this.removeuploadpicture.emit(null);
  this.img1 = "assets/images/selectimage.png";
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
