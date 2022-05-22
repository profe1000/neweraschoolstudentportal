import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolblogPageRoutingModule } from './schoolblog-routing.module';

import { SchoolblogPage } from './schoolblog.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SchoolblogPageRoutingModule
  ],
  declarations: [SchoolblogPage]
})
export class SchoolblogPageModule {}
