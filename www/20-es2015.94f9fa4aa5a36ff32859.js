(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{KYuv:function(e,t,s){"use strict";s.r(t),s.d(t,"EventsPageModule",(function(){return D}));var i=s("ofXK"),o=s("3Pt+"),a=s("TEn/"),r=s("tyNb"),n=s("mrSG"),d=s("gcOT"),l=s("fXoL"),p=s("tk/3"),h=s("ZzJ7"),c=s("jhN1");function u(e,t){if(1&e&&(l.Mb(0,"span"),l.Mb(1,"b"),l.oc(2," \xa0 \xa0"),l.Mb(3,"ion-text",7),l.oc(4),l.Lb(),l.Lb(),l.Lb()),2&e){const e=l.Wb(2);l.zb(4),l.qc(" ",e.label," ")}}function m(e,t){if(1&e&&(l.Mb(0,"div",4),l.nc(1,u,5,1,"span",2),l.Mb(2,"div",5),l.Kb(3,"br"),l.Kb(4,"br"),l.Kb(5,"br"),l.Kb(6,"ion-spinner",6),l.Lb(),l.Lb()),2&e){const e=l.Wb();l.zb(1),l.Zb("ngIf",""!=e.label)}}function w(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",10),l.Mb(1,"div",11),l.Mb(2,"div",12),l.Kb(3,"br"),l.Kb(4,"br"),l.Mb(5,"a",13),l.Ub("click",(function(){l.ic(e);const s=t.index;return l.Wb(2).openpage(s)})),l.oc(6," See Details "),l.Lb(),l.Kb(7,"br"),l.Kb(8,"br"),l.Lb(),l.Mb(9,"div",14),l.Mb(10,"p",15),l.Kb(11,"span",16),l.Mb(12,"span",17),l.Mb(13,"b"),l.oc(14),l.Lb(),l.Lb(),l.Lb(),l.Mb(15,"p",18),l.Kb(16,"span",16),l.Mb(17,"b"),l.Kb(18,"span",19),l.Lb(),l.Kb(19,"br"),l.oc(20),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=t.$implicit,s=l.Wb(2);l.zb(14),l.qc("",e.title," "),l.zb(4),l.Zb("innerHTML",e.post,l.jc),l.zb(2),l.qc(" ",s.mydatestring(e.startdateofevents),"")}}function f(e,t){if(1&e&&(l.Mb(0,"div",8),l.nc(1,w,21,3,"div",9),l.Lb()),2&e){const e=l.Wb();l.zb(1),l.Zb("ngForOf",e.featurepost)}}function g(e,t){1&e&&(l.Mb(0,"div"),l.Mb(1,"div",20),l.Kb(2,"img",21),l.Mb(3,"h3",22),l.oc(4," No Record Found "),l.Lb(),l.Mb(5,"p",22),l.oc(6," No Record was found, you can Add new Record or change your search parameter. "),l.Kb(7,"br"),l.Kb(8,"br"),l.Lb(),l.Mb(9,"p",23),l.Kb(10,"br"),l.Mb(11,"a",24),l.oc(12," Home "),l.Lb(),l.Lb(),l.Lb(),l.Lb())}function b(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div"),l.Mb(1,"div",20),l.Kb(2,"img",25),l.Mb(3,"h3",22),l.oc(4," No Network Connection "),l.Lb(),l.Mb(5,"p",22),l.oc(6," Connect to the Internet and try again Later "),l.Kb(7,"br"),l.Kb(8,"br"),l.Lb(),l.Mb(9,"p"),l.Kb(10,"br"),l.Mb(11,"a",26),l.Ub("click",(function(){return l.ic(e),l.Wb().loadpost()})),l.oc(12," Retry "),l.Lb(),l.Lb(),l.Lb(),l.Lb()}}function v(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",27),l.Mb(1,"ion-infinite-scroll",28),l.Ub("ionInfinite",(function(t){return l.ic(e),l.Wb().loadData(t)})),l.Kb(2,"ion-infinite-scroll-content",29),l.Lb(),l.Lb()}}const{Storage:y}=d.a;let x=(()=>{class e{constructor(e,t,s,i,o,a,r,n,d){this.generalservice=e,this.menuCtrl=t,this.alertController=s,this.navCtrl=i,this.toastController=o,this.router=a,this.httpClient=r,this.loadingController=n,this.sanitizer=d,this.apihost="",this.label="",this.catid="1",this.tagid="1",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype="1",this.apikey="",this.sortby="",this.pagenum=1,this.pagesize=20,this.showmainarticle=!0,this.delay=50,this.storagekey="students",this.disablepager=!1,this.reloadstarted=new l.n,this.reloadcompleted=new l.n,this.reloadcompletednull=new l.n,this.reloadfailure=new l.n,this.loadstarted=new l.n,this.loadcompleted=new l.n,this.loadcompletednull=new l.n,this.loadfailure=new l.n,this.loadeditfunction=new l.n,this.loadorderdespatch=new l.n,this.loadordermessage=new l.n,this.featurepost=[],this.newsite=!1,this.demopost=[1,2,3,4,5,6,7,8,9,10],this.slidefeature={initialSlide:0,slidesPerView:1,autoplay:!0,speed:400},this.studentstatus=["<span class='w3-text-orange w3-round'> Pending </span>","<span class='w3-text-green  w3-round'> Active  </span>","<span class='w3-text-blue  w3-round'> Graduated </span>","<span class='w3-text-pale-green  w3-round'> Archive </span>","<span class='w3-text-red'> Deleted </span>"],this.paymentstatus=["Not Paid","Paid"],this.orderfilter="0",this.orderfiltername="All Students",this.orderfilternamearray=["All Students","Pending Orders","Confirm Orders","Transist Orders","Delivered Orders","Rejected Orders"],this.orderfilterupdatetype=["1","2","3","4","5","6"],this.shownodata=!0,this.shownoconnection=!0,this.connectionstatuscode=0,this.loadinitialwithinitial()}loadinitialwithinitial(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.loadinit()})),10)}))}loadinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.loadpost(),this.disablepager&&this.toggleInfiniteScroll()})),Number(this.delay))}))}ngOnInit(){}updatepostview(){this.pagenum=1,this.featurepost=[],this.orderfiltername=this.orderfilternamearray[this.orderfilter],this.refreshpost()}geturl(){return console.log(this.generalservice.apiurl+this.generalservice.vieweventapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid=1&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize),this.generalservice.apiurl+this.generalservice.vieweventapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid=1&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize}loadpost(){return Object(n.a)(this,void 0,void 0,(function*(){this.connectionstatuscode=0,this.loadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log(e.post),this.newsite=!0,100==e.statuscode&&(this.loadcompleted.emit(),this.connectionstatuscode=1),100!=e.statuscode)return this.loadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.loadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}reloadinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.reloadpost()})),Number(this.delay))}))}reloadpost(){return Object(n.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(e){}this.pagenum=1,this.reloadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==e.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}refreshinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.refreshpost()})),Number(this.delay))}))}refreshpost(){return Object(n.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(e){}this.featurepost=[],this.pagenum=1,this.reloadstarted.emit(),this.connectionstatuscode=0,yield this.httpClient.get(this.geturl()).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==e.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}loadsyncpost(){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield y.get({key:this.storagekey});if(null==e.value)return;const t=JSON.parse(e.value);console.log(t),this.featurepost=t,this.connectionstatuscode=1}))}loadData(e){this.pagenum=Number(this.pagenum)+1,this.httpClient.get(this.geturl()).subscribe(t=>{100==t.statuscode&&(this.featurepost=this.featurepost.concat(t.post),e.target.complete()),this.featurepost.length<Number(this.pagesize)*Number(this.pagenum)&&(console.log("disabled"),e.target.disabled=!0,e.target.complete()),console.log("success")},e=>{console.log(e)})}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}openpage(e){this.router.navigate(["userdetails/"+e])}realmoney(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}mydatestring(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}returndatetimestr(e){var t,s,i,o,a=new Date(e);return t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(e){var t,s,i=new Date(e);return console.log(i),t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(e){var t=new Date(e);return console.log(t),t}presentToast(e){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}showslectedoption(e,t){1==t.target.value?this.loadmyeditfunction(e):2==t.target.value?alert("View student function not ready"):3==t.target.value?alert("Delete student function not ready"):4==t.target.value?alert("Archived student function not ready"):5==t.target.value&&alert("Approved student function not ready")}opendelete(e){this.alertdeletepost(e)}alertdeletepost(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Cancel this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.deletefile(e)}}]});yield t.present()}))}deletefile(e){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=4;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:4,itemnum:4,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}openconfirm(e){this.alertconfirmorder(e)}alertconfirmorder(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Confirm this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.confirmfile(e)}}]});yield t.present()}))}confirmfile(e){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=1;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:1,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}opentransist(e){this.alerttransistpost(e)}alerttransistpost(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to move the order to transist",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.transistitem(e)}}]});yield t.present()}))}transistitem(e){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=2;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:2,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}opencompleteorder(e){this.aletcompletepost(e)}aletcompletepost(e){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure this order has been Delivered",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.completeitem(e)}}]});yield t.present()}))}completeitem(e){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=3;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:3,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}startloading(e){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=yield this.loadingController.create({message:e}),yield this.loading.present()}))}stoploading(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.loading.dismiss()}))}loadmyeditfunction(e){this.loadeditfunction.emit(this.featurepost[e].id)}loadmyorderdispatch(e){this.loadorderdespatch.emit(this.featurepost[e].storeorderid)}loadmyordermessage(e){this.loadordermessage.emit(this.featurepost[e].storeorderid)}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(h.a),l.Jb(a.I),l.Jb(a.a),l.Jb(a.J),l.Jb(a.M),l.Jb(r.f),l.Jb(p.a),l.Jb(a.H),l.Jb(c.b))},e.\u0275cmp=l.Db({type:e,selectors:[["app-viewevents"]],viewQuery:function(e,t){var s;1&e&&l.mc(a.m,!0),2&e&&l.gc(s=l.Vb())&&(t.infiniteScroll=s.first)},inputs:{apihost:"apihost",label:"label",catid:"catid",tagid:"tagid",qstring:"qstring",qstringb:"qstringb",qstringc:"qstringc",qstringd:"qstringd",userid:"userid",postid:"postid",updatetype:"updatetype",apikey:"apikey",sortby:"sortby",pagenum:"pagenum",pagesize:"pagesize",showmainarticle:"showmainarticle",delay:"delay",storagekey:"storagekey",disablepager:"disablepager",shownodata:"shownodata",shownoconnection:"shownoconnection"},outputs:{reloadstarted:"reloadstarted",reloadcompleted:"reloadcompleted",reloadcompletednull:"reloadcompletednull",reloadfailure:"reloadfailure",loadstarted:"loadstarted",loadcompleted:"loadcompleted",loadcompletednull:"loadcompletednull",loadfailure:"loadfailure",loadeditfunction:"loadeditfunction",loadorderdespatch:"loadorderdespatch",loadordermessage:"loadordermessage"},decls:5,vars:5,consts:[["id","loader",4,"ngIf"],["style","margin-bottom: 10px; margin-top: 10px","id","news",4,"ngIf"],[4,"ngIf"],["class","w3-col l12 s12 m12",4,"ngIf"],["id","loader"],[1,"w3-center"],["color","primary",2,"zoom","2"],[2,"font-size","16px"],["id","news",2,"margin-bottom","10px","margin-top","10px"],["style","padding:3px","class","w3-col l12 s12",4,"ngFor","ngForOf"],[1,"w3-col","l12","s12",2,"padding","3px"],[1,"w3-border","w3-round","w3-white","w3-col",2,"width","100%"],[1,"w3-col","l3","s3","m3","w3-right","w3-center",2,"padding","4px"],[1,"w3-text","w3-btn","w3-primary","w3-round","w3-left","w3-small",3,"click"],[1,"w3-rest",2,"padding-left","10px","padding-right","10px"],[1,"w3-padding-left","w3-padding-right","w3-medium"],[1,"w3-small","w3-text-dark-grey"],[1,"w3-medium","w3-text-primary"],[1,"w3-padding-left","w3-padding-right","w3-small"],[3,"innerHTML"],[1,"w3-col","l12","s12","m12","w3-card-0","w3-border","w3-center","w3-white","w3-margin-top","w3-margin-bottom","w3-round-xlarge",2,"height","350px"],["src","assets/images/nodata.png",2,"height","120px","max-width","100%"],[1,"myfont1"],[1,"w3-hide"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px"],["src","assets/images/nonetwork.png",2,"height","120px","max-width","100%"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px",3,"click"],[1,"w3-col","l12","s12","m12"],["threshold","100px","id","myinfinitescroll",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more..."]],template:function(e,t){1&e&&(l.nc(0,m,7,1,"div",0),l.nc(1,f,2,1,"div",1),l.nc(2,g,13,0,"div",2),l.nc(3,b,13,0,"div",2),l.nc(4,v,3,0,"div",3)),2&e&&(l.Zb("ngIf",0==t.connectionstatuscode),l.zb(1),l.Zb("ngIf",1==t.connectionstatuscode),l.zb(1),l.Zb("ngIf",2==t.connectionstatuscode),l.zb(1),l.Zb("ngIf",3==t.connectionstatuscode),l.zb(1),l.Zb("ngIf",1==t.connectionstatuscode))},directives:[i.j,a.w,a.B,i.i,a.m,a.n],styles:[""]}),e})();const j=["appcont1"];function O(e,t){if(1&e){const e=l.Nb();l.Mb(0,"div",6),l.Mb(1,"app-viewevents",7),l.Ub("loadeditfunction",(function(t){return l.ic(e),l.Wb().showedit(t)})),l.Lb(),l.Lb()}}const{Storage:M}=d.a,q=[{path:"",component:(()=>{class e{constructor(e,t,s,i,o,a){this.toastController=e,this.menuCtrl=t,this.navCtrl=s,this.http=i,this.router=o,this.loadingController=a,this.showsearch=!1,this.showdate=!1,this.showverify=!1,this.qstring="",this.qstringb="",this.updatetype="1",this.displaytype=1,this.myinit()}ionViewDidEnter(){this.menuCtrl.enable(!0),document.title="Student - My school Portal"}ngOnInit(){}myinit(){return Object(n.a)(this,void 0,void 0,(function*(){}))}changedisplaypage(e){this.displaytype=e}getprofile(){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield M.get({key:"adminlogindetails"});null==e.value&&this.router.navigate(["login"]);const t=JSON.parse(e.value);console.log(t)}))}presentToast(e){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}stopsearch(){this.toogleshowsearch(),this.qstring="",this.qstringb="",this.updatetype=1,this.appcont1.refreshinit()}startsearch(){this.toogleshowsearch(),this.qstring=this.mysearchstring,this.updatetype=3,this.appcont1.refreshinit()}toogleshowsearch(){this.showsearch=!this.showsearch}startshowverify(){this.showverify?(this.updatetype=1,this.appcont1.refreshinit()):(this.updatetype=8,this.appcont1.refreshinit()),this.showverify=!this.showverify}stopdate(){this.toogleshowdate(),this.qstring="",this.qstringb="",this.updatetype=1,this.appcont1.refreshinit(),this.appcont1.reloadpost()}startdate(){this.toogleshowdate(),this.qstring=this.mystartdate,this.qstringb=this.myenddate,this.updatetype=5,this.appcont1.refreshinit()}toogleshowdate(){this.showdate=!this.showdate}showedit(e){this.postid=e,this.changedisplaypage(3)}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(a.M),l.Jb(a.I),l.Jb(a.J),l.Jb(p.a),l.Jb(r.f),l.Jb(a.H))},e.\u0275cmp=l.Db({type:e,selectors:[["app-events"]],viewQuery:function(e,t){var s;1&e&&l.mc(j,!0),2&e&&l.gc(s=l.Vb())&&(t.appcont1=s.first)},decls:9,vars:1,consts:[[1,"w3-border-bottom","w3-card"],["slot","start"],[1,"myfont1"],[1,"w3-light-grey","w3-col",2,"min-height","100%"],[1,"w3-col","l12","s12","m12",2,"padding","2px"],["class","w3-col l12 s12 m12 w3-animate-left","style","padding:5px;",4,"ngIf"],[1,"w3-col","l12","s12","m12","w3-animate-left",2,"padding","5px"],[3,"loadeditfunction"]],template:function(e,t){1&e&&(l.Mb(0,"ion-toolbar",0),l.Mb(1,"ion-buttons",1),l.Kb(2,"ion-menu-button"),l.Lb(),l.Mb(3,"ion-title",2),l.oc(4," Events "),l.Lb(),l.Lb(),l.Mb(5,"ion-content"),l.Mb(6,"div",3),l.Mb(7,"div",4),l.nc(8,O,2,0,"div",5),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(8),l.Zb("ngIf",1==t.displaytype))},directives:[a.E,a.f,a.s,a.D,a.h,i.j,x],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(q)],r.i]}),e})();var C=s("j1ZV");let D=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.b,a.F,C.a,k]]}),e})()},ZzJ7:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var i=s("mrSG"),o=s("gcOT"),a=s("fXoL"),r=s("TEn/"),n=s("tk/3"),d=s("tyNb");const{Storage:l}=o.a;let p=(()=>{class e{constructor(e,t,s,i,o,a){this.toastController=e,this.menuCtrl=t,this.navCtrl=s,this.http=i,this.router=o,this.loadingController=a,this.apiurl="",this.studentlogin="https://profesmsnewera.profeworld.com/api/student/auth/signinapi.ashx",this.adminlogin="https://profesmsnewera.profeworld.com/api/admin/auth/signinapi.ashx",this.adminsync="https://profesmsnewera.profeworld.com/api/admin/auth/viewadminprofile.ashx",this.homedata="https://profesmsnewera.profeworld.com/api/admin/view/viewadminhomedata.ashx",this.adminrole="assets/json/testapi/adminrole.json",this.viewstudentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstudent.ashx",this.vieteacherapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstaff.ashx",this.viewparentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewparent.ashx",this.viewsampleapi="assets/json/testapi/sample.json",this.viewclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewclass.ashx",this.viewsubclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsubclasses.ashx",this.viewclassaarmpi="https://profesmsnewera.profeworld.com/api/admin/view/viewclassesarm.ashx",this.viewcourseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewcourses.ashx",this.viewschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewgeneralfees.ashx",this.viewfeespaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewfeespayment.ashx",this.viewspecificschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewspecificfees.ashx",this.viewtransportrouteapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportroutes.ashx",this.viewtransportordersapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportorders.ashx",this.viewstockitemsapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockitem.ashx",this.viewstockpurchaseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchase.ashx",this.viewexpensesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpenses.ashx",this.viewstocksalesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksales.ashx",this.viewstockpurchasecartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchasecart.ashx",this.viewexpensescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpensescart.ashx",this.viewstocksalescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksalescart.ashx",this.viewsalarypaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarypayment.ashx",this.viewsalaryallowancedefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancedefault.ashx",this.viewsalaryallowancemodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancemodel.ashx",this.viewsalaryallowancepaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancepayment.ashx",this.viewsalarydeductiondefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductiondefault.ashx",this.viewsalarydeductionmodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionmodel.ashx",this.viewsalarydeductionpaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionpayment.ashx",this.viewblogpostapi="https://profesmsnewera.profeworld.com/api/admin/view/viewpost.ashx",this.viewvideosapi="https://profesmsnewera.profeworld.com/api/admin/view/viewvideo.ashx",this.vieweventapi="https://profesmsnewera.profeworld.com/api/admin/view/viewevents.ashx",this.viewtransactionapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransactiongeneral.ashx",this.viewresult="https://profesmsnewera.profeworld.com/api/admin/view/viewresult.ashx",this.studentreport="https://profesmsnewera.profeworld.com/api/admin/view/viewstudentclass.ashx",this.viewterm="assets/json/testapi/sessionterm.json",this.viewsession="assets/json/testapi/session.json",this.viewassignment="https://profesmsnewera.profeworld.com/api/admin/view/viewassignment.ashx",this.viewassignmentanswer="https://profesmsnewera.profeworld.com/api/admin/view/viewassignmentanswer.ashx",this.viewnote="https://profesmsnewera.profeworld.com/api/admin/view/viewnote.ashx",this.selectcountry="assets/json/testapi/selectcountry.json",this.selectbloodgroup="assets/json/testapi/selectbloodgroup.json",this.selectgender="assets/json/testapi/selectgender.json",this.selectcat="assets/json/testapi/studentcat.json",this.selectreligion="assets/json/testapi/selectreligion.json",this.selectstate="assets/json/testapi/selectstate.json",this.selectlga="assets/json/testapi/selectlga.json",this.statusstudent="assets/json/testapi/statusstudent.json",this.statusteacher="assets/json/testapi/statusteacher.json",this.statusparent="assets/json/testapi/statusparent.json",this.statusdebtors="assets/json/testapi/statusdebtors.json",this.onlinequiz="https://profesmsnewera.profeworld.com/api/admin/view/viewquiz.ashx",this.onlinequizresult="https://profesmsnewera.profeworld.com/api/admin/view/viewquizresult.ashx",this.addonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/addquiz.ashx",this.editonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/editquiz.ashx",this.quizbase="https://profesmsnewera.profeworld.com/files/quizfiles/",this.savequizeditorfile="https://profesmsnewera.profeworld.com/api/admin/add/savequizeditorfile.ashx",this.updatequizstatus="https://profesmsnewera.profeworld.com/api/admin/update/updatequizstatus.ashx",this.addquizscore="api/users/add/addquizresult.ashx",this.updateresultscore="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetscore.ashx",this.updateresultsheetbehaviour="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetbehaviour.ashx",this.updateresultsheetmeta="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetmeta.ashx",this.createresultsheet="https://profesmsnewera.profeworld.com/api/admin/add/createresultsheet.ashx",this.addgeneralfees="https://profesmsnewera.profeworld.com/api/admin/add/addgeneralfees.ashx",this.addspecificfees="https://profesmsnewera.profeworld.com/api/admin/add/addspecificfees.ashx",this.addfeespayment="https://profesmsnewera.profeworld.com/api/admin/add/addfeespayment.ashx",this.addstudent="https://profesmsnewera.profeworld.com/api/admin/add/addstudent.ashx",this.addteacher="https://profesmsnewera.profeworld.com/api/admin/add/addstaff.ashx",this.addparent="https://profesmsnewera.profeworld.com/api/admin/add/addparent.ashx",this.addadmin="https://profesmsnewera.profeworld.com/api/admin/add/addadmin.ashx",this.sampledelete="assets/json/testapi/selectdelete.json",this.deleteonlinequiz="https://mystudyappapi.profeworld.com/mainapi/adminlogic/deletequizonline.ashx",this.generatepdf="https://testucheapi.profeworld.com/generatepdf",this.smsgateway="https://portal.nigeriabulksms.com/api/",this.smsgatewayb=" https://www.ipwebsms.com/components/com_spc/smsapi.php",this.userData=[],this.userid=1,this.apikey=1,this.numstudent=0,this.numparent=0,this.numteacher=0,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022",this.myinit()}myinit(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.getprofile()}))}getprofile(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield l.get({key:"userlogindetails"});null==e.value&&this.router.navigate(["login"]);const t=JSON.parse(e.value);console.log(t),this.userData=t,this.userid=t.userdata[0].studentid,this.apikey=t.userdata[0].token}))}syncprofile(){return Object(i.a)(this,void 0,void 0,(function*(){var e=JSON.stringify({adminid:this.userid,apikey:this.apikey});yield this.http.post(this.adminsync,e).subscribe(e=>Object(i.a)(this,void 0,void 0,(function*(){console.log(e),100!=e.statuscode&&this.presentToast(e.status),100==e.statuscode&&(yield l.set({key:"userlogindetails",value:JSON.stringify(e)}))})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}gethomedataprofile(){return Object(i.a)(this,void 0,void 0,(function*(){JSON.stringify({adminid:this.userid,apikey:this.apikey}),yield this.http.get(this.homedata).subscribe(e=>Object(i.a)(this,void 0,void 0,(function*(){console.log(e),100!=e.statuscode&&this.presentToast(e.status),100==e.statuscode&&(this.numstudent=e.post[0].totalstudent,this.numteacher=e.post[0].totalteacher,this.numparent=e.post[0].totalparent,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}presentToast(e){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}getdaynum(e){var t=new Date;return t.setDate(t.getDate()+e),["Sun","Mon","Tue","wed","Thu","Fri","Sat"][t.getDay()]}formatDate(e){var t=new Date(e),s=""+(t.getMonth()+1),i=""+t.getDate(),o=t.getFullYear();return s.length<2&&(s="0"+s),i.length<2&&(i="0"+i),[o,s,i].join("-")}mydatestring(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}returndatetimestr(e){var t,s,i,o,a=new Date(e);return t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(e){var t,s,i=new Date(e);return console.log(i),t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(e){var t=new Date(e);return console.log(t),t}realmoney(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}genrateuuid(){var e=new Date,t=this.userid+"-"+e.getUTCFullYear()+e.getUTCMonth()+e.getUTCDay()+e.getUTCHours()+e.getUTCMinutes()+e.getUTCSeconds()+e.getUTCMilliseconds();return 1e7+Math.round(7e7*Math.random())+"-"+t}goback(){}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(r.M),a.Qb(r.I),a.Qb(r.J),a.Qb(n.a),a.Qb(d.f),a.Qb(r.H))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);