import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentviewerPageRoutingModule } from './assignmentviewer-routing.module';

import { AssignmentviewerPage } from './assignmentviewer.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AssignmentviewerPageRoutingModule
  ],
  declarations: [AssignmentviewerPage]
})
export class AssignmentviewerPageModule {}
