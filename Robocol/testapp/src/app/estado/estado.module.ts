import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPestaniaComponent } from './estado-pestania/estado-pestania.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstadoPestaniaComponent],
  exports:[ EstadoPestaniaComponent]
})
export class EstadoModule { }
