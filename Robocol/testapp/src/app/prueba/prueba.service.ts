import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  currentMensaje = this.socket.fromEvent<string>('mensaje');

  constructor(private socket: Socket) { }

  getMensaje() {
    this.socket.emit('getMensaje');
  }
}