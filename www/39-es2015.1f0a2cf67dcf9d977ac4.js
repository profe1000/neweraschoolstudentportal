(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"0BWw":function(t,e,i){"use strict";i.r(e),i.d(e,"AssignmentsPageModule",(function(){return z}));var s=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),a=i("mrSG"),d=i("gcOT"),l=i("ZzJ7"),c=i("fXoL"),h=i("tk/3"),u=i("jhN1");function p(t,e){if(1&t&&(c.Mb(0,"span"),c.Mb(1,"b"),c.oc(2," \xa0 \xa0"),c.Mb(3,"ion-text",7),c.oc(4),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.Wb(2);c.zb(4),c.qc(" ",t.label," ")}}function b(t,e){if(1&t&&(c.Mb(0,"div",4),c.nc(1,p,5,1,"span",2),c.Mb(2,"div",5),c.Kb(3,"br"),c.Kb(4,"br"),c.Kb(5,"br"),c.Kb(6,"ion-spinner",6),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.Zb("ngIf",""!=t.label)}}function g(t,e){if(1&t&&(c.Mb(0,"span"),c.oc(1),c.Lb()),2&t){const t=c.Wb(2);c.zb(1),c.qc(" ",t.featurepost[0].totalrows," ")}}function m(t,e){if(1&t&&(c.Mb(0,"div",11),c.Mb(1,"div",12),c.Mb(2,"div",13),c.Mb(3,"ion-thumbnail",14),c.Kb(4,"img",15),c.Lb(),c.Kb(5,"br"),c.Lb(),c.Mb(6,"div",16),c.Kb(7,"br"),c.Kb(8,"br"),c.Mb(9,"a",17),c.oc(10," Open "),c.Lb(),c.oc(11," \xa0 "),c.Kb(12,"br"),c.Kb(13,"br"),c.Lb(),c.Mb(14,"div",18),c.Mb(15,"p",19),c.Mb(16,"span",20),c.oc(17," Title "),c.Lb(),c.Kb(18,"br"),c.Mb(19,"span",21),c.Mb(20,"b"),c.oc(21),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t){const t=e.$implicit;c.zb(4),c.ac("src",t.imagefile,c.kc),c.zb(5),c.cc("routerLink","/assignmentviewer/",t.assignmentid,"/",t.title,""),c.zb(12),c.qc("",t.title," ")}}function f(t,e){if(1&t&&(c.Mb(0,"div",8),c.Mb(1,"span"),c.Mb(2,"ion-text",9),c.oc(3," Assignment: "),c.nc(4,g,2,1,"span",2),c.Lb(),c.Lb(),c.nc(5,m,22,4,"div",10),c.Lb()),2&t){const t=c.Wb();c.zb(4),c.Zb("ngIf",t.featurepost.length>0),c.zb(1),c.Zb("ngForOf",t.featurepost)}}function v(t,e){1&t&&(c.Mb(0,"div"),c.Mb(1,"div",22),c.Kb(2,"img",23),c.Mb(3,"h3",24),c.oc(4," No Record Found "),c.Lb(),c.Mb(5,"p",24),c.oc(6," No Assignment was found, you can Add new Assignment or change your search parameter. "),c.Kb(7,"br"),c.Kb(8,"br"),c.Lb(),c.Mb(9,"p",25),c.Kb(10,"br"),c.Mb(11,"a",26),c.oc(12," Home "),c.Lb(),c.Lb(),c.Lb(),c.Lb())}function w(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div"),c.Mb(1,"div",22),c.Kb(2,"img",27),c.Mb(3,"h3",24),c.oc(4," No Network Connection "),c.Lb(),c.Mb(5,"p",24),c.oc(6," Connect to the Internet and try again Later "),c.Kb(7,"br"),c.Kb(8,"br"),c.Lb(),c.Mb(9,"p"),c.Kb(10,"br"),c.Mb(11,"a",28),c.Ub("click",(function(){return c.ic(t),c.Wb().loadpost()})),c.oc(12," Retry "),c.Lb(),c.Lb(),c.Lb(),c.Lb()}}function y(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",29),c.Mb(1,"ion-infinite-scroll",30),c.Ub("ionInfinite",(function(e){return c.ic(t),c.Wb().loadData(e)})),c.Kb(2,"ion-infinite-scroll-content",31),c.Lb(),c.Lb()}}const{Storage:M}=d.a;let O=(()=>{class t{constructor(t,e,i,s,n,o,r,a,d){this.generalservice=t,this.menuCtrl=e,this.alertController=i,this.navCtrl=s,this.toastController=n,this.router=o,this.httpClient=r,this.loadingController=a,this.sanitizer=d,this.apihost="",this.label="",this.catid="1",this.tagid="1",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype="1",this.apikey="",this.sortby="",this.pagenum=1,this.pagesize=20,this.showmainarticle=!0,this.delay=50,this.storagekey="students",this.disablepager=!1,this.reloadstarted=new c.n,this.reloadcompleted=new c.n,this.reloadcompletednull=new c.n,this.reloadfailure=new c.n,this.loadstarted=new c.n,this.loadcompleted=new c.n,this.loadcompletednull=new c.n,this.loadfailure=new c.n,this.loadeditfunction=new c.n,this.loadorderdespatch=new c.n,this.loadordermessage=new c.n,this.featurepost=[],this.newsite=!1,this.demopost=[1,2,3,4,5,6,7,8,9,10],this.slidefeature={initialSlide:0,slidesPerView:1,autoplay:!0,speed:400},this.studentstatus=["<span class='w3-text-orange w3-round'> Pending </span>","<span class='w3-text-green  w3-round'> Active  </span>","<span class='w3-text-blue  w3-round'> Graduated </span>","<span class='w3-text-pale-green  w3-round'> Archive </span>","<span class='w3-text-red'> Deleted </span>"],this.paymentstatus=["Not Paid","Paid"],this.orderfilter="0",this.orderfiltername="All Students",this.orderfilternamearray=["All Students","Pending Orders","Confirm Orders","Transist Orders","Delivered Orders","Rejected Orders"],this.orderfilterupdatetype=["1","2","3","4","5","6"],this.shownodata=!0,this.shownoconnection=!0,this.connectionstatuscode=0,this.loadinitialwithinitial()}loadinitialwithinitial(){return Object(a.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(a.a)(this,void 0,void 0,(function*(){yield this.loadinit()})),10)}))}loadinit(){return Object(a.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(a.a)(this,void 0,void 0,(function*(){yield this.loadpost(),this.disablepager&&this.toggleInfiniteScroll()})),Number(this.delay))}))}ngOnInit(){}updatepostview(){this.pagenum=1,this.featurepost=[],this.orderfiltername=this.orderfilternamearray[this.orderfilter],this.refreshpost()}geturl(){return console.log(this.generalservice.apiurl+this.generalservice.viewassignment+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize),this.generalservice.apiurl+this.generalservice.viewassignment+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize}loadpost(){return Object(a.a)(this,void 0,void 0,(function*(){this.connectionstatuscode=0,this.loadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log(t.post),this.newsite=!0,100==t.statuscode&&(this.loadcompleted.emit(),this.connectionstatuscode=1),100!=t.statuscode)return this.loadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield M.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.loadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}reloadinit(){return Object(a.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(a.a)(this,void 0,void 0,(function*(){yield this.reloadpost()})),Number(this.delay))}))}reloadpost(){return Object(a.a)(this,void 0,void 0,(function*(){try{try{document.getElementById("myinfinitescroll").disabled=!1}catch(t){}}catch(t){}this.pagenum=1,this.reloadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==t.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield M.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}refreshinit(){return Object(a.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(a.a)(this,void 0,void 0,(function*(){yield this.refreshpost()})),Number(this.delay))}))}refreshpost(){return Object(a.a)(this,void 0,void 0,(function*(){try{try{document.getElementById("myinfinitescroll").disabled=!1}catch(t){}}catch(t){}this.featurepost=[],this.pagenum=1,this.reloadstarted.emit(),this.connectionstatuscode=0,yield this.httpClient.get(this.geturl()).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==t.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield M.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}loadsyncpost(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield M.get({key:this.storagekey});if(null==t.value)return;const e=JSON.parse(t.value);console.log(e),this.featurepost=e,this.connectionstatuscode=1}))}loadData(t){this.pagenum=Number(this.pagenum)+1,this.httpClient.get(this.geturl()).subscribe(e=>{100==e.statuscode&&(this.featurepost=this.featurepost.concat(e.post),t.target.complete()),this.featurepost.length<Number(this.pagesize)*Number(this.pagenum)&&(console.log("disabled"),t.target.disabled=!0,t.target.complete()),console.log("success")},t=>{console.log(t)})}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}openpage(t){this.router.navigate(["userdetails/"+t])}realmoney(t){return"\u20a6"+t.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}mydatestring(t){var e=new Date(t);return(e.getDate()<10?"0"+e.getDate():e.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getUTCMonth()]+"-"+e.getUTCFullYear()}returndatetimestr(t){var e,i,s,n,o=new Date(t);return e=o.getMonth()+1<10?"-0":"-",i=o.getDate()<10?"-0":"-",s=o.getHours()<10?"0"+o.getHours():o.getHours(),n=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes(),console.log(o.getFullYear()+e+(o.getMonth()+1)+i+o.getDate()+"T"+s+":"+n+":00"),o.getFullYear()+e+(o.getMonth()+1)+i+o.getDate()+"T"+s+":"+n+":00"}returndatestr(t){var e,i,s=new Date(t);return console.log(s),e=s.getMonth()+1<10?"-0":"-",i=s.getDate()<10?"-0":"-",console.log(s.getFullYear()+e+(s.getMonth()+1)+i+s.getDate()),s.getFullYear()+e+(s.getMonth()+1)+i+s.getDate()}returnfulldatestr(t){var e=new Date(t);return console.log(e),e}presentToast(t){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3})).present()}))}showslectedoption(t,e){1==e.target.value?this.loadmyeditfunction(t):2==e.target.value?alert("Archived student function not ready"):3==e.target.value?this.alertdeletepost(t):4==e.target.value?alert("Archived student function not ready"):5==e.target.value&&alert("Approved student function not ready")}alertdeletepost(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Delete this Assignment",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.deletefile(t)}}]});yield e.present()}))}deletefile(t){return Object(a.a)(this,void 0,void 0,(function*(){JSON.stringify({apikey:""}),yield this.httpClient.get(this.generalservice.apiurl+"?userid=1&assignmentid="+this.featurepost[t].assignmentid).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){console.log(t),100!=t.statuscode&&this.presentToast("File not deleted"),100==t.statuscode&&this.presentToast("File Deleted")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")}),this.featurepost.splice(t,1)}))}openconfirm(t){this.alertconfirmorder(t)}alertconfirmorder(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Confirm this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.confirmfile(t)}}]});yield e.present()}))}confirmfile(t){return Object(a.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=1;var e=JSON.stringify({assignmentid:this.featurepost[t].assignmentid,orderstatuscode:1,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}opentransist(t){this.alerttransistpost(t)}alerttransistpost(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to move the order to transist",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.transistitem(t)}}]});yield e.present()}))}transistitem(t){return Object(a.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=2;var e=JSON.stringify({assignmentid:this.featurepost[t].assignmentid,orderstatuscode:2,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}opencompleteorder(t){this.aletcompletepost(t)}aletcompletepost(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure this order has been Delivered",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.completeitem(t)}}]});yield e.present()}))}completeitem(t){return Object(a.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=3;var e=JSON.stringify({assignmentid:this.featurepost[t].assignmentid,orderstatuscode:3,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}startloading(t){return Object(a.a)(this,void 0,void 0,(function*(){this.loading=yield this.loadingController.create({message:t}),yield this.loading.present()}))}stoploading(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.loading.dismiss()}))}loadmyeditfunction(t){this.loadeditfunction.emit(this.featurepost[t].assignmentid)}loadmyorderdispatch(t){this.loadorderdespatch.emit(this.featurepost[t].assignmentid)}loadmyordermessage(t){this.loadordermessage.emit(this.featurepost[t].assignmentid)}startassignment(t){return Object(a.a)(this,void 0,void 0,(function*(){var e=JSON.stringify({status:1,assignmentid:this.featurepost[t].assignmentid,adminid:this.generalservice.userid,apikey:this.generalservice.apikey});this.startloading("Please Wait"),yield this.httpClient.post(this.generalservice.apiurl+"",e).subscribe(e=>Object(a.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast(e.status),99==e.statuscode&&(this.presentToast(e.status),this.featurepost[t].publishedstatus=!0),this.stoploading()})),t=>{console.log(t),this.stoploading(),this.presentToast("Unable to connect to the Internet")})}))}stopassignment(t){return Object(a.a)(this,void 0,void 0,(function*(){var e=JSON.stringify({status:0,assignmentid:this.featurepost[t].assignmentid,adminid:this.generalservice.userid,apikey:this.generalservice.apikey});this.startloading("Please Wait"),yield this.httpClient.post(this.generalservice.apiurl+"",e).subscribe(e=>Object(a.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast(e.status),99==e.statuscode&&(this.presentToast(e.status),this.featurepost[t].publishedstatus=!1),this.stoploading()})),t=>{console.log(t),this.stoploading(),this.presentToast("Unable to connect to the Internet")})}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.a),c.Jb(o.I),c.Jb(o.a),c.Jb(o.J),c.Jb(o.M),c.Jb(r.f),c.Jb(h.a),c.Jb(o.H),c.Jb(u.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-viewassignment"]],viewQuery:function(t,e){var i;1&t&&c.mc(o.m,!0),2&t&&c.gc(i=c.Vb())&&(e.infiniteScroll=i.first)},inputs:{apihost:"apihost",label:"label",catid:"catid",tagid:"tagid",qstring:"qstring",qstringb:"qstringb",qstringc:"qstringc",qstringd:"qstringd",userid:"userid",postid:"postid",updatetype:"updatetype",apikey:"apikey",sortby:"sortby",pagenum:"pagenum",pagesize:"pagesize",showmainarticle:"showmainarticle",delay:"delay",storagekey:"storagekey",disablepager:"disablepager",shownodata:"shownodata",shownoconnection:"shownoconnection"},outputs:{reloadstarted:"reloadstarted",reloadcompleted:"reloadcompleted",reloadcompletednull:"reloadcompletednull",reloadfailure:"reloadfailure",loadstarted:"loadstarted",loadcompleted:"loadcompleted",loadcompletednull:"loadcompletednull",loadfailure:"loadfailure",loadeditfunction:"loadeditfunction",loadorderdespatch:"loadorderdespatch",loadordermessage:"loadordermessage"},decls:5,vars:5,consts:[["id","loader",4,"ngIf"],["style","margin-bottom: 10px; margin-top: 10px","id","news",4,"ngIf"],[4,"ngIf"],["class","w3-col l12 s12 m12",4,"ngIf"],["id","loader"],[1,"w3-center"],["color","primary",2,"zoom","2"],[2,"font-size","16px"],["id","news",2,"margin-bottom","10px","margin-top","10px"],[2,"font-size","12px","color","black"],["style","padding:3px","class","w3-col l12 s12",4,"ngFor","ngForOf"],[1,"w3-col","l12","s12",2,"padding","3px"],[1,"w3-border","w3-round","w3-white","w3-col",2,"width","100%"],[1,"w3-col","w3-center",2,"padding","4px","width","120px"],[2,"width","100%"],[1,"w3-round-large",2,"max-width","100%","width","80px","height","80px",3,"src"],[1,"w3-col","l3","s3","m3","w3-right","w3-center",2,"padding","4px"],[1,"w3-btn","w3-round","w3-primary","w3-small","w3-margin-bottom",3,"routerLink"],[1,"w3-rest",2,"padding-left","10px","padding-right","10px"],[1,"w3-padding-left","w3-padding-right","w3-medium"],[1,"w3-small","w3-text-dark-grey"],[1,"w3-large","w3-text-primary"],[1,"w3-col","l12","s12","m12","w3-card-0","w3-border","w3-center","w3-white","w3-margin-top","w3-margin-bottom","w3-round-xlarge",2,"height","350px"],["src","assets/images/nodata.png",2,"height","120px","max-width","100%"],[1,"myfont1"],[1,"w3-hide"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px"],["src","assets/images/nonetwork.png",2,"height","120px","max-width","100%"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px",3,"click"],[1,"w3-col","l12","s12","m12"],["threshold","100px","id","myinfinitescroll",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more..."]],template:function(t,e){1&t&&(c.nc(0,b,7,1,"div",0),c.nc(1,f,6,2,"div",1),c.nc(2,v,13,0,"div",2),c.nc(3,w,13,0,"div",2),c.nc(4,y,3,0,"div",3)),2&t&&(c.Zb("ngIf",0==e.connectionstatuscode),c.zb(1),c.Zb("ngIf",1==e.connectionstatuscode),c.zb(1),c.Zb("ngIf",2==e.connectionstatuscode),c.zb(1),c.Zb("ngIf",3==e.connectionstatuscode),c.zb(1),c.Zb("ngIf",1==e.connectionstatuscode))},directives:[s.j,o.w,o.B,s.i,o.C,r.h,o.L,o.m,o.n],styles:[""]}),t})();var q=i("7Qqe");const L=["appcont1"];function x(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",12),c.Mb(1,"div",13),c.Mb(2,"a",4),c.Ub("click",(function(){return c.ic(t),c.Wb().removesearchpanel()})),c.Kb(3,"ion-icon",14),c.Lb(),c.Lb(),c.Mb(4,"input",15),c.Ub("ngModelChange",(function(e){return c.ic(t),c.Wb().mysearchstring=e})),c.Lb(),c.Kb(5,"br"),c.Mb(6,"div",16),c.Mb(7,"app-selectservercomp",17),c.Ub("getselectdvalue",(function(e){return c.ic(t),c.Wb().getourselectdvalueqstringb(e)})),c.Lb(),c.Lb(),c.Mb(8,"div",16),c.Mb(9,"app-selectservercomp",18),c.Ub("getselectdvalue",(function(e){return c.ic(t),c.Wb().getourselectdvalueqstringc(e)})),c.Lb(),c.Lb(),c.Mb(10,"div",16),c.Mb(11,"app-selectservercomp",19),c.Ub("getselectdvalue",(function(e){return c.ic(t),c.Wb().getourselectdvalueqstringd(e)})),c.Lb(),c.Lb(),c.Mb(12,"div",13),c.Mb(13,"a",20),c.Ub("click",(function(){return c.ic(t),c.Wb().stopsearch()})),c.oc(14," Stop Search "),c.Lb(),c.oc(15," \xa0 "),c.Mb(16,"a",20),c.Ub("click",(function(){return c.ic(t),c.Wb().startsearch()})),c.oc(17," Search "),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=c.Wb();c.zb(4),c.Zb("ngModel",t.mysearchstring),c.zb(3),c.Zb("selvalue",t.qstringb)("apiurl",t.generalservice.apiurl+t.generalservice.viewcourseapi),c.zb(2),c.Zb("selvalue",t.qstringc)("apiurl",t.generalservice.apiurl+t.generalservice.viewclassapi),c.zb(2),c.Zb("selvalue",t.qstringd)("apiurl",t.generalservice.apiurl+t.generalservice.viewterm)}}const C=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n,o,r){this.generalservice=t,this.toastController=e,this.menuCtrl=i,this.navCtrl=s,this.http=n,this.router=o,this.loadingController=r,this.showsearch=!1,this.showdate=!1,this.showfilter=!1,this.mysearchstring="",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.postid="",this.userid="",this.updatetype="1",this.displaytype=1,this.myinit()}ionViewDidEnter(){this.menuCtrl.enable(!0),document.title="Student - My school Portal"}ngOnInit(){}myinit(){return Object(a.a)(this,void 0,void 0,(function*(){}))}changedisplaypage(t){this.displaytype=t}presentToast(t){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3})).present()}))}toogleshowsearch(){this.showsearch=!this.showsearch}startsearch(){this.qstring=this.mysearchstring,this.updatetype=1,this.appcont1.refreshinit(),this.showsearch=!1}stopsearch(){this.mysearchstring="",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype=1,this.appcont1.refreshinit(),this.showsearch=!1}removesearchpanel(){this.showsearch=!1}showedit(t){this.postid=t,this.changedisplaypage(3)}getourselectdvalue(t){}getourselectdvalueqstringb(t){this.qstringb=t}getourselectdvalueqstringc(t){this.qstringc=t}getourselectdvalueqstringd(t){this.qstringd=t}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l.a),c.Jb(o.M),c.Jb(o.I),c.Jb(o.J),c.Jb(h.a),c.Jb(r.f),c.Jb(o.H))},t.\u0275cmp=c.Db({type:t,selectors:[["app-assignments"]],viewQuery:function(t,e){var i;1&t&&c.tc(L,!0),2&t&&c.gc(i=c.Vb())&&(e.appcont1=i.first)},decls:15,vars:8,consts:[[1,"w3-border-bottom","w3-card"],["slot","start"],[1,"myfont1"],["slot","primary",1,"w3-hide"],[3,"click"],["slot","icon-only","name","search"],[1,"w3-light-grey","w3-col",2,"min-height","100%"],[1,"w3-col","l12","s12","m12",2,"padding","2px"],["style","position:fixed; width:100%; z-index: 10000;","class","w3-col l12 s12 m12 w3-card-4 w3-white w3-padding",4,"ngIf"],[1,"w3-col","l12","s12","m12","w3-animate-left",2,"padding","5px"],[3,"postid","userid","qstring","qstringb","qstringc","qstringd","updatetype","loadeditfunction"],["appcont1",""],[1,"w3-col","l12","s12","m12","w3-card-4","w3-white","w3-padding",2,"position","fixed","width","100%","z-index","10000"],[1,"w3-right-align"],["name","close-circle"],["placeholder","Search",1,"w3-input","w3-small","w3-border","w3-round",2,"height","50px",3,"ngModel","ngModelChange"],[1,"w3-col","l4","m4","s4","w3-margin-top"],["headername","Course","pagesize","200","titlename","fullcoursename","valuename","courseid",3,"selvalue","apiurl","getselectdvalue"],["headername","Session","titlename","classname","valuename","classid",3,"selvalue","apiurl","getselectdvalue"],["headername","Term","titlename","name","valuename","id",3,"selvalue","apiurl","getselectdvalue"],[1,"w3-btn","w3-round","w3-primary","w3-small",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-toolbar",0),c.Mb(1,"ion-buttons",1),c.Kb(2,"ion-menu-button"),c.Lb(),c.Mb(3,"ion-title",2),c.oc(4," Assignment "),c.Lb(),c.Mb(5,"ion-buttons",3),c.Mb(6,"ion-button",4),c.Ub("click",(function(){return e.toogleshowsearch()})),c.Kb(7,"ion-icon",5),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-content"),c.Mb(9,"div",6),c.Mb(10,"div",7),c.nc(11,x,18,7,"div",8),c.Mb(12,"div",9),c.Mb(13,"app-viewassignment",10,11),c.Ub("loadeditfunction",(function(t){return e.showedit(t)})),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(11),c.Zb("ngIf",e.showsearch),c.zb(2),c.Zb("postid",e.postid)("userid",e.userid)("qstring",e.qstring)("qstringb",e.qstringb)("qstringc",e.qstringc)("qstringd",e.qstringd)("updatetype",e.updatetype))},directives:[o.E,o.f,o.s,o.D,o.e,o.l,o.h,s.j,O,n.a,n.e,n.h,q.a],styles:[""]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(C)],r.i]}),t})();var j=i("j1ZV");let z=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.b,n.b,o.F,j.a,k]]}),t})()}}]);