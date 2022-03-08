import { Component, OnInit, Input } from '@angular/core';
import { NavegacionService } from '../navegacion.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css'],
  providers: [WebsocketService, NavegacionService],
})
export class HorizontalComponent implements OnInit {
  @Input() navegacionService: NavegacionService; // decorate the property with @Input()
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
      id: 'control',
      command: pAction,
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

  stop_changing_value() {
    this.imageSrc = this.imageButtons[0].src;
    const message = {
      id: 'control',
      command: 'Stop',
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }
}
