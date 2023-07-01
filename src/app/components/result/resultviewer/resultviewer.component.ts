import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  LoadingController,
  AlertController,
  NavController,
  MenuController,
  IonInfiniteScroll,
} from "@ionic/angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ToastController } from "@ionic/angular";
import { async } from "@angular/core/testing";
import { GeneralserviceService } from "src/app/services/general/generalservice.service";

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";
import { environment, resultTypeDBId } from "src/environments/environment";

@Component({
  selector: "app-resultviewer",
  templateUrl: "./resultviewer.component.html",
  styleUrls: ["./resultviewer.component.scss"],
})
export class ResultviewerComponent implements OnInit {
  schoolName = environment.schoolName;
  schoolAddress = environment.schoolAddress;
  logourl = environment.remoteLogoUrl;
  sampleSignature = environment.sampleSignature;

  pdfMode = false;
  teachercomment: any;
  principalcomment: any;
  classname: any;

  catotal: any = 0;
  ca2total: any = 0;
  ca3total: any = 0;
  ca4total: any = 0;
  examtotal: any = 0;
  overalltotal: any = 0;
  averagescore: any = 0;

  totalcourses: any;
  numberofdistintion: any;
  numberoffail: any;
  numberofpass: any;

  distictionleast = 75;
  passleast = 40;
  failleast = 0;

  @Input() apihost: string = "";
  @Input() label: string = "";
  @Input() catid: string = "1";
  @Input() tagid: string = "1";
  @Input() qstring: string = "";
  @Input() qstringb: string = "";
  @Input() qstringc: string = "";
  @Input() qstringd: string = "";
  @Input() userid: string = "";
  @Input() postid: string = "";
  @Input() updatetype: string = "1";
  @Input() apikey: string = "";
  @Input() sortby: string = "";
  @Input() pagenum: Number = 1;
  @Input() pagesize: Number = 20;
  @Input() showmainarticle: Boolean = true;
  @Input() delay: Number = 50;
  @Input() storagekey: string = "result";
  @Input() disablepager: Boolean = false;

  @Output() reloadstarted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() reloadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() reloadfailure: EventEmitter<any> = new EventEmitter();

  @Output() loadstarted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompleted: EventEmitter<any> = new EventEmitter();
  @Output() loadcompletednull: EventEmitter<any> = new EventEmitter();
  @Output() loadfailure: EventEmitter<any> = new EventEmitter();

  UUID: any;
  connectionstatuscode = 0;
  featurepost: any = [];
  resultdata: any;
  newsite: Boolean = false;
  demopost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Input() shownodata: Boolean = true;
  @Input() shownoconnection: Boolean = true;
  startproceessing: Boolean = false;
  processingmsg: any;

  behaviourRatingKeys = [
    { key: 1, value: "Show minimal regard for observable trait" },
    { key: 2, value: "Acceptable level of observable trait" },
    { key: 3, value: "Maintains a high level of observable trait" },
    { key: 4, value: "Maintains an excellent degree of observable trait" },
  ];

  constructor(
    public generalservice: GeneralserviceService,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    public navCtrl: NavController,
    public toastController: ToastController,
    private router: Router,
    private httpClient: HttpClient,
    public loadingController: LoadingController,
    public sanitizer: DomSanitizer
  ) {
    this.loadinitialwithinitial();
  }

  async loadinitialwithinitial() {
    setTimeout(async () => {
      await this.loadinit();
    }, 10);
  }

  async loadinit() {
    setTimeout(async () => {
      await this.loadpost();
    }, Number(this.delay));
  }

  ngOnInit() {}

  geturl() {
    console.log(
      this.generalservice.apiurl +
        this.generalservice.viewresult +
        "?updatetype=" +
        this.updatetype +
        "&userid=" +
        this.userid +
        "&postid=" +
        this.postid +
        "&qstring=" +
        this.qstring +
        "&qstringb=" +
        this.qstringb +
        "&qstringc=" +
        this.qstringc +
        "&qstringd=" +
        this.qstringd +
        "&pageNum=" +
        this.pagenum +
        "&pageSize=" +
        this.pagesize +
        ""
    );
    let defaulturl =
      this.generalservice.apiurl +
      this.generalservice.viewresult +
      "?updatetype=" +
      this.updatetype +
      "&userid=" +
      this.userid +
      "&postid=" +
      this.postid +
      "&qstring=" +
      this.qstring +
      "&qstringb=" +
      this.qstringb +
      "&qstringc=" +
      this.qstringc +
      "&qstringd=" +
      this.qstringd +
      "&pageNum=" +
      this.pagenum +
      "&pageSize=" +
      this.pagesize +
      "";
    return defaulturl;
  }

