import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
import { GeneralserviceService } from 'src/app/services/general/generalservice.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-videosplayer',
  templateUrl: './videosplayer.page.html',
  styleUrls: ['./videosplayer.page.scss'],
})
export class VideosplayerPage implements OnInit {

  title="";
  postid="";

  qstring:any="";
  qstringb:any="";
  qstringc:any="";
  qstringd:any="";
  userid:any="";
  updatetype:any="1";


  constructor(public generalservice: GeneralserviceService,public toastController: ToastController,private activatedRoute: ActivatedRoute,private route:ActivatedRoute,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.loadmeta();
  }

  ionViewDidEnter() {
   this.menuCtrl.enable(true);
   this.generalservice.getprofile(); 
   this.generalservice.myinit();
 }

 loadmeta(){
   this.title= this.activatedRoute.snapshot.paramMap.get('title') +"";
   this.postid= this.activatedRoute.snapshot.paramMap.get('id') +"";
   alert(this.postid)
 }

 ngOnInit() {
 }


}

