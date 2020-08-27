import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoPestaniaComponent } from './brazo-pestania/brazo-pestania.component';
import { BrazoCinematicaDirectaComponent } from './brazo-cinematica-directa/brazo-cinematica-directa.component';
import { BrazoCinematicaInversaComponent } from './brazo-cinematica-inversa/brazo-cinematica-inversa.component';
import { BrazoCoordenadasComponent } from './brazo-coordenadas/brazo-coordenadas.component';



@NgModule({
  declarations: [BrazoPestaniaComponent, BrazoCinematicaDirectaComponent, BrazoCinematicaInversaComponent, BrazoCoordenadasComponent],
  imports: [
    CommonModule
  ],
  exports: [BrazoPestaniaComponent, BrazoCinematicaDirectaComponent, BrazoCinematicaInversaComponent, BrazoCoordenadasComponent]
})
export class BrazoModule { }
