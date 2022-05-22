import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsinglePage } from './resultsingle.page';

const routes: Routes = [
  {
    path: '',
    component: ResultsinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsinglePageRoutingModule {}
