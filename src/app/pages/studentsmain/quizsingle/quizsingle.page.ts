import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Network, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { IonContent, NavController, ToastController } from '@ionic/angular';
const { Browser } = Plugins;
const { Storage } = Plugins;

@Component({
  selector: 'app-quizsingle',
  templateUrl: './quizsingle.page.html',
  styleUrls: ['./quizsingle.page.scss'],
})
export class QuizsinglePage implements OnInit {

  quizid:any;
  quizurl:any;
  time:any;

  constructor(public toastCtrl: ToastController,private activatedRoute: ActivatedRoute,private route:ActivatedRoute, private router:Router, public httpClient: HttpClient,private navCtrl: NavController) { 
    this.loadmeta();
 }

  loadmeta(){
     this.quizurl= this.activatedRoute.snapshot.paramMap.get('quizfile') +"";
     this.time= this.activatedRoute.snapshot.paramMap.get('seconds') +"";
    //this.quizurl = "http://localhost:8100/assets/videos/quizsample.json"
    this.quizid= this.activatedRoute.snapshot.paramMap.get('id') +"";
    }
    

  ngOnInit() {
  }

  goback(){
    this.navCtrl.back();
   }

}
