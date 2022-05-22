import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsinglePageRoutingModule } from './resultsingle-routing.module';

import { ResultsinglePage } from './resultsingle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ResultsinglePageRoutingModule
  ],
  declarations: [ResultsinglePage]
})
export class ResultsinglePageModule {}
