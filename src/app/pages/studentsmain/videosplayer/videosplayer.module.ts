import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosplayerPageRoutingModule } from './videosplayer-routing.module';

import { VideosplayerPage } from './videosplayer.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VideosplayerPageRoutingModule
  ],
  declarations: [VideosplayerPage]
})
export class VideosplayerPageModule {}
