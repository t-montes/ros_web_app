import { Component, OnInit, Input } from '@angular/core';
import { NavegacionService } from '../navegacion.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-roll-pitch',
  templateUrl: './roll-pitch.component.html',
  styleUrls: ['./roll-pitch.component.css'],
  providers: [WebsocketService, NavegacionService],
})
export class RollPitchComponent implements OnInit {

  @Input() navegacionService: NavegacionService; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

  change_value(motor: string, action: string) {
    const message = {
      id: 'rotacion',
      motor: motor,
      action: action
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }


  stop_changing_value() {
    const message = {
      id: 'rotacion',
      command: 'stop',
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

}
