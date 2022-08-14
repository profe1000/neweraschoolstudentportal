import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosplayerPage } from './videosplayer.page';

const routes: Routes = [
  {
    path: '',
    component: VideosplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosplayerPageRoutingModule {}
