import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PruebaModule } from './prueba/prueba.module';
import { BrazoModule } from './brazo/brazo.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    SocketIoModule.forRoot(config),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
