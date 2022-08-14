import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {

  // Api Source.
  public  apiurl:string="";


  //Admin Auth
  
  public  studentlogin:string="http://localhost:24802/api/student/auth/signinapi.ashx";  


  public  adminlogin:string="http://localhost:24802/api/admin/auth/signinapi.ashx";  
  public  adminsync:string ="http://localhost:24802/api/admin/auth/viewadminprofile.ashx";
  public  homedata:string ="http://localhost:24802/api/admin/view/viewadminhomedata.ashx";

  public  adminrole:string="assets/json/testapi/adminrole.json"; 

  // Api Endpoints Views.
  public  viewstudentapi:string="http://localhost:24802/api/admin/view/viewstudent.ashx";  
  public  vieteacherapi:string="http://localhost:24802/api/admin/view/viewstaff.ashx";
  public  viewparentapi:string="http://localhost:24802/api/admin/view/viewparent.ashx";
  public  viewsampleapi:string="assets/json/testapi/sample.json";
  public  viewclassapi:string="http://localhost:24802/api/admin/view/viewclass.ashx";
  public  viewsubclassapi:string="http://localhost:24802/api/admin/view/viewsubclasses.ashx";
  public  viewclassaarmpi:string="http://localhost:24802/api/admin/view/viewclassesarm.ashx";
  public  viewcourseapi:string="http://localhost:24802/api/admin/view/viewcourses.ashx";
 
  public  viewschoolfeesapi:string="http://localhost:24802/api/admin/view/viewgeneralfees.ashx";  
  public  viewfeespaymentapi:string="http://localhost:24802/api/admin/view/viewfeespayment.ashx";  
  public  viewspecificschoolfeesapi:string="http://localhost:24802/api/admin/view/viewspecificfees.ashx";  

  
  public  viewtransportrouteapi:string="http://localhost:24802/api/admin/view/viewtransportroutes.ashx";  
  public  viewtransportordersapi:string="http://localhost:24802/api/admin/view/viewtransportorders.ashx"; 

  public  viewstockitemsapi:string="http://localhost:24802/api/admin/view/viewstockitem.ashx"; 
  public  viewstockpurchaseapi:string="http://localhost:24802/api/admin/view/viewstockpurchase.ashx";
  public  viewexpensesapi:string="http://localhost:24802/api/admin/view/viewexpenses.ashx"; 
  public  viewstocksalesapi:string="http://localhost:24802/api/admin/view/viewstocksales.ashx";

  
  public  viewstockpurchasecartapi:string="http://localhost:24802/api/admin/view/viewstockpurchasecart.ashx";
  public  viewexpensescartapi:string="http://localhost:24802/api/admin/view/viewexpensescart.ashx"; 
  public  viewstocksalescartapi:string="http://localhost:24802/api/admin/view/viewstocksalescart.ashx";


  public  viewsalarypaymentapi:string="http://localhost:24802/api/admin/view/viewsalarypayment.ashx";


  public  viewsalaryallowancedefaultapi:string="http://localhost:24802/api/admin/view/viewsalaryallowancedefault.ashx"; 
  public  viewsalaryallowancemodelapi:string="http://localhost:24802/api/admin/view/viewsalaryallowancemodel.ashx";
  public  viewsalaryallowancepaymentapi:string="http://localhost:24802/api/admin/view/viewsalaryallowancepayment.ashx"; 
  public  viewsalarydeductiondefaultapi:string="http://localhost:24802/api/admin/view/viewsalarydeductiondefault.ashx";
  public  viewsalarydeductionmodelapi:string="http://localhost:24802/api/admin/view/viewsalarydeductionmodel.ashx"; 
  public  viewsalarydeductionpaymentapi:string="http://localhost:24802/api/admin/view/viewsalarydeductionpayment.ashx";

  
  public  viewblogpostapi:string="http://localhost:24802/api/admin/view/viewpost.ashx";
  public  viewvideosapi:string="http://localhost:24802/api/admin/view/viewvideo.ashx";
  public  vieweventapi:string="http://localhost:24802/api/admin/view/viewevents.ashx";
  public  viewtransactionapi:string="http://localhost:24802/api/admin/view/viewtransactiongeneral.ashx";


  public  viewresult:string="http://localhost:24802/api/admin/view/viewresult.ashx";
  public  studentreport:string="http://localhost:24802/api/admin/view/viewstudentclass.ashx";
  public  viewterm:string="assets/json/testapi/sessionterm.json";
  public  viewsession:string="assets/json/testapi/session.json";

  public  viewassignment:string="http://localhost:24802/api/admin/view/viewassignment.ashx";
  public  viewassignmentanswer:string="http://localhost:24802/api/admin/view/viewassignmentanswer.ashx";
  public  viewnote:string="http://localhost:24802/api/admin/view/viewnote.ashx";

  public  selectcountry:string="assets/json/testapi/selectcountry.json";  
  public  selectbloodgroup:string="assets/json/testapi/selectbloodgroup.json";
  public  selectgender:string="assets/json/testapi/selectgender.json";
  public  selectcat:string="assets/json/testapi/studentcat.json";
  public  selectreligion:string="assets/json/testapi/selectreligion.json";
  public  selectstate:string="assets/json/testapi/selectstate.json";
  public  selectlga:string="assets/json/testapi/selectlga.json";

  public  statusstudent:string="assets/json/testapi/statusstudent.json";
  public  statusteacher:string="assets/json/testapi/statusteacher.json";
  public  statusparent:string="assets/json/testapi/statusparent.json";
  public  statusdebtors:string="assets/json/testapi/statusdebtors.json";

  
  //Quiz Section
  public  onlinequiz:string="http://localhost:24802/api/admin/view/viewquiz.ashx";
  public  onlinequizresult:string="http://localhost:24802/api/admin/view/viewquizresult.ashx";
  public  addonlinequiz:string="http://localhost:24802/api/admin/add/addquiz.ashx";
  public  editonlinequiz:string="http://localhost:24802/api/admin/add/editquiz.ashx"; 
  public  quizbase:string="http://localhost:24802/files/quizfiles/";
  public  savequizeditorfile:string="http://localhost:24802/api/admin/add/savequizeditorfile.ashx";
  public  updatequizstatus:string="http://localhost:24802/api/admin/update/updatequizstatus.ashx";
  public  addquizscore:string="api/users/add/addquizresult.ashx";

  
  public deletevideo = "http://localhost:24802/api/admin/delete/deletevideo.ashx";


  
  //
  public  addassignmentanswerform:string="http://localhost:24802/api/student/add/addassignmentanswerform.ashx";


  //Result Manipulation
  public  updateresultscore:string="http://localhost:24802/api/admin/update/updateresultsheetscore.ashx";
  public  updateresultsheetbehaviour:string="http://localhost:24802/api/admin/update/updateresultsheetbehaviour.ashx";
  public  updateresultsheetmeta:string="http://localhost:24802/api/admin/update/updateresultsheetmeta.ashx";
  public  createresultsheet:string="http://localhost:24802/api/admin/add/createresultsheet.ashx";


  //Fees Manipulation 
  public  addgeneralfees:string="http://localhost:24802/api/admin/add/addgeneralfees.ashx";
  public  addspecificfees:string="http://localhost:24802/api/admin/add/addspecificfees.ashx";
  public  addfeespayment:string="http://localhost:24802/api/admin/add/addfeespayment.ashx";





  //Add Endpoint
  public  addstudent:string="http://localhost:24802/api/admin/add/addstudent.ashx";
  public  addteacher:string="http://localhost:24802/api/admin/add/addstaff.ashx";
  public  addparent:string="http://localhost:24802/api/admin/add/addparent.ashx";
  public  addadmin:string="http://localhost:24802/api/admin/add/addadmin.ashx";

  //Delete End point
  public sampledelete = "assets/json/testapi/selectdelete.json";
  public deleteonlinequiz:string="https://mystudyappapi.profeworld.com/mainapi/adminlogic/deletequizonline.ashx";

   //External API
   public generatepdf:string="https://testucheapi.profeworld.com/generatepdf";
   public  smsgateway:string="https://portal.nigeriabulksms.com/api/";
   public  smsgatewayb:string=" https://www.ipwebsms.com/components/com_spc/smsapi.php";
  


  public userData = [];
  public userid =1;
  public apikey =1;

  public numstudent=0;
  public numparent=0;
  public numteacher=0;

  public presentterm=1;
  public presentsession = 2;

  public presenttermname ="1ST"
  public presentsessionname ="2021/2022"

  public subclassid="";


  constructor(public toastController: ToastController,public menuCtrl: MenuController,public navCtrl: NavController,public http: HttpClient, private router: Router, public loadingController: LoadingController) {
    this.myinit();
  }

  async myinit(){
    //alert(1)
    await this.getprofile();
    //await this.syncprofile();
    //await this.gethomedataprofile();
   }
  
   async getprofile(){
  
    const ret = await Storage.get({ key: 'userlogindetails'});
    if (ret.value == null){
      this.router.navigate(["login"]);
    }
    const val = JSON.parse(ret.value);
    console.log(val)
    this.userData = val;
    this.userid= val["userdata"][0]["studentid"];
    //alert(val["userdata"][0]["subclassid"])
    this.subclassid=val["userdata"][0]["subclassid"];
    //this.userid = 77;
    this.apikey =  val["userdata"][0]["token"];
   }
  
  
   async syncprofile(){
    
    var obj = {
      "adminid":this.userid,
      "apikey":this.apikey
            };

    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
    await this.http
       .post(this.adminsync,jsonData)
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
  
      if (res["statuscode"]!= 100){
        this.presentToast(res["status"]);
     }
    
     if (res["statuscode"]== 100){
       //this.storage.set('logindetails', res);
       await Storage.set({
         key: 'userlogindetails',
         value: JSON.stringify(res)
       });
  
      }
       
       }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
        this.presentToast("Unable to connect to the Internet")
       });
   }


   async gethomedataprofile(){
    
    var obj = {
      "adminid":this.userid,
      "apikey":this.apikey
            };

  
    
    //Convert the obj to json string
   var jsonData = JSON.stringify(obj);
  
    await this.http
       .get(this.homedata)
       .subscribe(async res => {
          //Connection successful, once you read the data in res you use the status code to perform logic
         console.log(res);
  
          
      if (res["statuscode"]!= 100){
        this.presentToast(res["status"]);
     }
    
     if (res["statuscode"]== 100){
         this.numstudent =  res["post"][0]["totalstudent"] 
         this.numteacher =  res["post"][0]["totalteacher"]
         this.numparent=  res["post"][0]["totalparent"] 
         this.presentterm=res["post"][0]["currentterm"];
         this.presentsession = res["post"][0]["currentsession"];
         this.presenttermname =res["post"][0]["currenttermname"]
         this.presentsessionname =res["post"][0]["currentsessionname"]
      }
       
       }, (err) => {
        //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
        console.log(err);
        this.presentToast("Unable to connect to the Internet")
       });
   }
  
   async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg ,
      duration: 2000
    });
    toast.present();
  }

    // Date manipulation
   // Date manipulation
   getdaynum(int){
    var dt = new Date();
    dt.setDate(dt.getDate() + int);
    var myday =  ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat']
    return  myday[dt.getDay()];
  }


  //Date convert
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

