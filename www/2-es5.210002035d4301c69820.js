function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7Qqe":function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var a=s("mrSG"),r=s("fXoL"),i=s("TEn/"),n=s("tyNb"),o=s("tk/3"),u=s("jhN1"),p=s("3Pt+"),l=s("ofXK");function c(e,t){if(1&e&&(r.Mb(0,"option",7),r.oc(1),r.Lb()),2&e){var s=t.index,a=r.Wb();r.Zb("value",a.valuearray[s]),r.zb(1),r.qc(" ",a.titlearray[s]," ")}}var d=function(){var e=function(){function e(t,s,a,i,n,o,u,p){_classCallCheck(this,e),this.menuCtrl=t,this.alertController=s,this.navCtrl=a,this.toastController=i,this.router=n,this.httpClient=o,this.loadingController=u,this.sanitizer=p,this.apihost="",this.label="",this.catid="1",this.tagid="1",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype="1",this.apikey="",this.sortby="",this.pagenum=1,this.pagesize=50,this.showmainarticle=!0,this.delay=50,this.storagekey="goodscategory",this.selvalue="",this.headername="Select",this.apiurl="https://mystudyappapi.profeworld.com/mainapi/sitelogic/viewapi/viewvideos.ashx",this.titlename="title",this.valuename="videoid",this.titlearray=[],this.valuearray=[],this.reloadstarted=new r.n,this.reloadcompleted=new r.n,this.reloadcompletednull=new r.n,this.reloadfailure=new r.n,this.loadstarted=new r.n,this.loadcompleted=new r.n,this.loadcompletednull=new r.n,this.loadfailure=new r.n,this.getselectdvalue=new r.n,this.featurepost=[],this.newsite=!1,this.demopost=[1,2,3,4,5,6,7,8,9,10],this.category="0",this.slidefeature={initialSlide:0,slidesPerView:1,autoplay:!0,speed:400},this.loadinitialwithinitial()}return _createClass(e,[{key:"loadinitialwithinitial",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadinit();case 2:case"end":return e.stop()}}),e,this)})))}),10);case 1:case"end":return e.stop()}}),e)})))}},{key:"loadinit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadpost();case 2:case"end":return e.stop()}}),e,this)})))}),Number(this.delay));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){}},{key:"geturl",value:function(){return console.log(this.apiurl+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize),this.apiurl+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize}},{key:"loadpost",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadstarted.emit(),e.next=3,this.httpClient.get(this.geturl()).subscribe((function(e){t.featurepost=[],t.featurepost=e.post;for(var s=0;s<t.featurepost.length;s++)t.titlearray[s]=t.featurepost[s][t.titlename],t.valuearray[s]=t.featurepost[s][t.valuename];console.log(e.post),t.newsite=!0,t.loadcompleted.emit(),t.category=t.selvalue+"",99==e.statuscode&&t.loadcompletednull.emit()}),(function(e){console.log(e),t.loadfailure.emit()}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"reloadinit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reloadpost();case 2:case"end":return e.stop()}}),e,this)})))}),Number(this.delay));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"reloadpost",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.pagenum=1,this.reloadstarted.emit(),e.next=4,this.httpClient.get(this.geturl()).subscribe((function(e){t.featurepost=[],t.featurepost=e.post,console.log("success1"),t.newsite=!0,t.reloadcompleted.emit(),99==e.statuscode&&(t.reloadcompletednull.emit(),t.presentToast("No User Found"))}),(function(e){console.log(e),t.reloadfailure.emit()}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"refreshinit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshpost();case 2:case"end":return e.stop()}}),e,this)})))}),Number(this.delay));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"refreshpost",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.featurepost=[],this.pagenum=1,this.reloadstarted.emit(),e.next=5,this.httpClient.get(this.geturl()).subscribe((function(e){t.featurepost=[],t.featurepost=e.post,console.log("success1"),t.newsite=!0,t.reloadcompleted.emit(),99==e.statuscode&&(t.reloadcompletednull.emit(),t.presentToast("No User Found"))}),(function(e){console.log(e),t.reloadfailure.emit()}));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(e){var t=this;this.pagenum=Number(this.pagenum)+1,this.httpClient.get(this.geturl()).subscribe((function(s){100==s.statuscode&&(t.featurepost=t.featurepost.concat(s.post),e.target.complete()),t.featurepost.length<Number(t.pagesize)*Number(t.pagenum)&&(console.log("disabled"),e.target.disabled=!0,e.target.complete()),console.log("success")}),(function(e){console.log(e)}))}},{key:"toggleInfiniteScroll",value:function(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}},{key:"openpage",value:function(e){this.router.navigate(["userdetails/"+e])}},{key:"realmoney",value:function(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}},{key:"getselectedindex",value:function(){this.getselectdvalue.emit(this.category)}},{key:"mydatestring",value:function(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}},{key:"returndatetimestr",value:function(e){var t,s,a,r,i=new Date(e);return t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",a=i.getHours()<10?"0"+i.getHours():i.getHours(),r=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes(),console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()+"T"+a+":"+r+":00"),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()+"T"+a+":"+r+":00"}},{key:"returndatestr",value:function(e){var t,s,a=new Date(e);return console.log(a),t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()}},{key:"returnfulldatestr",value:function(e){var t=new Date(e);return console.log(t),t}},{key:"presentToast",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastController.create({message:e,duration:2e3});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"startloading",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:e});case 2:return this.loading=t.sent,t.next=5,this.loading.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"stoploading",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.dismiss();case 2:case"end":return e.stop()}}),e,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Jb(i.I),r.Jb(i.a),r.Jb(i.J),r.Jb(i.M),r.Jb(n.f),r.Jb(o.a),r.Jb(i.H),r.Jb(u.b))},e.\u0275cmp=r.Db({type:e,selectors:[["app-selectservercomp"]],viewQuery:function(e,t){var s;1&e&&r.mc(i.m,!0),2&e&&r.gc(s=r.Vb())&&(t.infiniteScroll=s.first)},inputs:{apihost:"apihost",label:"label",catid:"catid",tagid:"tagid",qstring:"qstring",qstringb:"qstringb",qstringc:"qstringc",qstringd:"qstringd",userid:"userid",postid:"postid",updatetype:"updatetype",apikey:"apikey",sortby:"sortby",pagenum:"pagenum",pagesize:"pagesize",showmainarticle:"showmainarticle",delay:"delay",storagekey:"storagekey",selvalue:"selvalue",headername:"headername",apiurl:"apiurl",titlename:"titlename",valuename:"valuename"},outputs:{reloadstarted:"reloadstarted",reloadcompleted:"reloadcompleted",reloadcompletednull:"reloadcompletednull",reloadfailure:"reloadfailure",loadstarted:"loadstarted",loadcompleted:"loadcompleted",loadcompletednull:"loadcompletednull",loadfailure:"loadfailure",getselectdvalue:"getselectdvalue"},decls:9,vars:4,consts:[[1,"w3-col"],[1,"w3-col",2,"padding","5px"],[1,"myinvert","w3-small","w3-center"],["name","txtcategory","placeholder","category of goods","value","","required","",1,"w3-input","w3-round-large","w3-border-0-dark-grey","bglight","w3-border","w3-small",2,"height","50px",3,"ngModel","change","ngModelChange"],["txtcategory","ngModel"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"span",2),r.oc(3),r.Lb(),r.Mb(4,"select",3,4),r.Ub("change",(function(){return t.getselectedindex()}))("ngModelChange",(function(e){return t.category=e})),r.Mb(6,"option",5),r.oc(7),r.Lb(),r.nc(8,c,2,2,"option",6),r.Lb(),r.Lb(),r.Lb()),2&e&&(r.zb(3),r.qc(" ",t.headername," "),r.zb(1),r.Zb("ngModel",t.category),r.zb(3),r.qc(" Select ",t.headername," "),r.zb(1),r.Zb("ngForOf",t.featurepost))},directives:[p.l,p.k,p.e,p.h,p.i,p.m,l.i],styles:[""]}),e}()},ZzJ7:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s("mrSG"),r=s("gcOT"),i=s("fXoL"),n=s("TEn/"),o=s("tk/3"),u=s("tyNb"),p=r.a.Storage,l=function(){var e=function(){function e(t,s,a,r,i,n){_classCallCheck(this,e),this.toastController=t,this.menuCtrl=s,this.navCtrl=a,this.http=r,this.router=i,this.loadingController=n,this.apiurl="",this.studentlogin="https://profesmsnewera.profeworld.com/api/student/auth/signinapi.ashx",this.adminlogin="https://profesmsnewera.profeworld.com/api/admin/auth/signinapi.ashx",this.adminsync="https://profesmsnewera.profeworld.com/api/admin/auth/viewadminprofile.ashx",this.homedata="https://profesmsnewera.profeworld.com/api/admin/view/viewadminhomedata.ashx",this.adminrole="assets/json/testapi/adminrole.json",this.viewstudentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstudent.ashx",this.vieteacherapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstaff.ashx",this.viewparentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewparent.ashx",this.viewsampleapi="assets/json/testapi/sample.json",this.viewclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewclass.ashx",this.viewsubclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsubclasses.ashx",this.viewclassaarmpi="https://profesmsnewera.profeworld.com/api/admin/view/viewclassesarm.ashx",this.viewcourseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewcourses.ashx",this.viewschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewgeneralfees.ashx",this.viewfeespaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewfeespayment.ashx",this.viewspecificschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewspecificfees.ashx",this.viewtransportrouteapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportroutes.ashx",this.viewtransportordersapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportorders.ashx",this.viewstockitemsapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockitem.ashx",this.viewstockpurchaseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchase.ashx",this.viewexpensesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpenses.ashx",this.viewstocksalesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksales.ashx",this.viewstockpurchasecartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchasecart.ashx",this.viewexpensescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpensescart.ashx",this.viewstocksalescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksalescart.ashx",this.viewsalarypaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarypayment.ashx",this.viewsalaryallowancedefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancedefault.ashx",this.viewsalaryallowancemodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancemodel.ashx",this.viewsalaryallowancepaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancepayment.ashx",this.viewsalarydeductiondefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductiondefault.ashx",this.viewsalarydeductionmodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionmodel.ashx",this.viewsalarydeductionpaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionpayment.ashx",this.viewblogpostapi="https://profesmsnewera.profeworld.com/api/admin/view/viewpost.ashx",this.viewvideosapi="https://profesmsnewera.profeworld.com/api/admin/view/viewvideo.ashx",this.vieweventapi="https://profesmsnewera.profeworld.com/api/admin/view/viewevents.ashx",this.viewtransactionapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransactiongeneral.ashx",this.viewresult="https://profesmsnewera.profeworld.com/api/admin/view/viewresult.ashx",this.studentreport="https://profesmsnewera.profeworld.com/api/admin/view/viewstudentclass.ashx",this.viewterm="assets/json/testapi/sessionterm.json",this.viewsession="assets/json/testapi/session.json",this.viewassignment="https://profesmsnewera.profeworld.com/api/admin/view/viewassignment.ashx",this.viewassignmentanswer="https://profesmsnewera.profeworld.com/api/admin/view/viewassignmentanswer.ashx",this.viewnote="https://profesmsnewera.profeworld.com/api/admin/view/viewnote.ashx",this.selectcountry="assets/json/testapi/selectcountry.json",this.selectbloodgroup="assets/json/testapi/selectbloodgroup.json",this.selectgender="assets/json/testapi/selectgender.json",this.selectcat="assets/json/testapi/studentcat.json",this.selectreligion="assets/json/testapi/selectreligion.json",this.selectstate="assets/json/testapi/selectstate.json",this.selectlga="assets/json/testapi/selectlga.json",this.statusstudent="assets/json/testapi/statusstudent.json",this.statusteacher="assets/json/testapi/statusteacher.json",this.statusparent="assets/json/testapi/statusparent.json",this.statusdebtors="assets/json/testapi/statusdebtors.json",this.onlinequiz="https://profesmsnewera.profeworld.com/api/admin/view/viewquiz.ashx",this.onlinequizresult="https://profesmsnewera.profeworld.com/api/admin/view/viewquizresult.ashx",this.addonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/addquiz.ashx",this.editonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/editquiz.ashx",this.quizbase="https://profesmsnewera.profeworld.com/files/quizfiles/",this.savequizeditorfile="https://profesmsnewera.profeworld.com/api/admin/add/savequizeditorfile.ashx",this.updatequizstatus="https://profesmsnewera.profeworld.com/api/admin/update/updatequizstatus.ashx",this.addquizscore="api/users/add/addquizresult.ashx",this.updateresultscore="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetscore.ashx",this.updateresultsheetbehaviour="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetbehaviour.ashx",this.updateresultsheetmeta="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetmeta.ashx",this.createresultsheet="https://profesmsnewera.profeworld.com/api/admin/add/createresultsheet.ashx",this.addgeneralfees="https://profesmsnewera.profeworld.com/api/admin/add/addgeneralfees.ashx",this.addspecificfees="https://profesmsnewera.profeworld.com/api/admin/add/addspecificfees.ashx",this.addfeespayment="https://profesmsnewera.profeworld.com/api/admin/add/addfeespayment.ashx",this.addstudent="https://profesmsnewera.profeworld.com/api/admin/add/addstudent.ashx",this.addteacher="https://profesmsnewera.profeworld.com/api/admin/add/addstaff.ashx",this.addparent="https://profesmsnewera.profeworld.com/api/admin/add/addparent.ashx",this.addadmin="https://profesmsnewera.profeworld.com/api/admin/add/addadmin.ashx",this.sampledelete="assets/json/testapi/selectdelete.json",this.deleteonlinequiz="https://mystudyappapi.profeworld.com/mainapi/adminlogic/deletequizonline.ashx",this.generatepdf="https://testucheapi.profeworld.com/generatepdf",this.smsgateway="https://portal.nigeriabulksms.com/api/",this.smsgatewayb=" https://www.ipwebsms.com/components/com_spc/smsapi.php",this.userData=[],this.userid=1,this.apikey=1,this.numstudent=0,this.numparent=0,this.numteacher=0,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022",this.myinit()}return _createClass(e,[{key:"myinit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getprofile();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"getprofile",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get({key:"userlogindetails"});case 2:null==(t=e.sent).value&&this.router.navigate(["login"]),s=JSON.parse(t.value),console.log(s),this.userData=s,this.userid=s.userdata[0].studentid,this.apikey=s.userdata[0].token;case 6:case"end":return e.stop()}}),e,this)})))}},{key:"syncprofile",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify({adminid:this.userid,apikey:this.apikey}),e.next=3,this.http.post(this.adminsync,t).subscribe((function(e){return Object(a.a)(s,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),100!=e.statuscode&&this.presentToast(e.status),t.t0=100==e.statuscode,!t.t0){t.next=6;break}return t.next=6,p.set({key:"userlogindetails",value:JSON.stringify(e)});case 6:case"end":return t.stop()}}),t,this)})))}),(function(e){console.log(e),s.presentToast("Unable to connect to the Internet")}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"gethomedataprofile",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.stringify({adminid:this.userid,apikey:this.apikey}),e.next=3,this.http.get(this.homedata).subscribe((function(e){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),100!=e.statuscode&&this.presentToast(e.status),100==e.statuscode&&(this.numstudent=e.post[0].totalstudent,this.numteacher=e.post[0].totalteacher,this.numparent=e.post[0].totalparent,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022");case 1:case"end":return t.stop()}}),t,this)})))}),(function(e){console.log(e),t.presentToast("Unable to connect to the Internet")}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"presentToast",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastController.create({message:e,duration:2e3});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"getdaynum",value:function(e){var t=new Date;return t.setDate(t.getDate()+e),["Sun","Mon","Tue","wed","Thu","Fri","Sat"][t.getDay()]}},{key:"formatDate",value:function(e){var t=new Date(e),s=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return s.length<2&&(s="0"+s),a.length<2&&(a="0"+a),[r,s,a].join("-")}},{key:"mydatestring",value:function(e){var t=new Date(e);return(t.getDate()<10?"0"+t.getDate():t.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getUTCMonth()]+"-"+t.getUTCFullYear()}},{key:"returndatetimestr",value:function(e){var t,s,a,r,i=new Date(e);return t=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",a=i.getHours()<10?"0"+i.getHours():i.getHours(),r=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes(),console.log(i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()+"T"+a+":"+r+":00"),i.getFullYear()+t+(i.getMonth()+1)+s+i.getDate()+"T"+a+":"+r+":00"}},{key:"returndatestr",value:function(e){var t,s,a=new Date(e);return console.log(a),t=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",console.log(a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()),a.getFullYear()+t+(a.getMonth()+1)+s+a.getDate()}},{key:"returnfulldatestr",value:function(e){var t=new Date(e);return console.log(t),t}},{key:"realmoney",value:function(e){return"\u20a6"+e.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}},{key:"genrateuuid",value:function(){var e=new Date,t=this.userid+"-"+e.getUTCFullYear()+e.getUTCMonth()+e.getUTCDay()+e.getUTCHours()+e.getUTCMinutes()+e.getUTCSeconds()+e.getUTCMilliseconds();return 1e7+Math.round(7e7*Math.random())+"-"+t}},{key:"goback",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(n.M),i.Qb(n.I),i.Qb(n.J),i.Qb(o.a),i.Qb(u.f),i.Qb(n.H))},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);