import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Network, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { IonContent, MenuController, NavController, ToastController } from '@ionic/angular';
const { Browser } = Plugins;
const { Storage } = Plugins;

@Component({
  selector: 'app-resultprint',
  templateUrl: './resultprint.page.html',
  styleUrls: ['./resultprint.page.scss'],
})
export class ResultprintPage implements OnInit {

  postusername:any;
  postid:any; 
  updatetype= 1;
  selectedindex = 1;


  constructor(private menu: MenuController,public toastCtrl: ToastController,private activatedRoute: ActivatedRoute,private route:ActivatedRoute, private router:Router, public httpClient: HttpClient,private navCtrl: NavController) { 
    this.loadmeta();
 }

 loadmeta(){
  this.menu.enable(false);
  this. postusername= this.activatedRoute.snapshot.paramMap.get('username') +"";
  this.postid= this.activatedRoute.snapshot.paramMap.get('id') +"";

  //Printing the page
/*const printContent = document.getElementById("componentID");
const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();*/
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