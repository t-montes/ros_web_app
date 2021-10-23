import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-pestania',
  templateUrl: './brazo-pestania.component.html',
  styleUrls: ['./brazo-pestania.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoPestaniaComponent implements OnInit, OnDestroy {

  constructor(private brazoService: BrazoService) {
  }

  ngOnInit(): void {
    const message = {
      id: 'cam1_signal',
      signal: 1,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  ngOnDestroy(): void {
    const message = {
      id: 'cam1_signal',
      signal: 0,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }
}