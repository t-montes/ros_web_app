import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';

//ROVER
import { BrazoPestaniaComponent } from './rover/brazo/brazo-pestania/brazo-pestania.component';
import { TraccionComponent } from './rover/traccion/traccion.component';
import { EstadoPestaniaComponent } from './rover/estado/estado-pestania/estado-pestania.component';
import { SensoricaComponent } from './rover/sensorica/sensorica.component';
import { EstadoTopicosComponent } from './rover/estado/estado-topicos/estado-topicos.component';

//SUBMARINO
import { EstadosubComponent } from './submarino/estadosub/estadosub.component';
import { NavegacionComponent } from './submarino/navegacion/navegacion.component';
import { PinzaComponent } from "./submarino/pinza/pinza.component";

//LUNABOT
import { PruebaComponent } from './lunabot/prueba/prueba.component';
import { EstadolunaComponent } from './lunabot/estadoluna/estadoluna.component';

import { AuthModule } from './auth/auth.module';

import { NgxPermissionsGuard } from 'ngx-permissions';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot([
      //Visible para todos
      { path: 'home', component: AuthComponent },


      //Visible para ROVER
      {
        path: 'brazo',
        component: BrazoPestaniaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ROVER']
          }
        }
      },
      {
        path: 'traccion',
        component: TraccionComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ROVER']
          }
        }
      },
      {
        path: 'estado',
        component: EstadoPestaniaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ROVER']
          }
        }
      },
      {
        path: 'estadoTopicos',
        component: EstadoTopicosComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ROVER']
          }
        }
      },
      {
        path: 'sensorica',
        component: SensoricaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ROVER']
          }
        }
      },



      // Visible para SUBMARINO
      {
        path: 'navegacion',
        component: NavegacionComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SUBMARINO']
          }
        }
      },
      {
        path: 'pinza',
        component: PinzaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SUBMARINO']
          }
        }
      },
      {
        path: 'estadoSub',
        component: EstadosubComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SUBMARINO']
          }
        }
      },


      // Visible para LUNABOT
      {
        path: 'estadoLuna',
        component: EstadolunaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['LUNABOT']
          }
        }
      },
      {
        path: 'prueba',
        component: PruebaComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['LUNABOT']
          }
        }
      },

      // Rutas que no existen redirigir a home
      { path: '**', redirectTo: 'home' },
      { path: ' ', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],

})
export class AppRoutingModule { }
