import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupinPage } from './setupin.page';

const routes: Routes = [
  {
    path: '',
    component: SetupinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupinPageRoutingModule {}
