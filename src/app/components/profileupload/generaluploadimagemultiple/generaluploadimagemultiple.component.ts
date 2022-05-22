import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { LoadingController, AlertController, NavController, MenuController, ActionSheetController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { report } from 'process';


@Component({
  selector: 'app-generaluploadimagemultiple',
  templateUrl: './generaluploadimagemultiple.component.html',
  styleUrls: ['./generaluploadimagemultiple.component.scss'],
})
export class GeneraluploadimagemultipleComponent implements OnInit {

  @Input() name: string = 'uploader1';
  @Input() userid: string = '';
  @Input() apikey: string = '';
  @Input() apiurl: string = "https://mystudyappapi.profeworld.com/mainapi/sitelogic/addapi/picuploadforumvb.ashx";
  @Input() img1: string = "assets/images/selectimage.png";
  @Input() defaultimageset: any = [];


  @Input() titletext: string = 'Title Text Here';
  @Input() textselectinit: string = 'Select Image';
  @Input() textselect: string = 'Select Image';
  @Input() textupload: string = 'Upload Image';
  @Input() maxfile:Number = 8;



  @Input() autoupload: Boolean= true;
  @Input() showselectbtn: Boolean= false;
  @Input() showtitletext: Boolean= true;
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
  @Output() getnumpictleft: EventEmitter<any> = new EventEmitter();

  processingmsg="";
  hasimage=false;
  formData =null;
  imagefile="";
  uploadprogressvideo=0;
  startupload=false;
  returnimageurl="";
  returnimagefile="";

  startproceessing=false;

  imageuploadopt=[
  {
  "img1":"assets/images/selectimage.png",
  "processingmsg":"",
  "hasimage":false,
  "formData":null,
  "imagefile":"",
  "uploadprogressvideo":0,
  "startupload":false,
  "returnimageurl": "",
  "returnimagefile":"",
  "startproceessing":false
  }
 
]


  pictureupload=0;
  presentindex=0;
  email:any;
  pwd:any;


  constructor( public actionSheetController: ActionSheetController,public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.loadinitialwithinitial();
  }


  removelayer(index){
    this.presentindex = this.presentindex - 1;
    if( this.presentindex < 0){
     this.presentindex=0
    }

    if(this.imageuploadopt.length > 1){
    this.imageuploadopt.splice(index,1);
    }
    //this.addlayer();
  }
  
  addlayer(){
    var newlayer= 
     {
      "img1":"assets/images/selectimage.png",
      "processingmsg":"",
      "hasimage":false,
      "formData":null,
      "imagefile":"",
      "uploadprogressvideo":0,
      "startupload":false,
      "returnimageurl": "",
      "returnimagefile":"",
      "startproceessing":false
    }
    this.imageuploadopt[this.imageuploadopt.length]= newlayer;
  }


  addlayerwithimage(image){
    var newlayer= 
     {
      "img1":image,
      "processingmsg":"",
      "hasimage":false,
      "formData":null,
      "imagefile":"",
      "uploadprogressvideo":0,
      "startupload":false,
      "returnimageurl": image,
      "returnimagefile":image,
      "startproceessing":false
    }
    this.imageuploadopt[this.imageuploadopt.length]= newlayer;
  }

  loadexistingimage(){
    if(this.defaultimageset.length > 0){
      for(var i=0; i < this.defaultimageset.length; i++){
        this.addlayerwithimage(this.defaultimageset);
      }
      this.removelayer(0)
      this.addlayer();
    }
  }

 async loadinitialwithinitial(){
   setTimeout(async()  => {
    await this.loadinit();
   },10)
 }

 async loadinit(){
   
  this.loadexistingimage();
   
 }

  ngOnInit() {}

  async pictureoption(index) {

    if (!this.showpictureuploadopt){
      this.pickpicture(index);
      return;
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Picture Option',
      buttons: [
         {
        text: 'Select Image from Album',
        icon: '',
        handler: () => {
          this.pickpicture(index);
        }
      }, {
        text: 'Select Image from camera',
        icon: '',
        handler: () => {
          this.snappicture(index);
        }
      } ]
    });
    await actionSheet.present();
  }

  pickpicture(index){
    document.getElementById('picfromfile'+ index).click();
  }

  snappicture(index){
    document.getElementById('picfromcam'+ index).click();
  }
  
  showpicture(event,index) {
    //alert(index)

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
        this.imageuploadopt[index].img1 = event.target.result;
        this.imageuploadopt[index].hasimage=true;
        this.imageuploadopt[index].returnimagefile= event.target.result;
        
        this.getuploadfile.emit(this.imageuploadopt);    

        if(this.autoupload){
          this.uploadpicture(index);
        }

      }
      reader.readAsDataURL(event.target.files[0]);
      if(this.imageuploadopt.length -1 == index && index < this.maxfile){
        this.addlayer();
      }
    }

    this.imageuploadopt[index].formData = new FormData();
    Array.from(event.target.files).forEach((file: File) => this.imageuploadopt[index].formData.append('photos', file, file.name));

  }
  
  async uploadpicture(index){
    
    if(this.imageuploadopt[index].hasimage= false){
       this.presentToast("You must pick a file to upload");
       return;
    }
  

    this.pictureupload = this.pictureupload + 1;
    this.getnumpictleft.emit(this.pictureupload);

    this.imageuploadopt[index].startproceessing=true;
    this.loadstarted.emit();
    this.imageuploadopt[index].processingmsg="";
    this.imageuploadopt[index].uploadprogressvideo=0;
    this.imageuploadopt[index].startupload = true;

    // this api uses both post and get request we send the imageuploadopt[index].formData(containing the image as post and the id and api key as get.
    await this.http.post(this.apiurl + '?userid='+ this.userid +'&apikey=jsjjssjjsjssjj', this.imageuploadopt[index].formData,{responseType:'json',reportProgress:true,observe:'events'}).subscribe(res => {
     
     console.log(res["body"]);

     if(res.type === HttpEventType.DownloadProgress){
        this.imageuploadopt[index].uploadprogressvideo = Math.round((100 * res.loaded)/ res.total);
      } else if(res.type === HttpEventType.Response){
        this.imageuploadopt[index].uploadprogressvideo = 100;
      }


      if (res["body"]){

        this.pictureupload = this.pictureupload - 1;
        this.getnumpictleft.emit(this.pictureupload);

        this.imageuploadopt[index].startupload = false;
        this.imageuploadopt[index].startproceessing=false;
        this.imageuploadopt[index].hasimage=false;
        this.imageuploadopt[index].formData =null;


      if(Number(res["body"]['statuscode']) == Number(99)){
        this.presentToast(res["body"]["status"]);
        this.loadcompleted.emit();
        this.imageuploadopt[index].processingmsg=res["body"]["status"];
        this.imageuploadopt[index].returnimageurl=res["body"]["imagelocation"];
        this.getuploadurl.emit(this.imageuploadopt);
      }

      if (res["body"]["statuscode"]!= 99){
        this.presentToast(res["body"]["status"]);
        this.loadcompletednull.emit();
        this.imageuploadopt[index].processingmsg=res["body"]["status"];
     }



    }

      
   }, (err) => {
    
     this.pictureupload = this.pictureupload - 1;
     this.presentToast("Unable to connect to the Internet");
     this.imageuploadopt[index].img1 = "assets/images/selectimage.png"
     this.imageuploadopt[index].startproceessing=false;
     console.log(err);
  });
  
  }

async removepicture(index){
  this.imageuploadopt[index].startupload = false;
  this.imageuploadopt[index].startproceessing=false;
  this.imageuploadopt[index].hasimage=false;
  this.imageuploadopt[index].formData =null;
  this.removeuploadpicture.emit(this.imageuploadopt);
  this.imageuploadopt[index].img1 = "assets/images/selectimage.png";
  this.removelayer(index);
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
