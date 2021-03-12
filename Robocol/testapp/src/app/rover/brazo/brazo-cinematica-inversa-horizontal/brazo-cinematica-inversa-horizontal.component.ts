import { Component, OnInit } from '@angular/core';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-cinematica-inversa-horizontal',
  templateUrl: './brazo-cinematica-inversa-horizontal.component.html',
  styleUrls: ['./brazo-cinematica-inversa-horizontal.component.css']
})
export class BrazoCinematicaInversaHorizontalComponent implements OnInit {

  imageSrc:String;

  imageButtons = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Horizontal/HORIZONTAL inicial.png', name: 'HORIZONTAL inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Horizontal/B activado.png', name: 'B activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Horizontal/F activado.png', name: 'F activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Horizontal/L activado.png', name: 'L activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Horizontal/R activado.png', name: 'R activado'}
  ];
  
  constructor(private brazoService: BrazoService) { }

  ngOnInit(): void {
  	this.imageSrc = this.imageButtons[0].src;
  }

  change_value(imageNameObject, action:String) {
    this.brazoService.change_value('inverse_horizontal', action);
    this.imageSrc = imageNameObject.src;
  }

  stop_changing_value(){
    this.stop_changing_value();
    this.imageSrc = this.imageButtons[0].src;
  }

}
