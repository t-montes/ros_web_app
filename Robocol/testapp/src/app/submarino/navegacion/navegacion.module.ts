import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { RollPitchComponent } from './roll-pitch/roll-pitch.component';
import { PotenciaComponent } from './potencia/potencia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavegacionComponent, HorizontalComponent, VerticalComponent, RollPitchComponent, PotenciaComponent]
})
export class NavegacionModule { }
