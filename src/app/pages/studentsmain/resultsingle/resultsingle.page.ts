import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Network, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { IonContent, NavController, ToastController } from '@ionic/angular';
const { Browser } = Plugins;
const { Storage } = Plugins;

@Component({
  selector: 'app-resultsingle',
  templateUrl: './resultsingle.page.html',
  styleUrls: ['./resultsingle.page.scss'],
})
export class ResultsinglePage implements OnInit {

  postusername:any;
  postid:any; 
  updatetype= 1;
  selectedindex = 1;


  constructor(public toastCtrl: ToastController,private activatedRoute: ActivatedRoute,private route:ActivatedRoute, private router:Router, public httpClient: HttpClient,private navCtrl: NavController) { 
    this.loadmeta();
 }

 loadmeta(){
  this. postusername= this.activatedRoute.snapshot.paramMap.get('username') +"";
  this.postid= this.activatedRoute.snapshot.paramMap.get('id') +"";
  }
  
  ngOnInit() {
  }

  goback(){
    this.navCtrl.back();
   }

   changeselectedindex(index){
    this.selectedindex = index;
 }


}