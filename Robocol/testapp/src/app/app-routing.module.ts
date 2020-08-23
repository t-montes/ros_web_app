import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';
import { BrazoPestaniaComponent } from './rover/brazo/brazo-pestania/brazo-pestania.component';
import { PruebaComponent} from './submarino/prueba/prueba/prueba.component';
import { TraccionComponent } from './rover/traccion/traccion.component';
import { EstadoPestaniaComponent } from './rover/estado/estado-pestania/estado-pestania.component';
import { SensoricaComponent } from './rover/sensorica/sensorica.component';
import { EstadoTopicosComponent } from './rover/estado/estado-topicos/estado-topicos.component';
import { AuthModule } from './auth/auth.module';

import { NgxPermissionsGuard } from 'ngx-permissions';

@NgModule({
  declarations: [ 
    HomeViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'brazo', component: BrazoPestaniaComponent },
      { path: 'traccion', component: TraccionComponent },
      { path: 'estado', component: EstadoPestaniaComponent},
      { path: 'estadoTopicos', component: EstadoTopicosComponent},
      { path: 'sensorica', component: SensoricaComponent },
      { path: 'prueba', 
        component: PruebaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
          only: ['LUNABOTICS']
        } }},

      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
    HomeViewComponent
  ],
  providers: [],

})
export class AppRoutingModule {}