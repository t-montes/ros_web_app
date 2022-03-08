import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css'],
})
export class HorizontalComponent implements OnInit {
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
      id: 'movearm',
      command: pAction,
    };
    console.log('new message from brazo to websocket: ', message);
    // this.brazoService.messages.next(message);
  }

  stop_changing_value() {
    this.imageSrc = this.imageButtons[0].src;
    const message = {
      id: 'movearm',
      command: 'stop',
    };
    console.log('new message from brazo to websocket: ', message);
    // this.brazoService.messages.next(message);
  }
}
