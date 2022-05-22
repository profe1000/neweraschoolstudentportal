import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnotesviewerPageRoutingModule } from './enotesviewer-routing.module';

import { EnotesviewerPage } from './enotesviewer.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EnotesviewerPageRoutingModule
  ],
  declarations: [EnotesviewerPage]
})
export class EnotesviewerPageModule {}
