import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { NavegacionService } from './navegacion.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
  providers: [WebsocketService, NavegacionService],
})
export class NavegacionComponent implements OnInit {
  navegacionService: NavegacionService = new NavegacionService(
    new WebsocketService()
  );

  constructor() {
    console.log(this.navegacionService);
  }

  ngOnInit() {}

  abort() {
    const message = {
      id: 'abort',
      command: 'abort',
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }
}
