import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-gripper',
  templateUrl: './brazo-gripper.component.html',
  styleUrls: ['./brazo-gripper.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoGripperComponent implements OnInit {

  @Input() brazoService: BrazoService;

  constructor() { }

  ngOnInit(): void {
  }

  send_selection_gripper(): void {
    const command = document.getElementById("command_gripper") as HTMLSelectElement;
    const message = {
      id: "movearm",
      command: command.value
    }
    this.brazoService.messages.next(message);
    console.log('new message from brazo to websocket: ', message);
  }

}
