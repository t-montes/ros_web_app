import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from '../../websocket.service';

const NAVEGACION_SOCKET_URL =
  'ws://' + window.location.host + '/ws/submarino/navegacion/';

@Injectable({
  providedIn: 'root',
})
export class NavegacionService {
  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    console.log('NavegacionService: constructor');
    this.messages = <Subject<any>>(
      wsService
        .connect(NAVEGACION_SOCKET_URL)
        .map((response: MessageEvent): any => {
          let data = JSON.parse(response.data);
          return data;
        })
    );
  }
}