mydatestring(datestring){
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var day="";

  var d = new Date(datestring);

  
  if (d.getDate() < 10){
    day="0" +  d.getDate() +"";
  } else{
    day=  d.getDate() +"";
  }

  var n = day + "-"  + mS[d.getUTCMonth()] + "-"  + d.getUTCFullYear();
  return n; 
 }

 returndatetimestr(datestring){
  var mydate = new Date(datestring);
  var monthst, dayst, hr,mm;
  if((mydate.getMonth()+1) < 10){
    monthst=  "-0"
   } else{
    monthst= "-"
   }

   if(mydate.getDate() < 10){
    dayst=  "-0"
   } else{
    dayst=  "-"
   }

   if(mydate.getHours() < 10){
    hr=  "0" + mydate.getHours()
   } else{
    hr=  mydate.getHours()
   }

   
   if(mydate.getMinutes() < 10){
    mm=  "0" + mydate.getMinutes()
   } else{
    mm=  mydate.getMinutes()
   }


  //2020-05-17T01:00:00
  console.log(mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate()+ "T"+ hr +":" + mm + ":00" )
  return (mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate()+ "T"+ hr +":" + mm + ":00" )
}

returndatestr(datestring){
  var mydate = new Date(datestring);
  console.log(mydate)

 var monthst, dayst;

  if((mydate.getMonth()+1) < 10){
   monthst=  "-0"
  } else{
   monthst= "-"
  }

  if(mydate.getDate() < 10){
   dayst=  "-0"
  } else{
   dayst=  "-"
  }
 
  console.log(mydate.getFullYear()+ monthst + (mydate.getMonth()+1) + dayst+ mydate.getDate())
  return mydate.getFullYear()+ monthst +(mydate.getMonth()+1) + dayst + mydate.getDate();
}

returnfulldatestr(datestring){
  var mydate = new Date(datestring);
  console.log(mydate)
  return (mydate)
}

realmoney(amount){
  return "₦" + amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace("$","")
}


    //UUID
    genrateuuid()
    {
     var d = new Date();
     var n = this.userid + "-" +  d.getUTCFullYear() + ""  + d.getUTCMonth() + ""  + d.getUTCDay() + "" + d.getUTCHours() + "" + d.getUTCMinutes() + "" + d.getUTCSeconds() + "" +  d.getUTCMilliseconds();
     var randnumb = 10000000 + Math.round(Math.random() * 70000000);
     var guuid= randnumb+ "-" + n;
     return guuid
    }

    goback(){
      
    }

    
  

}