  // Loading Function

  async loadpost() {
    this.connectionstatuscode = 0;
    this.loadstarted.emit();
    await this.httpClient.get(this.geturl()).subscribe(
      async (res) => {
        this.resultdata = res;
        this.featurepost = [];
        this.featurepost = res["post"];
        console.log(res);
        this.newsite = true;

        if (res["statuscode"] == 100) {
          this.loadcompleted.emit();
          this.connectionstatuscode = 1;
          this.calculatetotalscore();
        }

        if (res["statuscode"] != 100) {
          this.loadcompletednull.emit();
          if (this.shownodata) {
            this.connectionstatuscode = 2;
          }
          return;
        }

        await Storage.set({
          key: this.storagekey,
          value: JSON.stringify(this.featurepost),
        });
      },
      (err) => {
        console.log(err);
        this.loadfailure.emit();
        if (this.shownoconnection) {
          this.connectionstatuscode = 3;
        }
      }
    );
  }

  calculatetotalscore() {
    this.catotal = 0;
    this.ca2total = 0;
    this.ca3total = 0;
    this.ca4total = 0;
    this.examtotal = 0;
    this.overalltotal = 0;
    this.totalcourses = this.resultdata.post.length;
    this.numberofdistintion = 0;
    this.numberofpass = 0;
    this.numberoffail = 0;

    if (
      this.resultdata.postgrades[0].resulttypeid ===
        resultTypeDBId.nurseryResult ||
      this.resultdata.postgrades[0].resulttypeid === resultTypeDBId.basicResult
    ) {
      this.distictionleast = 80;
      this.passleast = 49;
    } else if (
      this.resultdata.postgrades[0].resulttypeid ===
      resultTypeDBId.juniorSecResult
    ) {
      this.distictionleast = 80;
      this.passleast = 45;
    } else if (
      this.resultdata.postgrades[0].resulttypeid ===
      resultTypeDBId.seniorSecondaryResult
    ) {
      this.distictionleast = 75;
      this.passleast = 40;
    }

    for (var i = 0; i < this.resultdata.post.length; i++) {
      if (
        this.resultdata.post[i].deletestatus == "false" ||
        this.resultdata.post[i].deletestatus == false
      ) {
        this.catotal = this.catotal + this.resultdata.post[i].ca;
        this.ca2total = this.ca2total + this.resultdata.post[i].ca2;
        this.ca3total = this.ca3total + this.resultdata.post[i].ca3;
        this.ca4total = this.ca4total + this.resultdata.post[i].ca4;
        this.examtotal = this.examtotal + this.resultdata.post[i].exam;
        this.overalltotal =
          this.overalltotal +
          (this.resultdata.post[i].ca +
            this.resultdata.post[i].ca2 +
            this.resultdata.post[i].ca3 +
            this.resultdata.post[i].exam);

        if (
          this.resultdata.post[i].ca +
            this.resultdata.post[i].ca2 +
            this.resultdata.post[i].ca3 +
            this.resultdata.post[i].exam >=
          this.distictionleast
        ) {
          this.numberofdistintion = this.numberofdistintion + 1;
        } else if (
          this.resultdata.post[i].ca +
            this.resultdata.post[i].ca2 +
            this.resultdata.post[i].ca3 +
            this.resultdata.post[i].exam >=
          this.passleast
        ) {
          this.numberofpass = this.numberofpass + 1;
        } else if (
          this.resultdata.post[i].ca +
            this.resultdata.post[i].ca2 +
            this.resultdata.post[i].ca3 +
            this.resultdata.post[i].exam >=
          this.failleast
        ) {
          this.numberoffail = this.numberoffail + 1;
        }
      } else {
        this.totalcourses = this.totalcourses - 1;
      }

      // Get the grade Index to return back to database for future reference
      this.resultdata.post[i].gradeid = this.getgradecompindex(
        this.resultdata.post[i].ca +
          this.resultdata.post[i].ca2 +
          this.resultdata.post[i].ca3 +
          this.resultdata.post[i].exam
      );
      //alert(this.resultdata.post[i].gradeid)
    }
    //alert( this.totalcourses)
    this.averagescore = (this.overalltotal / this.totalcourses).toFixed(2);
    //this.getgradecomp(62);
    //this.getgradeletter(2);
  }

