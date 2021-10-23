import { Component, OnInit, Input } from '@angular/core';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-brazo-cinematica-inversa-horizontal',
  templateUrl: './brazo-cinematica-inversa-horizontal.component.html',
  styleUrls: ['./brazo-cinematica-inversa-horizontal.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoCinematicaInversaHorizontalComponent implements OnInit {
  @Input() brazoService: BrazoService; // decorate the property with @Input()
  imageSrc: String;

  imageButtons = [
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Horizontal/HORIZONTAL inicial.png',
      name: 'HORIZONTAL inicial',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Horizontal/B activado.png',
      name: 'B activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Horizontal/F activado.png',
      name: 'F activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Horizontal/L activado.png',
      name: 'L activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Horizontal/R activado.png',
      name: 'R activado',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = this.imageButtons[0].src;
  }

  change_value(imageNameObject, pAction: string) {
    this.imageSrc = imageNameObject.src;
    const message = {
      id: 'inverse_kinematics_movements',
      action: pAction,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  stop_changing_value() {
    this.imageSrc = this.imageButtons[0].src;
    const message = {
      id: 'inverse_kinematics_movements',
      action: "stop",
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }
}
