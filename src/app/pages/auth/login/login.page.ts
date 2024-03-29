import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

import { Plugins } from "@capacitor/core";
import { GeneralserviceService } from "src/app/services/general/generalservice.service";
import { environment } from "src/environments/environment";
const { Storage } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  schoolName = environment.schoolName;
  schoolAddress = environment.schoolAddress;
  logourl = environment.remoteLogoUrl;

  startproceessing = false;
  email: any;
  pwd: any;

  constructor(
    public generalservice: GeneralserviceService,
    public toastController: ToastController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public http: HttpClient,
    private router: Router,
    public loadingController: LoadingController
  ) {}

  ionViewDidEnter() {
    this.startproceessing = false;
    this.menuCtrl.enable(false);
    document.title = "School Portal Student";
    this.logout();
  }

  ngOnInit() {}

  async logout() {
    await Storage.remove({ key: "userlogindetails" });
  }

  async myproceed() {
    //this.navigateroot("dashboardhome");
    this.proceed();
  }

  async proceed() {
    // the post obj
    var obj = {
      username: this.triminput(this.email),
      pwd: this.triminput(this.pwd),
    };

    //Convert the obj to json string
    var jsonData = JSON.stringify(obj);

    this.startproceessing = true;
    await this.http
      .post(
        this.generalservice.apiurl + this.generalservice.studentlogin,
        jsonData
      )
      .subscribe(
        async (res) => {
          //Connection successful, once you read the data in res you use the status code to perform logic
          console.log(res);
          this.startproceessing = false;

          if (res["statuscode"] != 100) {
            this.presentToast(res["status"]);
          }

          if (res["statuscode"] == 100) {
            //this.storage.set('logindetails', res);
            await Storage.set({
              key: "userlogindetails",
              value: JSON.stringify(res),
            });

            window.location.href = "dashboardhome";
            //this.navigateroot("dashboardhome");
          }
        },
        (err) => {
          //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
          console.log(err);
          this.startproceessing = false;
          this.presentToast("Unable to connect to the Internet");
        }
      );
  }

  triminput(inputstring) {
    return inputstring.trim();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  navigateroot(pagename) {
    this.navCtrl.navigateRoot(pagename);
  }

  navigate(pagename) {
    this.navCtrl.navigateForward(pagename);
  }

  openresetpassword() {}
}
