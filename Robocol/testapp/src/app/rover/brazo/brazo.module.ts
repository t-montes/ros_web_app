import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoPestaniaComponent } from './brazo-pestania/brazo-pestania.component';
import { BrazoCinematicaDirectaComponent } from './brazo-cinematica-directa/brazo-cinematica-directa.component';
import { BrazoCoordenadasComponent } from './brazo-coordenadas/brazo-coordenadas.component';
import { LiveComponent } from './live/live.component';
import { SensorPresionComponent } from './sensor-presion/sensor-presion.component';
import { AnalisisOperacionComponent } from './analisis-operacion/analisis-operacion.component';
import { OnOffComponent } from './on-off/on-off.component';
import { BrazoCinematicaInversaHorizontalComponent } from './brazo-cinematica-inversa-horizontal/brazo-cinematica-inversa-horizontal.component';
import { BrazoCinematicaInversaVerticalComponent } from './brazo-cinematica-inversa-vertical/brazo-cinematica-inversa-vertical.component';
import { BrazoCinematicaInversaRotacionComponent } from './brazo-cinematica-inversa-rotacion/brazo-cinematica-inversa-rotacion.component';
import { BrazoCopilotoComponent } from './brazo-copiloto/brazo-copiloto.component';

@NgModule({
  declarations: [
    BrazoPestaniaComponent,
    BrazoCinematicaDirectaComponent,
    BrazoCoordenadasComponent,
    LiveComponent,
    SensorPresionComponent,
    AnalisisOperacionComponent,
    OnOffComponent,
    BrazoCinematicaInversaHorizontalComponent,
    BrazoCinematicaInversaVerticalComponent,
    BrazoCinematicaInversaRotacionComponent,
    BrazoCopilotoComponent,
  ],
  imports: [CommonModule],
  exports: [
    BrazoPestaniaComponent,
    BrazoCinematicaDirectaComponent,
    BrazoCoordenadasComponent,
    LiveComponent,
    SensorPresionComponent,
    AnalisisOperacionComponent,
    OnOffComponent,
    BrazoCinematicaInversaHorizontalComponent,
    BrazoCinematicaInversaVerticalComponent,
    BrazoCinematicaInversaRotacionComponent,
    BrazoCopilotoComponent,
  ],
})
export class BrazoModule {}
