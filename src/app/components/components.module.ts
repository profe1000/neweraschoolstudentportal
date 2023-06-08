import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./custompart/header/header.component";
import { FooterComponent } from "./custompart/footer/footer.component";

import { SetpasswordcompComponent } from "./profile/setpasswordcomp/setpasswordcomp.component";
import { SetprofilecompComponent } from "./profile/setprofilecomp/setprofilecomp.component";

import { UploaddpComponent } from "./profileupload/uploaddp/uploaddp.component";
import { UploadidComponent } from "./profileupload/uploadid/uploadid.component";
import { GesturebasicComponent } from "./gestures/gesturebasic/gesturebasic.component";
import { DownloadfileComponent } from "./downloadcomponent/downloadfile/downloadfile.component";
import { DownloadlistComponent } from "./downloadcomponent/downloadlist/downloadlist.component";
import { DownloadprogressComponent } from "./downloadcomponent/downloadprogress/downloadprogress.component";
import { DownloadviewerComponent } from "./downloadcomponent/downloadviewer/downloadviewer.component";
import { GeneraluploadComponent } from "./profileupload/generalupload/generalupload.component";
import { GeneraldownloadComponent } from "./downloadcomponent/generaldownload/generaldownload.component";
import { GeneraluploadimageComponent } from "./profileupload/generaluploadimage/generaluploadimage.component";
import { GeneraluploadimagemultipleComponent } from "./profileupload/generaluploadimagemultiple/generaluploadimagemultiple.component";
import { SelectservercompComponent } from "./profileupload/selectservercomp/selectservercomp.component";
import { QuizeditorComponent } from "./quizcomp/quizeditor/quizeditor.component";
import { QuizviewerComponent } from "./quizcomp/quizviewer/quizviewer.component";
import { QuizviewergameComponent } from "./quizcomp/quizviewergame/quizviewergame.component";
import { QuizviewerstudyComponent } from "./quizcomp/quizviewerstudy/quizviewerstudy.component";
import { NoteeditorComponent } from "./notes/noteeditor/noteeditor.component";
import { NoteviewerComponent } from "./notes/noteviewer/noteviewer.component";
import { ResulteditorComponent } from "./result/resulteditor/resulteditor.component";
import { ResultviewerComponent } from "./result/resultviewer/resultviewer.component";
import { CalendarviewerComponent } from "./helpercomp/calendarviewer/calendarviewer.component";
import { SessionnresultComponent } from "./settings/sessionnresult/sessionnresult.component";
import { SchoolinfoComponent } from "./settings/schoolinfo/schoolinfo.component";
import { ViewstudentsComponent } from "./getviews/viewstudents/viewstudents.component";
import { ViewteachersComponent } from "./getviews/viewteachers/viewteachers.component";
import { ViewsparentsComponent } from "./getviews/viewsparents/viewsparents.component";
import { ViewclassesComponent } from "./getviews/viewclasses/viewclasses.component";
import { ViewsubclassesComponent } from "./getviews/viewsubclasses/viewsubclasses.component";
import { ViewcoursesComponent } from "./getviews/viewcourses/viewcourses.component";
import { ViewsessionsComponent } from "./getviews/viewsessions/viewsessions.component";
import { ViewmessagesComponent } from "./getviews/viewmessages/viewmessages.component";
import { ViewsfeesmanagementComponent } from "./getviews/viewsfeesmanagement/viewsfeesmanagement.component";
import { ViewfeespaymentComponent } from "./getviews/viewfeespayment/viewfeespayment.component";
import { ViewtransportroutesComponent } from "./getviews/viewtransportroutes/viewtransportroutes.component";
import { ViewtransportfeesComponent } from "./getviews/viewtransportfees/viewtransportfees.component";
import { ViewgoodsComponent } from "./getviews/viewgoods/viewgoods.component";
import { ViewstocksComponent } from "./getviews/viewstocks/viewstocks.component";
import { ViewsalesComponent } from "./getviews/viewsales/viewsales.component";
import { ViewexpensesComponent } from "./getviews/viewexpenses/viewexpenses.component";
import { ViewsuppincomeComponent } from "./getviews/viewsuppincome/viewsuppincome.component";
import { ViewpayrollComponent } from "./getviews/viewpayroll/viewpayroll.component";
import { AddstudentsComponent } from "./forms/addstudents/addstudents.component";
import { AddteachersComponent } from "./forms/addteachers/addteachers.component";
import { AddparentsComponent } from "./forms/addparents/addparents.component";
import { AddclassComponent } from "./forms/addclass/addclass.component";
import { AddsubclassComponent } from "./forms/addsubclass/addsubclass.component";
import { AddcourseComponent } from "./forms/addcourse/addcourse.component";
import { AddsessionComponent } from "./forms/addsession/addsession.component";
import { AddmessageComponent } from "./forms/addmessage/addmessage.component";
import { EditstudentsComponent } from "./forms/editstudents/editstudents.component";
import { EditteacherComponent } from "./forms/editteacher/editteacher.component";
import { EditparentComponent } from "./forms/editparent/editparent.component";
import { EditclassComponent } from "./forms/editclass/editclass.component";
import { EditsubclassComponent } from "./forms/editsubclass/editsubclass.component";
import { EditsessionComponent } from "./forms/editsession/editsession.component";
import { EditcourseComponent } from "./forms/editcourse/editcourse.component";
import { ViewsamplesComponent } from "./getviews/viewsamples/viewsamples.component";
import { VieweventsComponent } from "./getviews/viewevents/viewevents.component";
import { ViewtransactionlogComponent } from "./getviews/viewtransactionlog/viewtransactionlog.component";
import { AddfeesComponent } from "./forms/addfees/addfees.component";
import { AddfeespaymentComponent } from "./forms/addfeespayment/addfeespayment.component";
import { AddexpensesComponent } from "./forms/addexpenses/addexpenses.component";
import { AddgoodsComponent } from "./forms/addgoods/addgoods.component";
import { AddsalesComponent } from "./forms/addsales/addsales.component";
import { AddstocksComponent } from "./forms/addstocks/addstocks.component";
import { AddsupplementaryincomeComponent } from "./forms/addsupplementaryincome/addsupplementaryincome.component";
import { AddtransportfeesComponent } from "./forms/addtransportfees/addtransportfees.component";
import { AddtransportrouteComponent } from "./forms/addtransportroute/addtransportroute.component";
import { EdittransportrouteComponent } from "./forms/edittransportroute/edittransportroute.component";
import { EditgoodsComponent } from "./forms/editgoods/editgoods.component";
import { AddblogpostComponent } from "./formbook/addblogpost/addblogpost.component";
import { AddbookcategoryComponent } from "./formbook/addbookcategory/addbookcategory.component";
import { AddbookauthorComponent } from "./formbook/addbookauthor/addbookauthor.component";
import { AddbookborrowerrequestComponent } from "./formbook/addbookborrowerrequest/addbookborrowerrequest.component";
import { AddbookpublisherComponent } from "./formbook/addbookpublisher/addbookpublisher.component";
import { AddbookregisterborrowerComponent } from "./formbook/addbookregisterborrower/addbookregisterborrower.component";
import { AddbooktolibraryComponent } from "./formbook/addbooktolibrary/addbooktolibrary.component";
import { AddonlinebookComponent } from "./formbook/addonlinebook/addonlinebook.component";
import { AddschooleventsComponent } from "./formbook/addschoolevents/addschoolevents.component";
import { AddvideosComponent } from "./formbook/addvideos/addvideos.component";
import { EditblogpostComponent } from "./formbook/editblogpost/editblogpost.component";
import { EditbookauthorComponent } from "./formbook/editbookauthor/editbookauthor.component";
import { EditbookcategoryComponent } from "./formbook/editbookcategory/editbookcategory.component";
import { EditbookpublisherComponent } from "./formbook/editbookpublisher/editbookpublisher.component";
import { EditlibrarybookComponent } from "./formbook/editlibrarybook/editlibrarybook.component";
import { EditonlinebookComponent } from "./formbook/editonlinebook/editonlinebook.component";
import { EditschooleventsComponent } from "./formbook/editschoolevents/editschoolevents.component";
import { EditvideosComponent } from "./formbook/editvideos/editvideos.component";
import { AddadminComponent } from "./settings/addadmin/addadmin.component";
import { EditadminComponent } from "./settings/editadmin/editadmin.component";
import { AddpinsComponent } from "./settings/addpins/addpins.component";
import { AddstaffpayrollComponent } from "./forms/addstaffpayroll/addstaffpayroll.component";
import { VieweventhomeComponent } from "./getviews/vieweventhome/vieweventhome.component";
import { ViewtransactionloghomeComponent } from "./getviews/viewtransactionloghome/viewtransactionloghome.component";
import { ViewstudentheaderComponent } from "./getviews/viewstudentheader/viewstudentheader.component";
import { ViewparentheaderComponent } from "./getviews/viewparentheader/viewparentheader.component";
import { ViewteacherheaderComponent } from "./getviews/viewteacherheader/viewteacherheader.component";
import { AutocompserverComponent } from "./profileupload/autocompserver/autocompserver.component";
import { ViewresultsComponent } from "./getviews/viewresults/viewresults.component";
import { AddquizComponent } from "./forms/addquiz/addquiz.component";
import { EditquizComponent } from "./forms/editquiz/editquiz.component";
import { ViewquizComponent } from "./getviews/viewquiz/viewquiz.component";
import { ViewstudentbodyComponent } from "./getviews/viewstudentbody/viewstudentbody.component";
import { ViewteacherbodyComponent } from "./getviews/viewteacherbody/viewteacherbody.component";
import { ViewparentbodyComponent } from "./getviews/viewparentbody/viewparentbody.component";
import { ViewstudentfeesComponent } from "./getviews/viewstudentfees/viewstudentfees.component";
import { ViewstudentfeeslistComponent } from "./getviews/viewstudentfeeslist/viewstudentfeeslist.component";
import { ViewstockcartComponent } from "./getviews/viewstockcart/viewstockcart.component";
import { ViewsalescartComponent } from "./getviews/viewsalescart/viewsalescart.component";
import { ViewsexpensescartComponent } from "./getviews/viewsexpensescart/viewsexpensescart.component";
import { ViewstaffpaymentComponent } from "./getviews/viewstaffpayment/viewstaffpayment.component";
import { ViewpayrollallowancestaffComponent } from "./getviews/viewpayrollallowancestaff/viewpayrollallowancestaff.component";
import { ViewpayrollallowancemodelComponent } from "./getviews/viewpayrollallowancemodel/viewpayrollallowancemodel.component";
import { ViewpayrolldeductionmodelComponent } from "./getviews/viewpayrolldeductionmodel/viewpayrolldeductionmodel.component";
import { ViewpayrolldeductionstaffComponent } from "./getviews/viewpayrolldeductionstaff/viewpayrolldeductionstaff.component";
import { AddpayrollallowancemodelComponent } from "./forms/addpayrollallowancemodel/addpayrollallowancemodel.component";
import { AddpayrolldeductionmodelComponent } from "./forms/addpayrolldeductionmodel/addpayrolldeductionmodel.component";
import { EditpayrollallowancemodelComponent } from "./forms/editpayrollallowancemodel/editpayrollallowancemodel.component";
import { EditpayrolldeductionmodelComponent } from "./forms/editpayrolldeductionmodel/editpayrolldeductionmodel.component";
import { AddsalesviewComponent } from "./forms/addsalesview/addsalesview.component";
import { ViewvideosComponent } from "./getviews/viewvideos/viewvideos.component";
import { ViewpostsComponent } from "./getviews/viewposts/viewposts.component";
import { AddfeespaymentviewComponent } from "./forms/addfeespaymentview/addfeespaymentview.component";
import { DashboardpagemenuComponent } from "./custompart/dashboardpagemenu/dashboardpagemenu.component";
import { ResulteditorsubjectComponent } from "./result/resulteditorsubject/resulteditorsubject.component";
import { ViewcreateresultsheetComponent } from "./getviews/viewcreateresultsheet/viewcreateresultsheet.component";
import { ViewschoolfeespaymentcreateComponent } from "./getviews/viewschoolfeespaymentcreate/viewschoolfeespaymentcreate.component";
import { ViewquizhistoryComponent } from "./getviews/viewquizhistory/viewquizhistory.component";
import { AutocompserverparentsComponent } from "./profileupload/autocompserverparents/autocompserverparents.component";
import { AutocompserverteacherComponent } from "./profileupload/autocompserverteacher/autocompserverteacher.component";
import { AutocompserverstudentComponent } from "./profileupload/autocompserverstudent/autocompserverstudent.component";
import { ResultviewerprintComponent } from "./result/resultviewerprint/resultviewerprint.component";
import { ViewassignmentComponent } from "./getviews/viewassignment/viewassignment.component";
import { ViewnotesComponent } from "./getviews/viewnotes/viewnotes.component";
import { ViewnotesdetailsComponent } from "./getviews/viewnotesdetails/viewnotesdetails.component";
import { SelectservercomparraysComponent } from "./profileupload/selectservercomparrays/selectservercomparrays.component";
import { AddassignmentanswerComponent } from "./forms/addassignmentanswer/addassignmentanswer.component";
import { ViewvideossingleComponent } from "./getviews/viewvideossingle/viewvideossingle.component";
import { ViewassignmentdetailsComponent } from "./getviews/viewassignmentdetails/viewassignmentdetails.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SetpasswordcompComponent,
    SetprofilecompComponent,
    UploaddpComponent,
    UploadidComponent,
    GesturebasicComponent,
    DownloadfileComponent,
    DownloadlistComponent,
    DownloadprogressComponent,
    DownloadviewerComponent,
    GeneraluploadComponent,
    GeneraldownloadComponent,
    GeneraluploadimageComponent,
    GeneraluploadimagemultipleComponent,
    SelectservercompComponent,
    SelectservercomparraysComponent,
    QuizeditorComponent,
    QuizviewerComponent,
    QuizviewergameComponent,
    QuizviewerstudyComponent,
    NoteeditorComponent,
    NoteviewerComponent,
    ResulteditorComponent,
    ResultviewerComponent,
    ResultviewerprintComponent,
    CalendarviewerComponent,
    SessionnresultComponent,
    SchoolinfoComponent,
    ViewstudentsComponent,
    ViewteachersComponent,
    ViewsparentsComponent,
    ViewclassesComponent,
    ViewsubclassesComponent,
    ViewcoursesComponent,
    ViewsessionsComponent,
    ViewmessagesComponent,
    ViewsfeesmanagementComponent,
    ViewfeespaymentComponent,
    ViewtransportroutesComponent,
    ViewtransportfeesComponent,
    ViewgoodsComponent,
    ViewstocksComponent,
    ViewsalesComponent,
    ViewexpensesComponent,
    ViewsuppincomeComponent,
    ViewpayrollComponent,
    ViewsamplesComponent,
    VieweventsComponent,
    ViewtransactionlogComponent,
    AddstudentsComponent,
    AddteachersComponent,
    AddparentsComponent,
    AddclassComponent,
    AddsubclassComponent,
    AddcourseComponent,
    AddsubclassComponent,
    AddsessionComponent,
    AddmessageComponent,
    EditstudentsComponent,
    EditteacherComponent,
    EditparentComponent,
    EditclassComponent,
    EditsubclassComponent,
    EditcourseComponent,
    EditsessionComponent,
    AddfeesComponent,
    AddfeespaymentComponent,
    AddexpensesComponent,
    AddgoodsComponent,
    AddsalesComponent,
    AddstocksComponent,
    AddsupplementaryincomeComponent,
    AddtransportfeesComponent,
    AddtransportrouteComponent,
    EdittransportrouteComponent,
    EditgoodsComponent,
    AddblogpostComponent,
    AddbookauthorComponent,
    AddbookborrowerrequestComponent,
    AddbookcategoryComponent,
    AddbookpublisherComponent,
    AddbookregisterborrowerComponent,
    AddbooktolibraryComponent,
    AddonlinebookComponent,
    AddschooleventsComponent,
    AddvideosComponent,
    EditblogpostComponent,
    EditbookauthorComponent,
    EditbookcategoryComponent,
    EditbookpublisherComponent,
    EditlibrarybookComponent,
    EditonlinebookComponent,
    EditschooleventsComponent,
    EditvideosComponent,
    AddadminComponent,
    EditadminComponent,
    AddpinsComponent,
    AddstaffpayrollComponent,
    VieweventhomeComponent,
    ViewtransactionloghomeComponent,
    ViewstudentheaderComponent,
    ViewparentheaderComponent,
    ViewteacherheaderComponent,
    AutocompserverComponent,
    ViewresultsComponent,
    AddquizComponent,
    EditquizComponent,
    ViewquizComponent,
    ViewstudentbodyComponent,
    ViewteacherbodyComponent,
    ViewparentbodyComponent,
    ViewstudentfeesComponent,
    ViewstudentfeeslistComponent,
    ViewstockcartComponent,
    ViewsalescartComponent,
    ViewsexpensescartComponent,
    ViewstaffpaymentComponent,
    ViewpayrollallowancemodelComponent,
    ViewpayrollallowancestaffComponent,
    ViewpayrolldeductionmodelComponent,
    ViewpayrolldeductionstaffComponent,
    AddpayrollallowancemodelComponent,
    AddpayrolldeductionmodelComponent,
    EditpayrollallowancemodelComponent,
    EditpayrolldeductionmodelComponent,
    AddsalesviewComponent,
    ViewvideosComponent,
    ViewpostsComponent,
    AddfeespaymentviewComponent,
    DashboardpagemenuComponent,
    ResulteditorsubjectComponent,
    ViewcreateresultsheetComponent,
    ViewquizhistoryComponent,
    ViewschoolfeespaymentcreateComponent,
    AutocompserverparentsComponent,
    AutocompserverteacherComponent,
    AutocompserverstudentComponent,
    ViewassignmentComponent,
    ViewnotesComponent,
    ViewnotesdetailsComponent,
    ViewassignmentdetailsComponent,
    AddassignmentanswerComponent,
    ViewvideossingleComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SetpasswordcompComponent,
    SetprofilecompComponent,
    UploaddpComponent,
    UploadidComponent,
    GesturebasicComponent,
    DownloadfileComponent,
    DownloadlistComponent,
    DownloadprogressComponent,
    DownloadviewerComponent,
    GeneraluploadComponent,
    GeneraldownloadComponent,
    GeneraluploadimageComponent,
    GeneraluploadimagemultipleComponent,
    SelectservercompComponent,
    SelectservercomparraysComponent,
    QuizeditorComponent,
    QuizviewerComponent,
    QuizviewergameComponent,
    QuizviewerstudyComponent,
    NoteeditorComponent,
    NoteviewerComponent,
    ResulteditorComponent,
    ResultviewerComponent,
    ResultviewerprintComponent,
    CalendarviewerComponent,
    SessionnresultComponent,
    SchoolinfoComponent,
    ViewstudentsComponent,
    ViewteachersComponent,
    ViewsparentsComponent,
    ViewclassesComponent,
    ViewsubclassesComponent,
    ViewcoursesComponent,
    ViewsessionsComponent,
    ViewmessagesComponent,
    ViewsfeesmanagementComponent,
    ViewfeespaymentComponent,
    ViewtransportroutesComponent,
    ViewtransportfeesComponent,
    ViewgoodsComponent,
    ViewstocksComponent,
    ViewsalesComponent,
    ViewexpensesComponent,
    ViewsuppincomeComponent,
    ViewpayrollComponent,
    ViewsamplesComponent,
    VieweventsComponent,
    ViewtransactionlogComponent,
    AddstudentsComponent,
    AddteachersComponent,
    AddparentsComponent,
    AddclassComponent,
    AddsubclassComponent,
    AddcourseComponent,
    AddsubclassComponent,
    AddsessionComponent,
    AddmessageComponent,
    EditstudentsComponent,
    EditteacherComponent,
    EditparentComponent,
    EditclassComponent,
    EditsubclassComponent,
    EditcourseComponent,
    EditsessionComponent,
    AddfeesComponent,
    AddfeespaymentComponent,
    AddexpensesComponent,
    AddgoodsComponent,
    AddsalesComponent,
    AddstocksComponent,
    AddsupplementaryincomeComponent,
    AddtransportfeesComponent,
    AddtransportrouteComponent,
    EdittransportrouteComponent,
    EditgoodsComponent,
    AddblogpostComponent,
    AddbookauthorComponent,
    AddbookborrowerrequestComponent,
    AddbookcategoryComponent,
    AddbookpublisherComponent,
    AddbookregisterborrowerComponent,
    AddbooktolibraryComponent,
    AddonlinebookComponent,
    AddschooleventsComponent,
    AddvideosComponent,
    EditblogpostComponent,
    EditbookauthorComponent,
    EditbookcategoryComponent,
    EditbookpublisherComponent,
    EditlibrarybookComponent,
    EditonlinebookComponent,
    EditschooleventsComponent,
    EditvideosComponent,
    AddadminComponent,
    EditadminComponent,
    AddpinsComponent,
    AddstaffpayrollComponent,
    VieweventhomeComponent,
    ViewtransactionloghomeComponent,
    ViewstudentheaderComponent,
    ViewparentheaderComponent,
    ViewteacherheaderComponent,
    AutocompserverComponent,
    ViewresultsComponent,
    AddquizComponent,
    EditquizComponent,
    ViewquizComponent,
    ViewstudentbodyComponent,
    ViewteacherbodyComponent,
    ViewparentbodyComponent,
    ViewstudentfeesComponent,
    ViewstudentfeeslistComponent,
    ViewstockcartComponent,
    ViewsalescartComponent,
    ViewsexpensescartComponent,
    ViewstaffpaymentComponent,
    ViewpayrollallowancemodelComponent,
    ViewpayrollallowancestaffComponent,
    ViewpayrolldeductionmodelComponent,
    ViewpayrolldeductionstaffComponent,
    AddpayrollallowancemodelComponent,
    AddpayrolldeductionmodelComponent,
    EditpayrollallowancemodelComponent,
    EditpayrolldeductionmodelComponent,
    AddsalesviewComponent,
    ViewvideosComponent,
    ViewpostsComponent,
    AddfeespaymentviewComponent,
    DashboardpagemenuComponent,
    ResulteditorsubjectComponent,
    ViewcreateresultsheetComponent,
    ViewquizhistoryComponent,
    ViewschoolfeespaymentcreateComponent,
    AutocompserverparentsComponent,
    AutocompserverteacherComponent,
    AutocompserverstudentComponent,
    ViewassignmentComponent,
    ViewnotesComponent,
    ViewnotesdetailsComponent,
    ViewassignmentdetailsComponent,
    AddassignmentanswerComponent,
    ViewvideossingleComponent,
  ],
})
export class ComponentsModule {}
