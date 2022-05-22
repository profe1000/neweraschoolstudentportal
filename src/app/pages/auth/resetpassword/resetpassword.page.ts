import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  startproceessing=false;
  email:any;
  pwd:any;

  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {

   }

  ionViewDidEnter() {
    this.startproceessing=false;
    this.menuCtrl.enable(false);
    document.title="Reset Password - Beaconlife Cash"
    this.generaterandnumber();
  }

  ngOnInit() {
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
    await this.http
       .post('https://beaconlifecash.com.ng/api/admin/auth/resetpassword.ashx',jsonData)
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
         this.startproceessing=false;

         this.presentToast(res["status"]);
       
       }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
        this.startproceessing=false;
        this.presentToast("Unable to connect to the Internet")
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
  


  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
  generaterandnumber(){
    this.pwd = this.getRandomString(12);
    //console.log(this.randnumb);
  }


}