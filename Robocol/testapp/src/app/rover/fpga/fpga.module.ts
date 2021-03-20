import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FPGAComponent } from './fpga.component';
import { PinOutComponent } from './pinout/pinout.component';
import { ParamsComponent } from './params/params.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule
  ],
  declarations: [
    FPGAComponent,
    PinOutComponent,
    ParamsComponent
    
    // MeasurementsComponent,
    // AnalysisComponent,
    // StationComponent,
    // LiveComponent,
    // DrillingComponent,
    // TabsComponent
  ],
  providers: [],
  bootstrap: [FPGAComponent]
})
export class FPGAModule { }
