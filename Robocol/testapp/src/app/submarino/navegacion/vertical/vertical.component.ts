import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
