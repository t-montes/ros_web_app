import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
//ROVER
import { BrazoModule } from './rover/brazo/brazo.module';
import { TraccionModule  } from "./rover/traccion/traccion.module";
import { SensoricaModule } from './rover/sensorica/sensorica.module';
import { EstadoModule } from './rover/estado/estado.module';
import { FPGAModule } from './rover/fpga/fpga.module'

//SUBMARINO
import { EstadosubModule } from "./submarino/estadosub/estadosub.module";
import { NavegacionModule } from "./submarino/navegacion/navegacion.module";
import { PinzaModule } from "./submarino/pinza/pinza.module"; 

//LUNABOT
import { EstadolunaModule } from "./lunabot/estadoluna/estadoluna.module";
import { PruebaModule } from './lunabot/prueba/prueba.module';

import { HomeViewComponent } from './views/home/home.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Para los roles
import { NgxPermissionsModule} from 'ngx-permissions'; 
import { from } from 'rxjs';

//Para slider
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

// Para Messages
import { HttpClientModule } from '@angular/common/http';

import {APP_BASE_HREF} from '@angular/common';


const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //ROVER
    BrazoModule,
    TraccionModule,
    SensoricaModule,
    EstadoModule,
    FPGAModule,

    //SUBMARINO
    EstadosubModule,
    NavegacionModule,
    PinzaModule,

    //LUNABOT
    EstadolunaModule,
    PruebaModule,
    
    // MESSAGES
    FormsModule,
    HttpClientModule,

    NgxBootstrapSliderModule,
    SocketIoModule.forRoot(config),
    NgbModule,
    AuthModule,
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [Title, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
