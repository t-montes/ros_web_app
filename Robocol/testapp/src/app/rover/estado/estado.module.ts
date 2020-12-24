import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPestaniaComponent } from './estado-pestania/estado-pestania.component';
import { EstadoTopicosComponent } from './estado-topicos/estado-topicos.component';
import { LiveComponent } from '../traccion/live/live.component';
import { VideoComponent } from './video/video.component'



@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [EstadoPestaniaComponent, EstadoTopicosComponent, VideoComponent],
  exports:[ EstadoPestaniaComponent,VideoComponent]]
})
export class EstadoModule { }
