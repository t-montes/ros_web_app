import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-pestania',
  templateUrl: './brazo-pestania.component.html',
  styleUrls: ['./brazo-pestania.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoPestaniaComponent implements OnDestroy {

  brazoService:BrazoService = new BrazoService(new WebsocketService());

  constructor() {
    console.log(this.brazoService)
  }

  ngOnDestroy(): void {
    this.brazoService.messages.next({id:"cam1_signal"})
  }
}