  async reloadinit() {
    setTimeout(async () => {
      await this.reloadpost();
    }, Number(this.delay));
  }

  async reloadpost() {
    let infscr = document.getElementById(
      "myinfinitescroll"
    ) as HTMLIonInfiniteScrollElement;
    infscr.disabled = false;
    this.pagenum = 1;
    this.reloadstarted.emit();
    await this.httpClient.get(this.geturl()).subscribe(
      async (res) => {
        this.resultdata = res;
        this.featurepost = [];
        this.featurepost = res["post"];
        console.log("success1");
        this.newsite = true;
        this.reloadcompleted.emit();

        this.connectionstatuscode = 1;

        if (res["statuscode"] == 99) {
          this.reloadcompletednull.emit();
          if (this.shownodata) {
            this.connectionstatuscode = 2;
          }
          return;
        }

        await Storage.set({
          key: this.storagekey,
          value: JSON.stringify(this.featurepost),
        });
      },
      (err) => {
        console.log(err);
        this.reloadfailure.emit();
        if (this.shownoconnection) {
          this.connectionstatuscode = 3;
        }
      }
    );
  }

  async refreshinit() {
    setTimeout(async () => {
      await this.refreshpost();
    }, Number(this.delay));
  }

  async refreshpost() {
    let infscr = document.getElementById(
      "myinfinitescroll"
    ) as HTMLIonInfiniteScrollElement;
    infscr.disabled = false;
    this.featurepost = [];
    this.pagenum = 1;
    this.reloadstarted.emit();
    this.connectionstatuscode = 0;

    await this.httpClient.get(this.geturl()).subscribe(
      async (res) => {
        this.featurepost = [];
        this.featurepost = res["post"];
        this.resultdata = res;
        console.log("success1");
        this.newsite = true;
        this.reloadcompleted.emit();
        this.connectionstatuscode = 1;

        if (res["statuscode"] == 99) {
          this.reloadcompletednull.emit();
          if (this.shownodata) {
            this.connectionstatuscode = 2;
          }
          return;
        }

        await Storage.set({
          key: this.storagekey,
          value: JSON.stringify(this.featurepost),
        });
      },
      (err) => {
        console.log(err);
        this.reloadfailure.emit();
        if (this.shownoconnection) {
          this.connectionstatuscode = 3;
        }
      }
    );
  }

  //This use local storage we can upadte this with capacitor storage
  async loadsyncpost() {
    const ret = await Storage.get({ key: this.storagekey });
    if (ret.value == null) {
      return;
    }

    const val = JSON.parse(ret.value);
    console.log(val);
    this.featurepost = val;
    this.connectionstatuscode = 1;
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  // Finalize
  async proceed() {
    var obj = {
      apikey: "",
    };

    //Convert the obj to json string
    var jsonData = JSON.stringify(obj);

    this.startproceessing = true;
    this.loadstarted.emit();
    this.processingmsg = "";

    await this.httpClient
      .post(
        this.generalservice.apiurl + "api/admin/add/addstoreitem.ashx",
        jsonData
      )
      .subscribe(
        async (res) => {
          //Connection successful, once you read the data in res you use the status code to perform logic
          console.log(res);
          this.startproceessing = false;

          if (res["statuscode"] != 99) {
            this.presentToast(res["status"]);
            this.loadcompletednull.emit();
            this.processingmsg = res["status"];
          }

          if (res["statuscode"] == 99) {
            this.loadcompleted.emit();
            this.presentToast(res["status"]);
            this.processingmsg = res["status"];
          }
        },
        (err) => {
          //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
          console.log(err);
          this.startproceessing = false;
          this.loadfailure.emit();
          this.presentToast("Unable to connect to the Internet");
          this.processingmsg = "Unable to connect to the Internet";
        }
      );
  }

  // Update Score Sheet
  updatescoreca1($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }

    this.resultdata.post[index].ca = Number($event.target.value);
    this.calculatetotalscore();
  }

  updatescoreca2($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }

