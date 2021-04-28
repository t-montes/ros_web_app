import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPestaniaComponent } from './estado-pestania/estado-pestania.component';
import { EstadoTopicosComponent } from './estado-topicos/estado-topicos.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { LiveComponent } from './live/live.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule
  ],
  declarations: [EstadoPestaniaComponent, EstadoTopicosComponent, LiveComponent],
  exports:[ EstadoPestaniaComponent]
})
export class EstadoModule { }
