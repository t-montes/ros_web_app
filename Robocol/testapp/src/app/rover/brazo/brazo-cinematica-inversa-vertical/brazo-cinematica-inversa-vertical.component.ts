import { Component, OnInit, Input } from '@angular/core';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-brazo-cinematica-inversa-vertical',
  templateUrl: './brazo-cinematica-inversa-vertical.component.html',
  styleUrls: ['./brazo-cinematica-inversa-vertical.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoCinematicaInversaVerticalComponent implements OnInit {
  @Input() brazoService: BrazoService; // decorate the property with @Input()
  imageSrc: String;

  imageButtons = [
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Vertical/VERTICAL inicial.png',
      name: 'VERTICAL inicial',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Vertical/U activado.png',
      name: 'U activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Vertical/D activado.png',
      name: 'D activado',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = this.imageButtons[0].src;
  }

  change_value(imageNameObject, pAction: string) {
    this.imageSrc = imageNameObject.src;
    const message = {
      id: 'movearm',
      command: pAction,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  stop_changing_value() {
    const message = {
      id: 'movearm',
      command: "stop",
    };
    this.imageSrc = this.imageButtons[0].src;
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }
}
