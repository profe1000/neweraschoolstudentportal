(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ZzJ7:function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var i=s("mrSG"),o=s("gcOT"),a=s("fXoL"),r=s("TEn/"),n=s("tk/3"),d=s("tyNb");const{Storage:l}=o.a;let p=(()=>{class t{constructor(t,e,s,i,o,a){this.toastController=t,this.menuCtrl=e,this.navCtrl=s,this.http=i,this.router=o,this.loadingController=a,this.apiurl="",this.studentlogin="https://profesmsnewera.profeworld.com/api/student/auth/signinapi.ashx",this.adminlogin="https://profesmsnewera.profeworld.com/api/admin/auth/signinapi.ashx",this.adminsync="https://profesmsnewera.profeworld.com/api/admin/auth/viewadminprofile.ashx",this.homedata="https://profesmsnewera.profeworld.com/api/admin/view/viewadminhomedata.ashx",this.adminrole="assets/json/testapi/adminrole.json",this.viewstudentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstudent.ashx",this.vieteacherapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstaff.ashx",this.viewparentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewparent.ashx",this.viewsampleapi="assets/json/testapi/sample.json",this.viewclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewclass.ashx",this.viewsubclassapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsubclasses.ashx",this.viewclassaarmpi="https://profesmsnewera.profeworld.com/api/admin/view/viewclassesarm.ashx",this.viewcourseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewcourses.ashx",this.viewschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewgeneralfees.ashx",this.viewfeespaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewfeespayment.ashx",this.viewspecificschoolfeesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewspecificfees.ashx",this.viewtransportrouteapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportroutes.ashx",this.viewtransportordersapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransportorders.ashx",this.viewstockitemsapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockitem.ashx",this.viewstockpurchaseapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchase.ashx",this.viewexpensesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpenses.ashx",this.viewstocksalesapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksales.ashx",this.viewstockpurchasecartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstockpurchasecart.ashx",this.viewexpensescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewexpensescart.ashx",this.viewstocksalescartapi="https://profesmsnewera.profeworld.com/api/admin/view/viewstocksalescart.ashx",this.viewsalarypaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarypayment.ashx",this.viewsalaryallowancedefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancedefault.ashx",this.viewsalaryallowancemodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancemodel.ashx",this.viewsalaryallowancepaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalaryallowancepayment.ashx",this.viewsalarydeductiondefaultapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductiondefault.ashx",this.viewsalarydeductionmodelapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionmodel.ashx",this.viewsalarydeductionpaymentapi="https://profesmsnewera.profeworld.com/api/admin/view/viewsalarydeductionpayment.ashx",this.viewblogpostapi="https://profesmsnewera.profeworld.com/api/admin/view/viewpost.ashx",this.viewvideosapi="https://profesmsnewera.profeworld.com/api/admin/view/viewvideo.ashx",this.vieweventapi="https://profesmsnewera.profeworld.com/api/admin/view/viewevents.ashx",this.viewtransactionapi="https://profesmsnewera.profeworld.com/api/admin/view/viewtransactiongeneral.ashx",this.viewresult="https://profesmsnewera.profeworld.com/api/admin/view/viewresult.ashx",this.studentreport="https://profesmsnewera.profeworld.com/api/admin/view/viewstudentclass.ashx",this.viewterm="assets/json/testapi/sessionterm.json",this.viewsession="assets/json/testapi/session.json",this.viewassignment="https://profesmsnewera.profeworld.com/api/admin/view/viewassignment.ashx",this.viewassignmentanswer="https://profesmsnewera.profeworld.com/api/admin/view/viewassignmentanswer.ashx",this.viewnote="https://profesmsnewera.profeworld.com/api/admin/view/viewnote.ashx",this.selectcountry="assets/json/testapi/selectcountry.json",this.selectbloodgroup="assets/json/testapi/selectbloodgroup.json",this.selectgender="assets/json/testapi/selectgender.json",this.selectcat="assets/json/testapi/studentcat.json",this.selectreligion="assets/json/testapi/selectreligion.json",this.selectstate="assets/json/testapi/selectstate.json",this.selectlga="assets/json/testapi/selectlga.json",this.statusstudent="assets/json/testapi/statusstudent.json",this.statusteacher="assets/json/testapi/statusteacher.json",this.statusparent="assets/json/testapi/statusparent.json",this.statusdebtors="assets/json/testapi/statusdebtors.json",this.onlinequiz="https://profesmsnewera.profeworld.com/api/admin/view/viewquiz.ashx",this.onlinequizresult="https://profesmsnewera.profeworld.com/api/admin/view/viewquizresult.ashx",this.addonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/addquiz.ashx",this.editonlinequiz="https://profesmsnewera.profeworld.com/api/admin/add/editquiz.ashx",this.quizbase="https://profesmsnewera.profeworld.com/files/quizfiles/",this.savequizeditorfile="https://profesmsnewera.profeworld.com/api/admin/add/savequizeditorfile.ashx",this.updatequizstatus="https://profesmsnewera.profeworld.com/api/admin/update/updatequizstatus.ashx",this.addquizscore="api/users/add/addquizresult.ashx",this.updateresultscore="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetscore.ashx",this.updateresultsheetbehaviour="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetbehaviour.ashx",this.updateresultsheetmeta="https://profesmsnewera.profeworld.com/api/admin/update/updateresultsheetmeta.ashx",this.createresultsheet="https://profesmsnewera.profeworld.com/api/admin/add/createresultsheet.ashx",this.addgeneralfees="https://profesmsnewera.profeworld.com/api/admin/add/addgeneralfees.ashx",this.addspecificfees="https://profesmsnewera.profeworld.com/api/admin/add/addspecificfees.ashx",this.addfeespayment="https://profesmsnewera.profeworld.com/api/admin/add/addfeespayment.ashx",this.addstudent="https://profesmsnewera.profeworld.com/api/admin/add/addstudent.ashx",this.addteacher="https://profesmsnewera.profeworld.com/api/admin/add/addstaff.ashx",this.addparent="https://profesmsnewera.profeworld.com/api/admin/add/addparent.ashx",this.addadmin="https://profesmsnewera.profeworld.com/api/admin/add/addadmin.ashx",this.sampledelete="assets/json/testapi/selectdelete.json",this.deleteonlinequiz="https://mystudyappapi.profeworld.com/mainapi/adminlogic/deletequizonline.ashx",this.generatepdf="https://testucheapi.profeworld.com/generatepdf",this.smsgateway="https://portal.nigeriabulksms.com/api/",this.smsgatewayb=" https://www.ipwebsms.com/components/com_spc/smsapi.php",this.userData=[],this.userid=1,this.apikey=1,this.numstudent=0,this.numparent=0,this.numteacher=0,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022",this.myinit()}myinit(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.getprofile()}))}getprofile(){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield l.get({key:"userlogindetails"});null==t.value&&this.router.navigate(["login"]);const e=JSON.parse(t.value);console.log(e),this.userData=e,this.userid=e.userdata[0].studentid,this.apikey=e.userdata[0].token}))}syncprofile(){return Object(i.a)(this,void 0,void 0,(function*(){var t=JSON.stringify({adminid:this.userid,apikey:this.apikey});yield this.http.post(this.adminsync,t).subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){console.log(t),100!=t.statuscode&&this.presentToast(t.status),100==t.statuscode&&(yield l.set({key:"userlogindetails",value:JSON.stringify(t)}))})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}gethomedataprofile(){return Object(i.a)(this,void 0,void 0,(function*(){JSON.stringify({adminid:this.userid,apikey:this.apikey}),yield this.http.get(this.homedata).subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){console.log(t),100!=t.statuscode&&this.presentToast(t.status),100==t.statuscode&&(this.numstudent=t.post[0].totalstudent,this.numteacher=t.post[0].totalteacher,this.numparent=t.post[0].totalparent,this.presentterm=1,this.presentsession=2,this.presenttermname="1ST",this.presentsessionname="2021/2022")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}presentToast(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3})).present()}))}getdaynum(t){var e=new Date;return e.setDate(e.getDate()+t),["Sun","Mon","Tue","wed","Thu","Fri","Sat"][e.getDay()]}formatDate(t){var e=new Date(t),s=""+(e.getMonth()+1),i=""+e.getDate(),o=e.getFullYear();return s.length<2&&(s="0"+s),i.length<2&&(i="0"+i),[o,s,i].join("-")}mydatestring(t){var e=new Date(t);return(e.getDate()<10?"0"+e.getDate():e.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getUTCMonth()]+"-"+e.getUTCFullYear()}returndatetimestr(t){var e,s,i,o,a=new Date(t);return e=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+e+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+e+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(t){var e,s,i=new Date(t);return console.log(i),e=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+e+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+e+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(t){var e=new Date(t);return console.log(e),e}realmoney(t){return"\u20a6"+t.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}genrateuuid(){var t=new Date,e=this.userid+"-"+t.getUTCFullYear()+t.getUTCMonth()+t.getUTCDay()+t.getUTCHours()+t.getUTCMinutes()+t.getUTCSeconds()+t.getUTCMilliseconds();return 1e7+Math.round(7e7*Math.random())+"-"+e}goback(){}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(r.M),a.Qb(r.I),a.Qb(r.J),a.Qb(n.a),a.Qb(d.f),a.Qb(r.H))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},o6g2:function(t,e,s){"use strict";s.r(e),s.d(e,"SchoolblogPageModule",(function(){return D}));var i=s("ofXK"),o=s("3Pt+"),a=s("TEn/"),r=s("tyNb"),n=s("mrSG"),d=s("gcOT"),l=s("fXoL"),p=s("tk/3"),h=s("ZzJ7"),c=s("jhN1");function u(t,e){if(1&t&&(l.Mb(0,"span"),l.Mb(1,"b"),l.oc(2," \xa0 \xa0"),l.Mb(3,"ion-text",7),l.oc(4),l.Lb(),l.Lb(),l.Lb()),2&t){const t=l.Wb(2);l.zb(4),l.qc(" ",t.label," ")}}function m(t,e){if(1&t&&(l.Mb(0,"div",4),l.nc(1,u,5,1,"span",2),l.Mb(2,"div",5),l.Kb(3,"br"),l.Kb(4,"br"),l.Kb(5,"br"),l.Kb(6,"ion-spinner",6),l.Lb(),l.Lb()),2&t){const t=l.Wb();l.zb(1),l.Zb("ngIf",""!=t.label)}}function w(t,e){if(1&t){const t=l.Nb();l.Mb(0,"div",10),l.Mb(1,"ion-thumbnail",11),l.Kb(2,"Img",12),l.Lb(),l.Mb(3,"p"),l.Mb(4,"ion-card-title",13),l.Mb(5,"b"),l.oc(6),l.Lb(),l.Lb(),l.Kb(7,"br"),l.Mb(8,"select",14),l.Ub("change",(function(s){l.ic(t);const i=e.index;return l.Wb(2).showslectedoption(i,s)})),l.Mb(9,"option",15),l.oc(10," Select Option"),l.Lb(),l.Mb(11,"option",16),l.oc(12," Edit Post"),l.Lb(),l.Mb(13,"option",17),l.oc(14," View Post "),l.Lb(),l.Mb(15,"option",18),l.oc(16," Delete Post "),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&t){const t=e.$implicit;l.zb(2),l.ac("src",t.imagefile,l.kc),l.zb(4),l.qc(" ",t.title," ")}}function g(t,e){if(1&t&&(l.Mb(0,"div",8),l.nc(1,w,17,2,"div",9),l.Lb()),2&t){const t=l.Wb();l.zb(1),l.Zb("ngForOf",t.featurepost)}}function f(t,e){1&t&&(l.Mb(0,"div"),l.Mb(1,"div",19),l.Kb(2,"img",20),l.Mb(3,"h3",21),l.oc(4," No Record Found "),l.Lb(),l.Mb(5,"p",21),l.oc(6," No Record was found, you can Add new Record or change your search parameter. "),l.Kb(7,"br"),l.Kb(8,"br"),l.Lb(),l.Mb(9,"p",22),l.Kb(10,"br"),l.Mb(11,"a",23),l.oc(12," Home "),l.Lb(),l.Lb(),l.Lb(),l.Lb())}function b(t,e){if(1&t){const t=l.Nb();l.Mb(0,"div"),l.Mb(1,"div",19),l.Kb(2,"img",24),l.Mb(3,"h3",21),l.oc(4," No Network Connection "),l.Lb(),l.Mb(5,"p",21),l.oc(6," Connect to the Internet and try again Later "),l.Kb(7,"br"),l.Kb(8,"br"),l.Lb(),l.Mb(9,"p"),l.Kb(10,"br"),l.Mb(11,"a",25),l.Ub("click",(function(){return l.ic(t),l.Wb().loadpost()})),l.oc(12," Retry "),l.Lb(),l.Lb(),l.Lb(),l.Lb()}}function v(t,e){if(1&t){const t=l.Nb();l.Mb(0,"div",26),l.Mb(1,"ion-infinite-scroll",27),l.Ub("ionInfinite",(function(e){return l.ic(t),l.Wb().loadData(e)})),l.Kb(2,"ion-infinite-scroll-content",28),l.Lb(),l.Lb()}}const{Storage:y}=d.a;let x=(()=>{class t{constructor(t,e,s,i,o,a,r,n,d){this.generalservice=t,this.menuCtrl=e,this.alertController=s,this.navCtrl=i,this.toastController=o,this.router=a,this.httpClient=r,this.loadingController=n,this.sanitizer=d,this.apihost="",this.label="",this.catid="1",this.tagid="1",this.qstring="",this.qstringb="",this.qstringc="",this.qstringd="",this.userid="",this.postid="",this.updatetype="1",this.apikey="",this.sortby="",this.pagenum=1,this.pagesize=20,this.showmainarticle=!0,this.delay=50,this.storagekey="students",this.disablepager=!1,this.reloadstarted=new l.n,this.reloadcompleted=new l.n,this.reloadcompletednull=new l.n,this.reloadfailure=new l.n,this.loadstarted=new l.n,this.loadcompleted=new l.n,this.loadcompletednull=new l.n,this.loadfailure=new l.n,this.loadeditfunction=new l.n,this.loadorderdespatch=new l.n,this.loadordermessage=new l.n,this.featurepost=[],this.newsite=!1,this.demopost=[1,2,3,4,5,6,7,8,9,10],this.slidefeature={initialSlide:0,slidesPerView:1,autoplay:!0,speed:400},this.studentstatus=["<span class='w3-text-orange w3-round'> Pending </span>","<span class='w3-text-green  w3-round'> Active  </span>","<span class='w3-text-blue  w3-round'> Graduated </span>","<span class='w3-text-pale-green  w3-round'> Archive </span>","<span class='w3-text-red'> Deleted </span>"],this.paymentstatus=["Not Paid","Paid"],this.orderfilter="0",this.orderfiltername="All Students",this.orderfilternamearray=["All Students","Pending Orders","Confirm Orders","Transist Orders","Delivered Orders","Rejected Orders"],this.orderfilterupdatetype=["1","2","3","4","5","6"],this.shownodata=!0,this.shownoconnection=!0,this.connectionstatuscode=0,this.loadinitialwithinitial()}loadinitialwithinitial(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.loadinit()})),10)}))}loadinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.loadpost(),this.disablepager&&this.toggleInfiniteScroll()})),Number(this.delay))}))}ngOnInit(){}updatepostview(){this.pagenum=1,this.featurepost=[],this.orderfiltername=this.orderfilternamearray[this.orderfilter],this.refreshpost()}geturl(){return console.log(this.generalservice.apiurl+this.generalservice.viewblogpostapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize),this.generalservice.apiurl+this.generalservice.viewblogpostapi+"?updatetype="+this.updatetype+"&userid="+this.userid+"&postid="+this.postid+"&qstring="+this.qstring+"&qstringb="+this.qstringb+"&qstringc="+this.qstringc+"&qstringd="+this.qstringd+"&pageNum="+this.pagenum+"&pageSize="+this.pagesize}loadpost(){return Object(n.a)(this,void 0,void 0,(function*(){this.connectionstatuscode=0,this.loadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log(t.post),this.newsite=!0,100==t.statuscode&&(this.loadcompleted.emit(),this.connectionstatuscode=1),100!=t.statuscode)return this.loadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.loadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}reloadinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.reloadpost()})),Number(this.delay))}))}reloadpost(){return Object(n.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(t){}this.pagenum=1,this.reloadstarted.emit(),yield this.httpClient.get(this.geturl()).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==t.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}refreshinit(){return Object(n.a)(this,void 0,void 0,(function*(){setTimeout(()=>Object(n.a)(this,void 0,void 0,(function*(){yield this.refreshpost()})),Number(this.delay))}))}refreshpost(){return Object(n.a)(this,void 0,void 0,(function*(){try{document.getElementById("myinfinitescroll").disabled=!1}catch(t){}this.featurepost=[],this.pagenum=1,this.reloadstarted.emit(),this.connectionstatuscode=0,yield this.httpClient.get(this.geturl()).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){if(this.featurepost=[],this.featurepost=t.post,console.log("success1"),this.newsite=!0,this.reloadcompleted.emit(),this.connectionstatuscode=1,99==t.statuscode)return this.reloadcompletednull.emit(),void(this.shownodata&&(this.connectionstatuscode=2));yield y.set({key:this.storagekey,value:JSON.stringify(this.featurepost)})})),t=>{console.log(t),this.reloadfailure.emit(),this.shownoconnection&&(this.connectionstatuscode=3)})}))}loadsyncpost(){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield y.get({key:this.storagekey});if(null==t.value)return;const e=JSON.parse(t.value);console.log(e),this.featurepost=e,this.connectionstatuscode=1}))}loadData(t){this.pagenum=Number(this.pagenum)+1,this.httpClient.get(this.geturl()).subscribe(e=>{100==e.statuscode&&(this.featurepost=this.featurepost.concat(e.post),t.target.complete()),this.featurepost.length<Number(this.pagesize)*Number(this.pagenum)&&(console.log("disabled"),t.target.disabled=!0,t.target.complete()),console.log("success")},t=>{console.log(t)})}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}openpage(t){this.router.navigate(["userdetails/"+t])}realmoney(t){return"\u20a6"+t.toLocaleString("en-US",{style:"currency",currency:"USD"}).replace("$","")}mydatestring(t){var e=new Date(t);return(e.getDate()<10?"0"+e.getDate():e.getDate()+"")+"-"+["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getUTCMonth()]+"-"+e.getUTCFullYear()}returndatetimestr(t){var e,s,i,o,a=new Date(t);return e=a.getMonth()+1<10?"-0":"-",s=a.getDate()<10?"-0":"-",i=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),console.log(a.getFullYear()+e+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"),a.getFullYear()+e+(a.getMonth()+1)+s+a.getDate()+"T"+i+":"+o+":00"}returndatestr(t){var e,s,i=new Date(t);return console.log(i),e=i.getMonth()+1<10?"-0":"-",s=i.getDate()<10?"-0":"-",console.log(i.getFullYear()+e+(i.getMonth()+1)+s+i.getDate()),i.getFullYear()+e+(i.getMonth()+1)+s+i.getDate()}returnfulldatestr(t){var e=new Date(t);return console.log(e),e}presentToast(t){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3})).present()}))}showslectedoption(t,e){1==e.target.value?this.loadmyeditfunction(t):2==e.target.value?alert("View student function not ready"):3==e.target.value?alert("Delete student function not ready"):4==e.target.value?alert("Archived student function not ready"):5==e.target.value&&alert("Approved student function not ready")}opendelete(t){this.alertdeletepost(t)}alertdeletepost(t){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Cancel this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.deletefile(t)}}]});yield e.present()}))}deletefile(t){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=4;var e=JSON.stringify({storeorderid:this.featurepost[t].storeorderid,orderstatuscode:4,itemnum:4,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}openconfirm(t){this.alertconfirmorder(t)}alertconfirmorder(t){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to Confirm this order",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.confirmfile(t)}}]});yield e.present()}))}confirmfile(t){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=1;var e=JSON.stringify({storeorderid:this.featurepost[t].storeorderid,orderstatuscode:1,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}opentransist(t){this.alerttransistpost(t)}alerttransistpost(t){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure you want to move the order to transist",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.transistitem(t)}}]});yield e.present()}))}transistitem(t){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=2;var e=JSON.stringify({storeorderid:this.featurepost[t].storeorderid,orderstatuscode:2,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}opencompleteorder(t){this.aletcompletepost(t)}aletcompletepost(t){return Object(n.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Alert",subHeader:"",message:"Are You sure this order has been Delivered",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Okay",handler:()=>{this.completeitem(t)}}]});yield e.present()}))}completeitem(t){return Object(n.a)(this,void 0,void 0,(function*(){this.featurepost[t].orderstatus=3;var e=JSON.stringify({storeorderid:this.featurepost[t].storeorderid,orderstatuscode:3,itemnum:1,apikey:""});yield this.httpClient.post(this.generalservice.apiurl+"api/admin/update/updateorderstatus.ashx",e).subscribe(t=>Object(n.a)(this,void 0,void 0,(function*(){console.log(t),99!=t.statuscode&&this.presentToast("Unable to Update Order"),99==t.statuscode&&this.presentToast("Order Updated")})),t=>{console.log(t),this.presentToast("Unable to connect to the Internet")})}))}startloading(t){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=yield this.loadingController.create({message:t}),yield this.loading.present()}))}stoploading(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.loading.dismiss()}))}loadmyeditfunction(t){this.loadeditfunction.emit(this.featurepost[t].id)}loadmyorderdispatch(t){this.loadorderdespatch.emit(this.featurepost[t].storeorderid)}loadmyordermessage(t){this.loadordermessage.emit(this.featurepost[t].storeorderid)}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(h.a),l.Jb(a.I),l.Jb(a.a),l.Jb(a.J),l.Jb(a.M),l.Jb(r.f),l.Jb(p.a),l.Jb(a.H),l.Jb(c.b))},t.\u0275cmp=l.Db({type:t,selectors:[["app-viewposts"]],viewQuery:function(t,e){var s;1&t&&l.mc(a.m,!0),2&t&&l.gc(s=l.Vb())&&(e.infiniteScroll=s.first)},inputs:{apihost:"apihost",label:"label",catid:"catid",tagid:"tagid",qstring:"qstring",qstringb:"qstringb",qstringc:"qstringc",qstringd:"qstringd",userid:"userid",postid:"postid",updatetype:"updatetype",apikey:"apikey",sortby:"sortby",pagenum:"pagenum",pagesize:"pagesize",showmainarticle:"showmainarticle",delay:"delay",storagekey:"storagekey",disablepager:"disablepager",shownodata:"shownodata",shownoconnection:"shownoconnection"},outputs:{reloadstarted:"reloadstarted",reloadcompleted:"reloadcompleted",reloadcompletednull:"reloadcompletednull",reloadfailure:"reloadfailure",loadstarted:"loadstarted",loadcompleted:"loadcompleted",loadcompletednull:"loadcompletednull",loadfailure:"loadfailure",loadeditfunction:"loadeditfunction",loadorderdespatch:"loadorderdespatch",loadordermessage:"loadordermessage"},decls:5,vars:5,consts:[["id","loader",4,"ngIf"],["style","margin-bottom: 10px; margin-top: 10px","id","news",4,"ngIf"],[4,"ngIf"],["class","w3-col l12 s12 m12",4,"ngIf"],["id","loader"],[1,"w3-center"],["color","primary",2,"zoom","2"],[2,"font-size","16px"],["id","news",2,"margin-bottom","10px","margin-top","10px"],["style","padding:3px","class","w3-col l12 s12",4,"ngFor","ngForOf"],[1,"w3-col","l12","s12",2,"padding","3px"],["slot","start",2,"height","80px","width","80px"],[2,"height","80px","width","80px",3,"src"],[1,"w3-margin-top",2,"font-size","20px"],[1,"w3-centered","w3-input","w3-primay","w3-round-large","w3-small","w3-border-0-dark-grey","w3-border",2,"width","150px","max-width","100%",3,"change"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"w3-col","l12","s12","m12","w3-card-0","w3-border","w3-center","w3-white","w3-margin-top","w3-margin-bottom","w3-round-xlarge",2,"height","350px"],["src","assets/images/nodata.png",2,"height","120px","max-width","100%"],[1,"myfont1"],[1,"w3-hide"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px"],["src","assets/images/nonetwork.png",2,"height","120px","max-width","100%"],[1,"w3-btn","w3-round-large","w3-primary",2,"width","80px",3,"click"],[1,"w3-col","l12","s12","m12"],["threshold","100px","id","myinfinitescroll",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more..."]],template:function(t,e){1&t&&(l.nc(0,m,7,1,"div",0),l.nc(1,g,2,1,"div",1),l.nc(2,f,13,0,"div",2),l.nc(3,b,13,0,"div",2),l.nc(4,v,3,0,"div",3)),2&t&&(l.Zb("ngIf",0==e.connectionstatuscode),l.zb(1),l.Zb("ngIf",1==e.connectionstatuscode),l.zb(1),l.Zb("ngIf",2==e.connectionstatuscode),l.zb(1),l.Zb("ngIf",3==e.connectionstatuscode),l.zb(1),l.Zb("ngIf",1==e.connectionstatuscode))},directives:[i.j,a.w,a.B,i.i,a.C,a.g,o.i,o.m,a.m,a.n],styles:[""]}),t})();const j=["appcont1"];function O(t,e){if(1&t){const t=l.Nb();l.Mb(0,"div",6),l.Mb(1,"app-viewposts",7),l.Ub("loadeditfunction",(function(e){return l.ic(t),l.Wb().showedit(e)})),l.Lb(),l.Lb()}}const{Storage:M}=d.a,q=[{path:"",component:(()=>{class t{constructor(t,e,s,i,o,a){this.toastController=t,this.menuCtrl=e,this.navCtrl=s,this.http=i,this.router=o,this.loadingController=a,this.showsearch=!1,this.showdate=!1,this.showverify=!1,this.qstring="",this.qstringb="",this.updatetype="1",this.displaytype=1,this.myinit()}ionViewDidEnter(){this.menuCtrl.enable(!0),document.title="Student - My school Portal"}ngOnInit(){}myinit(){return Object(n.a)(this,void 0,void 0,(function*(){}))}changedisplaypage(t){this.displaytype=t}getprofile(){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield M.get({key:"adminlogindetails"});null==t.value&&this.router.navigate(["login"]);const e=JSON.parse(t.value);console.log(e)}))}presentToast(t){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3})).present()}))}stopsearch(){this.toogleshowsearch(),this.qstring="",this.qstringb="",this.updatetype=1,this.appcont1.refreshinit()}startsearch(){this.toogleshowsearch(),this.qstring=this.mysearchstring,this.updatetype=3,this.appcont1.refreshinit()}toogleshowsearch(){this.showsearch=!this.showsearch}startshowverify(){this.showverify?(this.updatetype=1,this.appcont1.refreshinit()):(this.updatetype=8,this.appcont1.refreshinit()),this.showverify=!this.showverify}stopdate(){this.toogleshowdate(),this.qstring="",this.qstringb="",this.updatetype=1,this.appcont1.refreshinit(),this.appcont1.reloadpost()}startdate(){this.toogleshowdate(),this.qstring=this.mystartdate,this.qstringb=this.myenddate,this.updatetype=5,this.appcont1.refreshinit()}toogleshowdate(){this.showdate=!this.showdate}showedit(t){this.postid=t,this.changedisplaypage(3)}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(a.M),l.Jb(a.I),l.Jb(a.J),l.Jb(p.a),l.Jb(r.f),l.Jb(a.H))},t.\u0275cmp=l.Db({type:t,selectors:[["app-schoolblog"]],viewQuery:function(t,e){var s;1&t&&l.mc(j,!0),2&t&&l.gc(s=l.Vb())&&(e.appcont1=s.first)},decls:9,vars:1,consts:[[1,"w3-border-bottom","w3-card"],["slot","start"],[1,"myfont1"],[1,"w3-light-grey","w3-col",2,"min-height","100%"],[1,"w3-col","l12","s12","m12",2,"padding","2px"],["class","w3-col l12 s12 m12 w3-animate-left","style","padding:5px;",4,"ngIf"],[1,"w3-col","l12","s12","m12","w3-animate-left",2,"padding","5px"],[3,"loadeditfunction"]],template:function(t,e){1&t&&(l.Mb(0,"ion-toolbar",0),l.Mb(1,"ion-buttons",1),l.Kb(2,"ion-menu-button"),l.Lb(),l.Mb(3,"ion-title",2),l.oc(4," Blog Post "),l.Lb(),l.Lb(),l.Mb(5,"ion-content"),l.Mb(6,"div",3),l.Mb(7,"div",4),l.nc(8,O,2,0,"div",5),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.zb(8),l.Zb("ngIf",1==e.displaytype))},directives:[a.E,a.f,a.s,a.D,a.h,i.j,x],styles:[""]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(q)],r.i]}),t})();var k=s("j1ZV");let D=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.b,a.F,k.a,C]]}),t})()}}]);