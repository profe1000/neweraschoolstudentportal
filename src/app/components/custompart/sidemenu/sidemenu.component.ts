import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
const { Storage } = Plugins;

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"],
})
export class SidemenuComponent implements OnInit {
  schoolName = environment.schoolName;
  schoolAddress = environment.schoolAddress;
  logourl = environment.remoteLogoUrl;

  pathname = "";

  // Role Index 1
  public appPagessuperadmin = [
    {
      title: "Menu",
      url: "#",
      icon: "home",
      imageurl: "assets/images/svg/home.svg",
      subtitle: "View Now",
      label: true,
    },
    {
      title: "Home",
      url: "/dashboardhome",
      icon: "home",
      imageurl: "assets/images/svg/home.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "ENotes",
      url: "/enotes",
      icon: "laptop",
      imageurl: "assets/images/svg/book.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Assignment",
      url: "/assignments",
      icon: "laptop",
      imageurl: "assets/images/svg/assignment.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Quiz and Test",
      url: "/quiz",
      icon: "laptop",
      imageurl: "assets/images/svg/quiz.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: " Videos",
      url: "/videos",
      icon: "videocam-outline",
      imageurl: "assets/images/svg/videos.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Report Card",
      url: "/results",
      icon: "bar-chart-outline",
      imageurl: "assets/images/svg/result.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Fees Payment",
      url: "/fees",
      icon: "wallet-outline",
      imageurl: "assets/images/svg/feespayment.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: "file-tray-outline",
      imageurl: "assets/images/svg/message.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Media",
      url: "#",
      icon: "home",
      imageurl: "assets/images/svg/home.svg",
      subtitle: "View Now",
      label: true,
    },
    {
      title: "School Events",
      url: "/events",
      icon: "calendar-outline",
      imageurl: "assets/images/svg/calendar.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Blog Post",
      url: "/schoolblog",
      icon: "albums-outline",
      imageurl: "assets/images/svg/blog.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Settings",
      url: "#",
      icon: "home",
      imageurl: "assets/images/svg/settings.svg",
      subtitle: "View Now",
      label: true,
    },
    {
      title: "Change Password",
      url: "/changepassword",
      icon: "lock-open-outline",
      imageurl: "assets/images/svg/changepassword.svg",
      subtitle: "View Now",
      label: false,
    },
    {
      title: "Logout",
      url: "/login",
      icon: "close-circle",
      imageurl: "assets/images/svg/logout.svg",
      subtitle: "View Now",
      label: false,
    },
  ];

  public appPages = [];

  constructor(
    public http: HttpClient,
    public toastController: ToastController,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      this.getpathname();
      this.getmenutodisplay(1);
    });
  }

  ngOnInit() {}

  getmenutodisplay(adminroleindex) {
    this.appPages = this.appPagessuperadmin;
  }

  getpathname() {
    this.pathname = window.location.pathname;
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
