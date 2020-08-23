import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensoricaComponent } from './sensorica.component';
import { EvaComponent } from './eva/eva.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { StationComponent } from './station/station.component';
import { LiveComponent } from './live/live.component';
import { DrillingComponent } from './drilling/drilling.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SensoricaComponent,
    EvaComponent,
    MeasurementsComponent,
    AnalysisComponent,
    StationComponent,
    LiveComponent,
    DrillingComponent
  ]
})
export class SensoricaModule { }
