import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoPestaniaComponent } from './brazo-pestania/brazo-pestania.component';
import { BrazoCinematicaDirectaComponent } from './brazo-cinematica-directa/brazo-cinematica-directa.component';
import { BrazoCinematicaInversaComponent } from './brazo-cinematica-inversa/brazo-cinematica-inversa.component';
import { BrazoCoordenadasComponent } from './brazo-coordenadas/brazo-coordenadas.component';
import { LiveComponent } from './live/live.component';
import { SensorPresionComponent } from './sensor-presion/sensor-presion.component';
import { AnalisisOperacionComponent } from './analisis-operacion/analisis-operacion.component';
import { OnOffComponent } from './on-off/on-off.component';



@NgModule({
  declarations: [BrazoPestaniaComponent, BrazoCinematicaDirectaComponent, BrazoCinematicaInversaComponent, BrazoCoordenadasComponent, LiveComponent, SensorPresionComponent, AnalisisOperacionComponent, OnOffComponent],
  imports: [
    CommonModule
  ],
  exports: [BrazoPestaniaComponent, BrazoCinematicaDirectaComponent, BrazoCinematicaInversaComponent, BrazoCoordenadasComponent]
})
export class BrazoModule { }
