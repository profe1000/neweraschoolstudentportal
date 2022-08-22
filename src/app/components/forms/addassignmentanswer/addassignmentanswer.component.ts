import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
import tinymce from 'tinymce';

@Component({
  selector: 'app-addassignmentanswer',
  templateUrl: './addassignmentanswer.component.html',
  styleUrls: ['./addassignmentanswer.component.scss'],
})
export class AddassignmentanswerComponent implements OnInit {

  
  post:any;
  assignmentfile:any;
  content:any;

  @Input() userid: string = '';
  @Input() apikey: string = '';
  @Input() postid: string = '';

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();
  processingmsg:any;

  formData:FormData =null;
  picanswerfile= "assets/images/noimage.png";




  startproceessing:Boolean=false;
  tinymceInit:any;
  editor: any;

  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,public http: HttpClient,public loadingController: LoadingController) {
     this.formData = new FormData();
     this.loadinit();
   }

   async loadinit(){
   }

   ngAfterViewInit() {

   }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnInit() {}

  async showpicture(event,name,value) {
    var fileList = event.target.files;
  
   
    var myFile = fileList[0];
    var myFileName = myFile.name;
    var myFileSize = myFile.size;
    var myFileType = myFile.type;
    
    if(name=="picanswerfile"){
      if(myFileType == "application/pdf"){
        value = value + ".pdf"
      } else if(myFileType == "application/zip"){
        value = value + ".zip"
      }
    }
    
    //alert(myFileType)

    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
  
      reader.onload = (event:any) => {
        if(name=="picanswerfile"){
          if(myFileType == "application/pdf"){
            this.picanswerfile  = "assets/images/pdfselect.png";
          } else if(myFileType == "application/zip"){
            this.picanswerfile  = "assets/images/zipselected.png";
          }
        } 
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      

    this.formData.delete(name);

    for (var i = 0; i < fileList.length; i++) {
      this.formData.append(name,fileList[i],value);
    }

    console.log("formdata details picanswerfile:" +this.formData.get("picanswerfile"))
   //console.log(fileList[0])
  }


  async proceed(){
  
     this.formData.append("post",this.content)
     this.formData.append("userid",this.generalservice.userid+'')
     this.formData.append("assignmentid",this.postid + '')


   this.startproceessing=true;
   this.loadstarted.emit();
   this.processingmsg="";
   
    await this.http
       .post(this.generalservice.apiurl + this.generalservice.addassignmentanswerform,this.formData)
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

      //Dispose Form Data
      this.formData = new FormData();
      this.picanswerfile= "assets/images/noimage.png";

    }, (err) => {
        //Dispose Form Data
         this.formData = new FormData();
         this.picanswerfile = "assets/images/noimage.png";
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

}
