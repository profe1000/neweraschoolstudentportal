import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentviewerPage } from './assignmentviewer.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentviewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentviewerPageRoutingModule {}
