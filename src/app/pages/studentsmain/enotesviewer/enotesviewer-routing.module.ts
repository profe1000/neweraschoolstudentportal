import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnotesviewerPage } from './enotesviewer.page';

const routes: Routes = [
  {
    path: '',
    component: EnotesviewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnotesviewerPageRoutingModule {}
