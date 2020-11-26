import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-cinematica-inversa-vertical',
  templateUrl: './brazo-cinematica-inversa-vertical.component.html',
  styleUrls: ['./brazo-cinematica-inversa-vertical.component.css']
})
export class BrazoCinematicaInversaVerticalComponent implements OnInit {
  
  imageSrc:String;

  imageButtons = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/VERTICAL inicial.png', name: 'VERTICAL inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/U activado.png', name: 'U activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/D activado.png', name: 'D activado'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.imageSrc = this.imageButtons[0].src;
  }

  changeImage(imageNameObject) {
    this.imageSrc = imageNameObject.src;
  }

}
