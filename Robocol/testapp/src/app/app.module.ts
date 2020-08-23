import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { PruebaModule } from './submarino/prueba/prueba.module';
import { BrazoModule } from './rover/brazo/brazo.module';
import { TraccionModule } from './rover/traccion/traccion.module';
import { SensoricaModule } from './rover/sensorica/sensorica.module';
import { HomeViewComponent } from './views/home/home.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Para los roles
import { NgxPermissionsModule} from 'ngx-permissions'; 
import { from } from 'rxjs';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PruebaModule,
    BrazoModule,
    TraccionModule,
    SensoricaModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
