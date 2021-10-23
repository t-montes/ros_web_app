import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-pestania',
  templateUrl: './brazo-pestania.component.html',
  styleUrls: ['./brazo-pestania.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoPestaniaComponent implements  OnDestroy {

  constructor(private brazoService: BrazoService) {
  }

  ngOnDestroy(): void {
    const message = {
      id: 'cam1_signal',
    };
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }
}