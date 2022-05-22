import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizsinglePageRoutingModule } from './quizsingle-routing.module';

import { QuizsinglePage } from './quizsingle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    QuizsinglePageRoutingModule
  ],
  declarations: [QuizsinglePage]
})
export class QuizsinglePageModule {}
