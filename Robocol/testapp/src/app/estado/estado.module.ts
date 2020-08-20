import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPestaniaComponent } from './estado-pestania/estado-pestania.component';
import { EstadoTopicosComponent } from './estado-topicos/estado-topicos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstadoPestaniaComponent, EstadoTopicosComponent],
  exports:[ EstadoPestaniaComponent]
})
export class EstadoModule { }
