import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageprofilePageRoutingModule } from './manageprofile-routing.module';

import { ManageprofilePage } from './manageprofile.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ManageprofilePageRoutingModule
  ],
  declarations: [ManageprofilePage]
})
export class ManageprofilePageModule {}