    this.resultdata.post[index].ca2 = Number($event.target.value);
    this.calculatetotalscore();
  }

  updatescoreca3($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }

    this.resultdata.post[index].ca3 = Number($event.target.value);
    this.calculatetotalscore();
  }

  updatescoreca4($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }

    this.resultdata.post[index].ca4 = Number($event.target.value);
    this.calculatetotalscore();
  }

  updatescoreexam($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }

    this.resultdata.post[index].exam = Number($event.target.value);
    this.calculatetotalscore();
  }

  updatebehaviour($event, index) {
    if ($event.target.value == "" || $event.target.value < 0) {
      alert("This Value cannot be less than 0");
      return;
    }
    this.resultdata.postbehaviour[index].score = Number($event.target.value);
  }

  getgradecomp(score) {
    for (var i = 0; i < this.resultdata.postgrades.length; i++) {
      if (
        this.resultdata.postgrades[i].minvalue <= score &&
        score <= this.resultdata.postgrades[i].maxvalue
      ) {
        //alert(this.resultdata.postgrades[i].grade + '-' + this.resultdata.postgrades[i].gradeid)
        return this.resultdata.postgrades[i].grade;
      }
    }
  }

  getgraderemark(score) {
    for (var i = 0; i < this.resultdata.postgrades.length; i++) {
      if (
        this.resultdata.postgrades[i].minvalue <= score &&
        score <= this.resultdata.postgrades[i].maxvalue
      ) {
        //alert(this.resultdata.postgrades[i].grade + '-' + this.resultdata.postgrades[i].gradeid)
        return this.resultdata.postgrades[i].graderemark;
      }
    }
  }

  getgradecompindex(score) {
    for (var i = 0; i < this.resultdata.postgrades.length; i++) {
      if (
        this.resultdata.postgrades[i].minvalue <= score &&
        score <= this.resultdata.postgrades[i].maxvalue
      ) {
        //alert(this.resultdata.postgrades[i].grade + '-' + this.resultdata.postgrades[i].gradeid)
        return this.resultdata.postgrades[i].gradeid;
      }
    }
  }

  getgradeletter(gradeindex) {
    for (var i = 0; i < this.resultdata.postgrades.length; i++) {
      if (this.resultdata.postgrades[i].gradeid == gradeindex) {
        //alert(this.resultdata.postgrades[i].grade)
        return this.resultdata.postgrades[i].grade;
      }
    }
  }

  //Result Prefix
  ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  //Automatical Update of score in the feature
  async updateitem($event, index) {
    if ($event.target.value == "" || $event.target.value < 1) {
      alert("The Qunatity cannot be null Less than 1");
      return;
    }

    this.featurepost[index].itemnum = $event.target.value;

    // the post obj
    var obj = {
      cartid: this.featurepost[index].cartid,
      userid: this.userid,
      itemnum: $event.target.value,
      apikey: "",
    };

    //alert(this.amount)

    //Convert the obj to json string
    var jsonData = JSON.stringify(obj);
    //this.startloading();

    await this.httpClient
      .post(
        this.generalservice.apiurl + "api/users/update/updatecart.ashx",
        jsonData
      )
      .subscribe(
        async (res) => {
          //Connection successful, once you read the data in res you use the status code to perform logic
          console.log(res);

          if (res["statuscode"] != 99) {
            this.presentToast("Unable to Update cart");
          }

          if (res["statuscode"] == 99) {
            //this.storage.set('logindetails', res);
            this.presentToast("Cart Updated");
          }

          //this.stoploading();
        },
        (err) => {
          //unable to connect to http request (likely error, you made mistake in the request or no active internet connection)
          console.log(err);
          //this.stoploading();
          this.presentToast("Unable to connect to the Internet");
        }
      );
  }

  async printresult() {
    //Printing the page
    const printContent = document.getElementById("print-section");
    const WindowPrt = window.open(
      "",
      "",
      "left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    //WindowPrt.close();

    return;
  }

  public async downloadAsPDF() {
    // Setting Pdf True Generate a Pdf Version of the print Page
    this.pdfMode = true;
    await new Promise((f) => setTimeout(f, 2000));

    const printContent = document.getElementById("print-section");
    console.log(printContent.innerHTML);
    var html = htmlToPdfmake(printContent.innerHTML, {
      imagesByReference: true,
      tableAutoSize: true,
    });
    const documentDefinition = {
      content: html.content,
      images: html.images,
    };
    console.log(documentDefinition);

    this.pdfMode = false;
    pdfMake.createPdf(documentDefinition).open();
  }
}
