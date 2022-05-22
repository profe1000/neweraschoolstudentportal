import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupinPageRoutingModule } from './setupin-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { SetupinPage } from './setupin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SetupinPageRoutingModule
  ],
  declarations: [SetupinPage]
})
export class SetupinPageModule {}
