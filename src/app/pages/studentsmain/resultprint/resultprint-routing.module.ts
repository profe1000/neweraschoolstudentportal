import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultprintPage } from './resultprint.page';

const routes: Routes = [
  {
    path: '',
    component: ResultprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultprintPageRoutingModule {}
