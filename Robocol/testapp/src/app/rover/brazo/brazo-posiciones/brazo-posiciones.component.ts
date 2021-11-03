import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-brazo-posiciones',
  templateUrl: './brazo-posiciones.component.html',
  styleUrls: ['./brazo-posiciones.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoPosicionesComponent implements OnInit {

  @Input() brazoService: BrazoService;

  constructor() { }

  ngOnInit(): void {
  }

  send_selection_positions(): void {
    const command = document.getElementById("command_positions") as HTMLSelectElement;
    const message = {
      id: "movearm",
      command: command.value
    }
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }

}
