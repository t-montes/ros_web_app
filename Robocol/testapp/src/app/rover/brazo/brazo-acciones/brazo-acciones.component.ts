import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-acciones',
  templateUrl: './brazo-acciones.component.html',
  styleUrls: ['./brazo-acciones.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoAccionesComponent implements OnInit {

  @Input() brazoService: BrazoService;

  constructor() { }

  ngOnInit(): void {
  }

  send_actions(action:string): void {
    const message = {
      id: "movearm",
      command: action
    }
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }

}
