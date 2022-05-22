import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnotesPageRoutingModule } from './enotes-routing.module';

import { EnotesPage } from './enotes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EnotesPageRoutingModule
  ],
  declarations: [EnotesPage]
})
export class EnotesPageModule {}
