import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolblogPage } from './schoolblog.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolblogPageRoutingModule {}
