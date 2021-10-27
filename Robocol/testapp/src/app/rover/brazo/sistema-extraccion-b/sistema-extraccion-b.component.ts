import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-extraccion-b',
  templateUrl: './sistema-extraccion-b.component.html',
  styleUrls: ['./sistema-extraccion-b.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class SistemaExtraccionBComponent implements OnInit {

  @Input() brazoService: BrazoService;
  
  constructor() { }

  ngOnInit(): void {
  }

  send_selection(): void {
    const command = document.getElementById("command") as HTMLSelectElement;
    const message = {
      id: "sistema_extraccion_b",
      command: parseInt(command.value)
    }
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }

}
