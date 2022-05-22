import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "./services/guards/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'adminlogin', loadChildren: './adminlogin/adminlogin.module#AdminloginPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/auth/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'setprofile',
    loadChildren: () => import('./pages/profilesetup/setprofile/setprofile.module').then( m => m.SetprofilePageModule)
  },
  {
    path: 'setupin',
    loadChildren: () => import('./pages/profilesetup/setupin/setupin.module').then( m => m.SetupinPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/studentsmain/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/studentsmain/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/studentsmain/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'assignments',
    loadChildren: () => import('./pages/studentsmain/assignments/assignments.module').then( m => m.AssignmentsPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/studentsmain/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./pages/studentsmain/fees/fees.module').then( m => m.FeesPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/studentsmain/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/studentsmain/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'schoolblog',
    loadChildren: () => import('./pages/blog/schoolblog/schoolblog.module').then( m => m.SchoolblogPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/blog/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/blog/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'manageprofile',
    loadChildren: () => import('./pages/settings/manageprofile/manageprofile.module').then( m => m.ManageprofilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/settings/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'dashboardhome',
    loadChildren: () => import('./pages/main/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quizsingle/:id/:quizfile/:seconds',
    loadChildren: () => import('./pages/studentsmain/quizsingle/quizsingle.module').then( m => m.QuizsinglePageModule)
  },
  {
    path: 'resultsingle/:id/:username',
    loadChildren: () => import('./pages/studentsmain/resultsingle/resultsingle.module').then( m => m.ResultsinglePageModule)
  },
  {
    path: 'assignmentviewer/:id/:title',
    loadChildren: () => import('./pages/studentsmain/assignmentviewer/assignmentviewer.module').then( m => m.AssignmentviewerPageModule)
  },
  {
    path: 'enotes',
    loadChildren: () => import('./pages/studentsmain/enotes/enotes.module').then( m => m.EnotesPageModule)
  },
  {
    path: 'enotesviewer/:id/:title',
    loadChildren: () => import('./pages/studentsmain/enotesviewer/enotesviewer.module').then( m => m.EnotesviewerPageModule)
  },
  {
    path: 'resultprint/:id/:username',
    loadChildren: () => import('./pages/studentsmain/resultprint/resultprint.module').then( m => m.ResultprintPageModule)
  }
                                                                                                                                                                                                                                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
