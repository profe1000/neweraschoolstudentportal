import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizsinglePage } from './quizsingle.page';

const routes: Routes = [
  {
    path: '',
    component: QuizsinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizsinglePageRoutingModule {}
