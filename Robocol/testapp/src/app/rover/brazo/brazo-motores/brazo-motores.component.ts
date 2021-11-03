import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-motores',
  templateUrl: './brazo-motores.component.html',
  styleUrls: ['./brazo-motores.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoMotoresComponent implements OnInit {

  @Input() brazoService: BrazoService;

  constructor() { }

  ngOnInit(): void {
  }

  send_selection_motors(): void {
    const motor = document.getElementById("command_motor") as HTMLSelectElement;
    const sentido = document.getElementById("command_sentido_rotacion") as HTMLSelectElement;
    const grados = document.getElementById("command_grados") as HTMLSelectElement;
    const message = {
      id: "movearm",
      command: `${motor.value},${sentido.value},${grados.value}`
    }
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }
}
