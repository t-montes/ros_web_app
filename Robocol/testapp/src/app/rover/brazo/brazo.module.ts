import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoPestaniaComponent } from './brazo-pestania/brazo-pestania.component';
import { BrazoCoordenadasComponent } from './brazo-coordenadas/brazo-coordenadas.component';
import { LiveComponent } from './live/live.component';
import { SensorPresionComponent } from './sensor-presion/sensor-presion.component';
import { AnalisisOperacionComponent } from './analisis-operacion/analisis-operacion.component';
import { OnOffComponent } from './on-off/on-off.component';
import { BrazoCinematicaInversaHorizontalComponent } from './brazo-cinematica-inversa-horizontal/brazo-cinematica-inversa-horizontal.component';
import { BrazoCinematicaInversaVerticalComponent } from './brazo-cinematica-inversa-vertical/brazo-cinematica-inversa-vertical.component';
import { BrazoCopilotoComponent } from './brazo-copiloto/brazo-copiloto.component';
import { SistemaExtraccionBComponent } from './sistema-extraccion-b/sistema-extraccion-b.component';
import { BrazoGripperComponent } from './brazo-gripper/brazo-gripper.component';
import { BrazoMotoresComponent } from './brazo-motores/brazo-motores.component';
import { BrazoPosicionesComponent } from './brazo-posiciones/brazo-posiciones.component';
import { BrazoAccionesComponent } from './brazo-acciones/brazo-acciones.component';

@NgModule({
  declarations: [
    BrazoPestaniaComponent,
    BrazoCoordenadasComponent,
    LiveComponent,
    SensorPresionComponent,
    AnalisisOperacionComponent,
    OnOffComponent,
    BrazoCinematicaInversaHorizontalComponent,
    BrazoCinematicaInversaVerticalComponent,
    BrazoCopilotoComponent,
    SistemaExtraccionBComponent,
    BrazoGripperComponent,
    BrazoMotoresComponent,
    BrazoPosicionesComponent,
    BrazoAccionesComponent,
  ],
  imports: [CommonModule],
  exports: [
    SistemaExtraccionBComponent,
    BrazoPestaniaComponent,
    BrazoCoordenadasComponent,
    LiveComponent,
    SensorPresionComponent,
    AnalisisOperacionComponent,
    OnOffComponent,
    BrazoCinematicaInversaHorizontalComponent,
    BrazoCinematicaInversaVerticalComponent,
    BrazoCopilotoComponent,
    BrazoGripperComponent,
    BrazoMotoresComponent,
    BrazoPosicionesComponent,
    BrazoAccionesComponent,
  ],
})
export class BrazoModule { }
