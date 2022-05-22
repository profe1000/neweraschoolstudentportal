import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnotesPage } from './enotes.page';

const routes: Routes = [
  {
    path: '',
    component: EnotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnotesPageRoutingModule {}
