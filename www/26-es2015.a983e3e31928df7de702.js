(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"00Ye":function(e,t,s){"use strict";s.r(t),s.d(t,"MessagesPageModule",(function(){return S}));var i=s("ofXK"),o=s("3Pt+"),a=s("TEn/"),n=s("tyNb"),r=s("mrSG"),d=s("gcOT"),l=s("ZzJ7"),c=s("fXoL"),p=s("tk/3"),h=s("jhN1");function u(e,t){if(1&e&&(c.Mb(0,"span"),c.Mb(1,"b"),c.oc(2," \xa0 \xa0"),c.Mb(3,"ion-text",7),c.oc(4),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.Wb(2);c.zb(4),c.qc(" ",e.label," ")}}function b(e,t){if(1&e&&(c.Mb(0,"div",4),c.nc(1,u,5,1,"span",2),c.Mb(2,"div",5),c.Kb(3,"br"),c.Kb(4,"br"),c.Kb(5,"br"),c.Kb(6,"ion-spinner",6),c.Lb(),c.Lb()),2&e){const e=c.Wb();c.zb(1),c.Zb("ngIf",""!=e.label)}}function m(e,t){if(1&e&&(c.Mb(0,"span"),c.Mb(1,"b"),c.Mb(2,"ion-text",7),c.oc(3),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.Wb(2);c.zb(3),c.qc(" ",e.label," ")}}function w(e,t){if(1&e&&(c.Mb(0,"span"),c.oc(1),c.Lb()),2&e){const e=c.Wb(2);c.zb(1),c.qc(" ",e.featurepost[0].totalrows," ")}}function g(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",19),c.Mb(1,"div",20),c.Mb(2,"div",21),c.Kb(3,"br"),c.Mb(4,"ion-thumbnail",22),c.Kb(5,"img",23),c.Lb(),c.Lb(),c.Mb(6,"div",24),c.Kb(7,"br"),c.Mb(8,"a",25),c.Ub("click",(function(){c.ic(e);const s=t.index;return c.Wb(2).loadmyeditfunction(s)})),c.Mb(9,"u"),c.Kb(10,"ion-icon",26),c.oc(11," Edit Information "),c.Lb(),c.Lb(),c.Kb(12,"br"),c.Kb(13,"br"),c.Mb(14,"select",27),c.Ub("change",(function(s){c.ic(e);const i=t.index;return c.Wb(2).showslectedoption(i,s)})),c.Mb(15,"option",12),c.oc(16," Select Option"),c.Lb(),c.Mb(17,"option",13),c.oc(18," Edit Student"),c.Lb(),c.Mb(19,"option",14),c.oc(20," View Student "),c.Lb(),c.Mb(21,"option",15),c.oc(22," Delete Student "),c.Lb(),c.Mb(23,"option",16),c.oc(24," Archived Student"),c.Lb(),c.Mb(25,"option",17),c.oc(26," Approved Student "),c.Lb(),c.Lb(),c.Lb(),c.Mb(27,"div",28),c.Mb(28,"p",29),c.Mb(29,"span",30),c.oc(30," Due Fees"),c.Lb(),c.Kb(31,"br"),c.Mb(32,"span",31),c.Mb(33,"b"),c.oc(34),c.Lb(),c.Lb(),c.Lb(),c.Mb(35,"p",32),c.Mb(36,"span",30),c.oc(37," Student Age: "),c.Lb(),c.Mb(38,"b"),c.Kb(39,"span",33),c.Lb(),c.Lb(),c.Mb(40,"p",32),c.Mb(41,"span",30),c.oc(42," Gender: "),c.Lb(),c.Mb(43,"b"),c.Kb(44,"span",33),c.Lb(),c.Lb(),c.Lb(),c.Mb(45,"div",34),c.Mb(46,"p",29),c.Mb(47,"span",30),c.oc(48," Student Name"),c.Lb(),c.Kb(49,"br"),c.Mb(50,"span",35),c.Mb(51,"b"),c.oc(52),c.Lb(),c.Lb(),c.Lb(),c.Mb(53,"p",32),c.Mb(54,"span",30),c.oc(55," Student Class: "),c.Lb(),c.Mb(56,"b"),c.Kb(57,"span",33),c.Lb(),c.Lb(),c.Mb(58,"p",32),c.Mb(59,"span",30),c.oc(60," Student Status: "),c.Lb(),c.Mb(61,"b"),c.Kb(62,"span",33),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=t.$implicit,s=c.Wb(2);c.zb(5),c.ac("src",e.dpurl,c.kc),c.zb(29),c.qc(" ",s.realmoney(e.duefees)," "),c.zb(5),c.Zb("innerHTML",e.age,c.jc),c.zb(5),c.Zb("innerHTML",e.gender,c.jc),c.zb(8),c.qc("",e.firstname+" "+e.lastname+" "+e.middlename," "),c.zb(5),c.Zb("innerHTML",e.class,c.jc),c.zb(5),c.Zb("innerHTML",s.studentstatus[e.studentstatus],c.jc)}}function f(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",8),c.Mb(1,"div",9),c.nc(2,m,4,1,"span",2),c.Mb(3,"span"),c.Mb(4,"ion-text",10),c.oc(5),c.nc(6,w,2,1,"span",2),c.Lb(),c.Lb(),c.Mb(7,"select",11),c.Ub("change",(function(){return c.ic(e),c.Wb().updatepostview()}))("ngModelChange",(function(t){return c.ic(e),c.Wb().orderfilter=t})),c.Mb(8,"option",12),c.oc(9," All Student "),c.Lb(),c.Mb(10,"option",13),c.oc(11," Active Student"),c.Lb(),c.Mb(12,"option",14),c.oc(13," Pending Student "),c.Lb(),c.Mb(14,"option",15),c.oc(15," Graduted Student "),c.Lb(),c.Mb(16,"option",16),c.oc(17," Archive Student"),c.Lb(),c.Mb(18,"option",17),c.oc(19," Deleted Student "),c.Lb(),c.Lb(),c.Lb(),c.nc(20,g,63,7,"div",18),c.Lb()}if(2&e){const e=c.Wb();c.zb(2),c.Zb("ngIf",""!=e.label),c.zb(3),c.qc(" ",e.orderfiltername,": "),c.zb(1),c.Zb("ngIf",e.featurepost.length>0),c.zb(1),c.Zb("ngModel",e.orderfilter),c.zb(13),c.Zb("ngForOf",e.featurepost)}}function v(e,t){1&e&&(c.Mb(0,"div"),c.Mb(1,"div",36),c.Kb(2,"img",37),c.Mb(3,"h3",38),c.oc(4," No Mail Found "),c.Lb(),c.Mb(5,"p",38),c.oc(6," No Messages was found, Once you send a message it will appear here. "),c.Kb(7,"br"),c.Kb(8,"br"),c.Lb(),c.Mb(9,"p",39),c.Kb(10,"br"),c.Mb(11,"a",40),c.oc(12," Home "),c.Lb(),c.Lb(),c.Lb(),c.Lb())}function y(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div"),c.Mb(1,"div",36),c.Kb(2,"img",41),c.Mb(3,"h3",38),c.oc(4," No Network Connection "),c.Lb(),c.Mb(5,"p",38),c.oc(6," Connect to the Internet and try again Later "),c.Kb(7,"br"),c.Kb(8,"br"),c.Lb(),c.Mb(9,"p"),c.Kb(10,"br"),c.Mb(11,"a",42),c.Ub("click",(function(){return c.ic(e),c.Wb().loadpost()})),c.oc(12," Retry "),c.Lb(),c.Lb(),c.Lb(),c.Lb()}}function M(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",43),c.Mb(1,"ion-infinite-scroll",44),c.Ub("ionInfinite",(function(t){return c.ic(e),c.Wb().loadData(t)})),c.Kb(2,"ion-infinite-scroll-content",45),c.Lb(),c.Lb()}}const{Storage:x}=d.a;let L=(()=>{class e{constructor(e,t,s,i,o,a,n,r,d){this.generalservice=e,this.menuCtrl=t,this.alertController=s,this.navCtrl=i,this.toastController=o,this.router=a,this.httpClient=n,this.loadingController=r,this.sanitizer=d,this.apihost="",this.label="",this.catid="1",this.tagid="1",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype="1",this.apikey="",this.sortby="",this.pagenum=1,this.pagesize=20,this.showmainarticle=!0,this.delay=50,this.storagekey="students",this.disablepager=!1,this.reloadstarted=new c.n,this.reloadcompleted=new c.n,this.reloadcompletednull=new c.n,this.reloadfailure=new c.n,this.loadstarted=new c.n,this.loadcompleted=new c.n,this.loadcompletednull=new c.n,this.loadfailure=new c.n,this.loadeditfunction=new c.n,this.loadorderdespatch=new c.n,this.loadordermessage=new c.n,this.featurepost=[],this.newsite=!1,this.demopost=[1,2,3,4,5,6,7,8,9,10],this.slidefeature={initialSlide:0,slidesPerView:1,autoplay:!0,speed:400},this.studentstatus=["<span class='w3-text-orange w3-round'> Pending </span>","<span class='w3-text-green  w3-round'> Active  </span>","<span class='w3-text-blue  w3-round'> Graduated </span>","<span class='w3-text-pale-green  w3-round'> Archive </span>","<span class='w3-text-red'> Deleted </span>"],this.paymentstatus=["Not Paid","Paid"],this.orderfilter="0",this.orderfiltername="All Students",this.orderfilternamearray=["All Students","Pending Orders","Confirm Orders","Transist Orders","Delivered Orders","Rejected Orders"],this.orderfilterupdatetype=["1","2","3","4","5","6"],this.shownodata=!0,this.shownoconnection=!0,this.connectionstatuscode=0,this.loadinitialwithinitial()}loadinitialwithinitial(){return Object(r.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.loadinit()})),10)}))}loadinit(){return Object(r.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.loadpost(),this.disablepager&&this.toggleInfiniteScroll()})),Number(this.delay))}))}ngOnInit(){}updatepostview(){this.pagenum=1,this.featurepost=[],this.orderfiltername=this.orderfilternamearray[this.orderfilter],this.refreshpost()}geturl(){return console.log(this.generalservice.apiurl+this.generalservice.viewsampleapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize),this.generalservice.apiurl+this.generalservice.viewsampleapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize}loadpost(){return Object(r.a)(this,void 0,void 0,(function*(){this.connectionstatuscode=0,this.loadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log(e.post),this.newsite=!0,100==e.statuscode&&(this.loadcompleted.emit(),this.connectionstatuscode=1),100!=e.statuscode)return this.loadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield x.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.loadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}reloadinit(){return Object(r.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.reloadpost()})),Number(this.delay))}))}reloadpost(){return Object(r.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(e){}this.pagenum=1,this.reloadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==e.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield x.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}refreshinit(){return Object(r.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.refreshpost()})),Number(this.delay))}))}refreshpost(){return Object(r.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(e){}this.featurepost=[],this.pagenum=1,this.reloadstarted.emit(),this.connectionstatuscode=0,yield this.httpClient.get(this.geturl()).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=e.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==e.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield x.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),e=>{console.log(e),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}loadsyncpost(){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield x.get({key:this.storagekey});if(null==e.value)return;const t=JSON.parse(e.value);console.log(t),this.featurepost=t,this.connectionstatuscode=1}))}loadData(e){this.pagenum=Number(this.pagenum)+1,this.httpClient.get(this.geturl()).subscribe(t=>{100==t.statuscode&&(this.featurepost=this.featurepost.concat(t.post),e.target.complete()),this.featurepost.length<Number(this.pagesize)*Number(this.pagenum)&&(console.log("disabled"),e.target.disabled=!0,e.target.complete()),console.log("success")},e=>{console.log(e)})}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}openpage(e){this.router.navigate(["userdetails/"+e])}realmoney(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}mydatestring(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}returndatetimestr(e){var t,s,i,o,a=new Date(e);return t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(e){var t,s,i=new Date(e);return console.log(i),t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(e){var t=new Date(e);return console.log(t),t}presentToast(e){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}showslectedoption(e,t){1==t.target.value?this.loadmyeditfunction(e):2==t.target.value?alert("View student function not ready"):3==t.target.value?alert("Delete student function not ready"):4==t.target.value?alert("Archived student function not ready"):5==t.target.value&&alert("Approved student function not ready")}opendelete(e){this.alertdeletepost(e)}alertdeletepost(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Cancel this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.deletefile(e)}}]});yield t.present()}))}deletefile(e){return Object(r.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=4;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:4,itemnum:4,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}openconfirm(e){this.alertconfirmorder(e)}alertconfirmorder(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Confirm this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.confirmfile(e)}}]});yield t.present()}))}confirmfile(e){return Object(r.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=1;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:1,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}opentransist(e){this.alerttransistpost(e)}alerttransistpost(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to move the order to transist",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.transistitem(e)}}]});yield t.present()}))}transistitem(e){return Object(r.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=2;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:2,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}opencompleteorder(e){this.aletcompletepost(e)}aletcompletepost(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure this order has been Delivered",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.completeitem(e)}}]});yield t.present()}))}completeitem(e){return Object(r.a)(this,void 0,void 0,(function*(){this.featurepost[e].orderstatus=3;var t=JSON.stringify({storeorderid:this.featurepost[e].storeorderid,orderstatuscode:3,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",t).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){console.log(e),99!=e.statuscode&&this.presentToast("Unable to Update Order"),99==e.statuscode&&this.presentToast("Order Updated")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}startloading(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=yield this.loadingController.create({message:e}),yield this.loading.present()}))}stoploading(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.loading.dismiss()}))}loadmyeditfunction(e){this.loadeditfunction.emit(this.featurepost[e].id)}loadmyorderdispatch(e){this.loadorderdespatch.emit(this.featurepost[e].storeorderid)}loadmyordermessage(e){this.loadordermessage.emit(this.featurepost[e].storeorderid)}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(a.I),c.Jb(a.a),c.Jb(a.J),c.Jb(a.M),c.Jb(n.f),c.Jb(p.a),c.Jb(a.H),c.Jb(h.b))},e.\u0275cmp=c.Db({type:e,selectors:[["app-viewmessages"]],viewQuery:function(e,t){var s;1&e&&c.mc(a.m,!0),2&e&&c.gc(s=c.Vb())&&(t.infiniteScroll=s.first)},inputs:{apihost:"apihost",label:"label",catid:"catid",tagid:"tagid",qstring:"qstring",qstringb:"qstringb",qstringc:"qstringc",qstringd:"qstringd",userid:"userid",postid:"postid",updatetype:"updatetype",apikey:"apikey",sortby:"sortby",pagenum:"pagenum",pagesize:"pagesize",showmainarticle:"showmainarticle",delay:"delay",storagekey:"storagekey",disablepager:"disablepager",shownodata:"shownodata",shownoconnection:"shownoconnection"},outputs:{reloadstarted:"reloadstarted",reloadcompleted:"reloadcompleted",reloadcompletednull:"reloadcompletednull",reloadfailure:"reloadfailure",loadstarted:"loadstarted",loadcompleted:"loadcompleted",loadcompletednull:"loadcompletednull",loadfailure:"loadfailure",loadeditfunction:"loadeditfunction",loadorderdespatch:"loadorderdespatch",loadordermessage:"loadordermessage"},decls:5,vars:5,consts:[["id","loader",4,"ngIf"],["style","margin-bottom: 10px; margin-top: 10px","id","news",4,"ngIf"],[4,"ngIf"],["class","w3-col l12 s12 m12",4,"ngIf"],["id","loader"],[1,"w3-center"],["color","primary",2,"zoom","2"],[2,"font-size","16px"],["id","news",2,"margin-bottom","10px","margin-top","10px"],[1,"w3-col","w3-margin-bottom"],[2,"font-size","12px","color","black"],[1,"w3-right","w3-input","w3-round-large","w3-small","w3-border-0-dark-grey","w3-white","w3-border",2,"width","150px",3,"ngModel","change","ngModelChange"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["style","padding:3px","class","w3-col l12 s12",4,"ngFor","ngForOf"],[1,"w3-col","l12","s12",2,"padding","3px"],[1,"w3-border","w3-round-xlarge","w3-white","w3-col",2,"width","100%"],[1,"w3-col","w3-center",2,"padding","4px","width","120px"],[2,"width","100%"],[1,"w3-circle",2,"max-width","100%","width","80px","height","80px",3,"src"],[1,"w3-col","l3","s3","m3","w3-right","w3-center",2,"padding","4px"],[1,"w3-text-blue","w3-left","w3-small",3,"click"],["name","create-sharp"],[1,"w3-centered","w3-input","w3-primay","w3-round-large","w3-small","w3-border-0-dark-grey","w3-border",2,"width","150px","max-width","100%",3,"change"],[1,"w3-col","l3","w3-border-right","w3-border-left","w3-padding","w3-hide-small","w3-hide-medium","w3-right",2,"padding","4px"],[1,"w3-padding-left","w3-padding-right","w3-medium"],[1,"w3-small","w3-text-dark-grey"],[1,"w3-large"],[1,"w3-padding-left","w3-padding-right","w3-small"],[3,"innerHTML"],[1,"w3-rest",2,"padding-left","10px","padding-right","10px"],[1,"w3-large","w3-text-primary"],[1,"w3-col","l12","s12","m12","w3-card-0","w3-border","w3-center","w3-white","w3-margin-top","w3-margin-bottom","w3-round-xlarge",2,"height","350px"],["src","assets/images/nodata.png",2,"height","120px","max-width","100%"],[1,"myfont1"],[1,"w3-hide"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px"],["src","assets/images/nonetwork.png",2,"height","120px","max-width","100%"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px",3,"click"],[1,"w3-col","l12","s12","m12"],["threshold","100px","id","myinfinitescroll",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more..."]],template:function(e,t){1&e&&(c.nc(0,b,7,1,"div",0),c.nc(1,f,21,5,"div",1),c.nc(2,v,13,0,"div",2),c.nc(3,y,13,0,"div",2),c.nc(4,M,3,0,"div",3)),2&e&&(c.Zb("ngIf",0==t.connectionstatuscode),c.zb(1),c.Zb("ngIf",1==t.connectionstatuscode),c.zb(1),c.Zb("ngIf",2==t.connectionstatuscode),c.zb(1),c.Zb("ngIf",3==t.connectionstatuscode),c.zb(1),c.Zb("ngIf",1==t.connectionstatuscode))},directives:[i.j,a.w,a.B,o.l,o.e,o.h,o.i,o.m,i.i,a.C,a.l,a.m,a.n],styles:[""]}),e})();const j=["appcont1"];function q(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",12),c.Mb(1,"div",13),c.Mb(2,"a",4),c.Ub("click",(function(){return c.ic(e),c.Wb().removesearchpanel()})),c.Kb(3,"ion-icon",14),c.Lb(),c.Lb(),c.Mb(4,"input",15),c.Ub("ngModelChange",(function(t){return c.ic(e),c.Wb().mysearchstring=t})),c.Lb(),c.Kb(5,"br"),c.Mb(6,"div",13),c.Mb(7,"a",16),c.Ub("click",(function(){return c.ic(e),c.Wb().stopsearch()})),c.oc(8," Stop Search "),c.Lb(),c.oc(9," \xa0 "),c.Mb(10,"a",16),c.Ub("click",(function(){return c.ic(e),c.Wb().startsearch()})),c.oc(11," Search "),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.zb(4),c.Zb("ngModel",e.mysearchstring)}}const O=[{path:"",component:(()=>{class e{constructor(e,t,s,i,o,a,n){this.generalservice=e,this.toastController=t,this.menuCtrl=s,this.navCtrl=i,this.http=o,this.router=a,this.loadingController=n,this.showsearch=!1,this.showdate=!1,this.showfilter=!1,this.mysearchstring="",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.postid="",this.userid="",this.updatetype="1",this.displaytype=1,this.myinit()}ionViewDidEnter(){this.menuCtrl.enable(!0),document.title="Student - My school Portal"}ngOnInit(){}myinit(){return Object(r.a)(this,void 0,void 0,(function*(){}))}changedisplaypage(e){this.displaytype=e}presentToast(e){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}toogleshowsearch(){this.showsearch=!this.showsearch}startsearch(){this.qstring=this.mysearchstring,this.updatetype=1,this.appcont1.refreshinit(),this.showsearch=!1}stopsearch(){this.mysearchstring="",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype=1,this.appcont1.refreshinit(),this.showsearch=!1}removesearchpanel(){this.showsearch=!1}showedit(e){this.postid=e,this.changedisplaypage(3)}getourselectdvalue(e){}getourselectdvalueqstringb(e){this.qstringb=e}getourselectdvalueqstringc(e){this.qstringc=e}getourselectdvalueqstringd(e){this.qstringd=e}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(a.M),c.Jb(a.I),c.Jb(a.J),c.Jb(p.a),c.Jb(n.f),c.Jb(a.H))},e.\u0275cmp=c.Db({type:e,selectors:[["app-messages"]],viewQuery:function(e,t){var s;1&e&&c.tc(j,!0),2&e&&c.gc(s=c.Vb())&&(t.appcont1=s.first)},decls:15,vars:8,consts:[[1,"w3-border-bottom","w3-card"],["slot","start"],[1,"myfont1"],["slot","primary",1,"w3-hide"],[3,"click"],["slot","icon-only","name","search"],[1,"w3-light-grey","w3-col",2,"min-height","100%"],[1,"w3-col","l12","s12","m12",2,"padding","2px"],["style","position:fixed; width:100%; z-index: 10000;","class","w3-col l12 s12 m12 w3-card-4 w3-white w3-padding",4,"ngIf"],[1,"w3-col","l12","s12","m12","w3-animate-left",2,"padding","5px"],[3,"postid","userid","qstring","qstringb","qstringc","qstringd","updatetype","loadeditfunction"],["appcont1",""],[1,"w3-col","l12","s12","m12","w3-card-4","w3-white","w3-padding",2,"position","fixed","width","100%","z-index","10000"],[1,"w3-right-align"],["name","close-circle"],["placeholder","Search",1,"w3-input","w3-small","w3-border","w3-round",2,"height","50px",3,"ngModel","ngModelChange"],[1,"w3-btn","w3-round","w3-primary","w3-small",3,"click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-toolbar",0),c.Mb(1,"ion-buttons",1),c.Kb(2,"ion-menu-button"),c.Lb(),c.Mb(3,"ion-title",2),c.oc(4," Message "),c.Lb(),c.Mb(5,"ion-buttons",3),c.Mb(6,"ion-button",4),c.Ub("click",(function(){return t.toogleshowsearch()})),c.Kb(7,"ion-icon",5),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-content"),c.Mb(9,"div",6),c.Mb(10,"div",7),c.nc(11,q,12,1,"div",8),c.Mb(12,"div",9),c.Mb(13,"app-viewmessages",10,11),c.Ub("loadeditfunction",(function(e){return t.showedit(e)})),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(11),c.Zb("ngIf",t.showsearch),c.zb(2),c.Zb("postid",t.postid)("userid",t.userid)("qstring",t.qstring)("qstringb",t.qstringb)("qstringc",t.qstringc)("qstringd",t.qstringd)("updatetype",t.updatetype))},directives:[a.E,a.f,a.s,a.D,a.e,a.l,a.h,i.j,L,o.a,o.e,o.h],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(O)],n.i]}),e})();var C=s("j1ZV");let S=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.b,a.F,C.a,k]]}),e})()},ZzJ7:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var i=s("mrSG"),o=s("gcOT"),a=s("fXoL"),n=s("TEn/"),r=s("tk/3"),d=s("tyNb");const{Storage:l}=o.a;let c=(()=>{class e{constructor(e,t,s,i,o,a){this.toastController=e,this.menuCtrl=t,this.navCtrl=s,this.http=i,this.router=o,this.loadingController=a,this.apiurl="",this.studentlogin="https://profesmsnewera.profeworld.com/api/student/auth/signinapi.ashx",this.adminlogin="https://profesmsnewera.profeworld.com/api/admin/auth/signinapi.ashx",this.adminsync="https://profesmsnewera.profeworld.com/api/admin/auth/viewadminprofile.ashx",this.homedata="https://profesmsnewera.profeworld.com/api/admin/view/viewadminhomedata.ashx",this.adminrole="assets/json/testapi/adminrole.json",this.viewstudentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstudent.ashx",this.vieteacherapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstaff.ashx",this.viewparentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewparent.ashx",this.viewsampleapi="assets/json/testapi/sample.json",this.viewclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewclass.ashx",this.viewsubclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsubclasses.ashx",this.viewclassaarmpi="https://profesmsnewera.profeworld.com/api/admin/view/viewclassesarm.ashx",this.viewcourseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewcourses.ashx",this.viewschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewgeneralfees.ashx",this.viewfeespaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewfeespayment.ashx",this.viewspecificschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewspecificfees.ashx",this.viewtransportrouteapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportroutes.ashx",this.viewtransportordersapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportorders.ashx",this.viewstockitemsapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockitem.ashx",this.viewstockpurchaseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchase.ashx",this.viewexpensesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpenses.ashx",this.viewstocksalesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksales.ashx",this.viewstockpurchasecartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchasecart.ashx",this.viewexpensescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpensescart.ashx",this.viewstocksalescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksalescart.ashx",this.viewsalarypaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarypayment.ashx",this.viewsalaryallowancedefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancedefault.ashx",this.viewsalaryallowancemodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancemodel.ashx",this.viewsalaryallowancepaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancepayment.ashx",this.viewsalarydeductiondefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductiondefault.ashx",this.viewsalarydeductionmodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionmodel.ashx",this.viewsalarydeductionpaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionpayment.ashx",this.viewblogpostapi="https://profesmsnewera.profeworld.com/api/admin/view/viewpost.ashx",this.viewvideosapi="https://profesmsnewera.profeworld.com/api/admin/view/viewvideo.ashx",this.vieweventapi="https://profesmsnewera.profeworld.com/api/admin/view/viewevents.ashx",this.viewtransactionapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransactiongeneral.ashx",this.viewresult="https://profesmsnewera.profeworld.com/api/admin/view/viewresult.ashx",this.studentreport="https://profesmsnewera.profeworld.com/api/admin/view/viewstudentclass.ashx",this.viewterm="assets/json/testapi/sessionterm.json",this.viewsession="assets/json/testapi/session.json",this.viewassignment="https://profesmsnewera.profeworld.com/api/admin/view/viewassignment.ashx",this.viewassignmentanswer="https://profesmsnewera.profeworld.com/api/admin/view/viewassignmentanswer.ashx",this.viewnote="https://profesmsnewera.profeworld.com/api/admin/view/viewnote.ashx",this.selectcountry="assets/json/testapi/selectcountry.json",this.selectbloodgroup="assets/json/testapi/selectbloodgroup.json",this.selectgender="assets/json/testapi/selectgender.json",this.selectcat="assets/json/testapi/studentcat.json",this.selectreligion="assets/json/testapi/selectreligion.json",this.selectstate="assets/json/testapi/selectstate.json",this.selectlga="assets/json/testapi/selectlga.json",this.statusstudent="assets/json/testapi/statusstudent.json",this.statusteacher="assets/json/testapi/statusteacher.json",this.statusparent="assets/json/testapi/statusparent.json",this.statusdebtors="assets/json/testapi/statusdebtors.json",this.onlinequiz="https://profesmsnewera.profeworld.com/api/admin/view/viewquiz.ashx",this.onlinequizresult="https://profesmsnewera.profeworld.com/api/admin/view/viewquizresult.ashx",this.addonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/addquiz.ashx",this.editonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/editquiz.ashx",this.quizbase="https://profesmsnewera.profeworld.com/files/quizfiles/",this.savequizeditorfile="https://profesmsnewera.profeworld.com/api/admin/add/savequizeditorfile.ashx",this.updatequizstatus="https://profesmsnewera.profeworld.com/api/admin/update/updatequizstatus.ashx",this.addquizscore="api/users/add/addquizresult.ashx",this.updateresultscore="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetscore.ashx",this.updateresultsheetbehaviour="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetbehaviour.ashx",this.updateresultsheetmeta="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetmeta.ashx",this.createresultsheet="https://profesmsnewera.profeworld.com/api/admin/add/createresultsheet.ashx",this.addgeneralfees="https://profesmsnewera.profeworld.com/api/admin/add/addgeneralfees.ashx",this.addspecificfees="https://profesmsnewera.profeworld.com/api/admin/add/addspecificfees.ashx",this.addfeespayment="https://profesmsnewera.profeworld.com/api/admin/add/addfeespayment.ashx",this.addstudent="https://profesmsnewera.profeworld.com/api/admin/add/addstudent.ashx",this.addteacher="https://profesmsnewera.profeworld.com/api/admin/add/addstaff.ashx",this.addparent="https://profesmsnewera.profeworld.com/api/admin/add/addparent.ashx",this.addadmin="https://profesmsnewera.profeworld.com/api/admin/add/addadmin.ashx",this.sampledelete="assets/json/testapi/selectdelete.json",this.deleteonlinequiz="https://mystudyappapi.profeworld.com/mainapi/adminlogic/deletequizonline.ashx",this.generatepdf="https://testucheapi.profeworld.com/generatepdf",this.smsgateway="https://portal.nigeriabulksms.com/api/",this.smsgatewayb=" https://www.ipwebsms.com/components/com_spc/smsapi.php",this.userData=[],this.userid=1,this.apikey=1,this.numstudent=0,this.numparent=0,this.numteacher=0,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022",this.myinit()}myinit(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.getprofile()}))}getprofile(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield l.get({key:"userlogindetails"});null==e.value&&this.router.navigate(["login"]);const t=JSON.parse(e.value);console.log(t),this.userData=t,this.userid=t.userdata[0].studentid,this.apikey=t.userdata[0].token}))}syncprofile(){return Object(i.a)(this,void 0,void 0,(function*(){var e=JSON.stringify({adminid:this.userid,apikey:this.apikey});yield this.http.post(this.adminsync,e).subscribe(e=>Object(i.a)(this,void 0,void 0,(function*(){console.log(e),100!=e.statuscode&&this.presentToast(e.status),100==e.statuscode&&(yield l.set({key:"userlogindetails",value:JSON.stringify(e)}))})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}gethomedataprofile(){return Object(i.a)(this,void 0,void 0,(function*(){JSON.stringify({adminid:this.userid,apikey:this.apikey}),yield this.http.get(this.homedata).subscribe(e=>Object(i.a)(this,void 0,void 0,(function*(){console.log(e),100!=e.statuscode&&this.presentToast(e.status),100==e.statuscode&&(this.numstudent=e.post[0].totalstudent,this.numteacher=e.post[0].totalteacher,this.numparent=e.post[0].totalparent,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022")})),e=>{console.log(e),this.presentToast("Unable to connect to the Internet")})}))}presentToast(e){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,duration:2e3})).present()}))}getdaynum(e){var t=new Date;return t.setDate(t.getDate()+e),["Sun","Mon","Tue","wed","Thu","Fri","Sat"][t.getDay()]}formatDate(e){var t=new Date(e),s=""+(t.getMonth()+1),i=""+t.getDate(),o=t.getFullYear();return s.length<2&&(s="0"+s),i.length<2&&(i="0"+i),[o,s,i].join("-")}mydatestring(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}returndatetimestr(e){var t,s,i,o,a=new Date(e);return t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(e){var t,s,i=new Date(e);return console.log(i),t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(e){var t=new Date(e);return console.log(t),t}realmoney(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}genrateuuid(){var e=new Date,t=this.userid+"-"+e.getUTCFullYear()+e.getUTCMonth()+e.getUTCDay()+e.getUTCHours()+e.getUTCMinutes()+e.getUTCSeconds()+e.getUTCMilliseconds();return 1e7+Math.round(7e7*Math.random())+"-"+t}goback(){}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(n.M),a.Qb(n.I),a.Qb(n.J),a.Qb(r.a),a.Qb(d.f),a.Qb(n.H))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);