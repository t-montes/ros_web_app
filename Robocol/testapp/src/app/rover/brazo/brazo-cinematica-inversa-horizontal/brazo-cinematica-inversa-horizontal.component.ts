import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-cinematica-inversa-horizontal',
  templateUrl: './brazo-cinematica-inversa-horizontal.component.html',
  styleUrls: ['./brazo-cinematica-inversa-horizontal.component.css']
})
export class BrazoCinematicaInversaHorizontalComponent implements OnInit {

  imageSrc:String;

  imageButtons = [
  {src:'./static/assets/Brazo/Cinematica Inversa/Horizontal/HORIZONTAL inicial.png', name: 'HORIZONTAL inicial'},
  {src:'./static/assets/Brazo/Cinematica Inversa/Horizontal/B activado.png', name: 'B activado'},
  {src:'./static/assets/Brazo/Cinematica Inversa/Horizontal/F activado.png', name: 'F activado'},
  {src:'./static/assets/Brazo/Cinematica Inversa/Horizontal/L activado.png', name: 'L activado'},
  {src:'./static/assets/Brazo/Cinematica Inversa/Horizontal/R activado.png', name: 'R activado'}
  ];

  constructor() { }

  ngOnInit(): void {
  	this.imageSrc = this.imageButtons[0].src;
  }

  changeImage(imageNameObject) {
    this.imageSrc = imageNameObject.src;
  }

}
