import { NavegacionService } from '../navegacion.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css'],
  providers: [WebsocketService, NavegacionService],
})
export class PotenciaComponent implements OnInit {

  @Input() navegacionService: NavegacionService;

  constructor() { }

  ngOnInit(): void {
  }

  send_potencia(): void {
    const potencia = document.getElementById("command_potencia") as HTMLSelectElement;
    const message = {
      id: "power_bar",
      command: Number(`${potencia.value}`)
    }
    this.navegacionService.messages.next(message);
    console.log('new message from navegacion to websocket: ', message);
  }

}
