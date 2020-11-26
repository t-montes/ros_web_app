import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brazo-cinematica-inversa-rotacion',
  templateUrl: './brazo-cinematica-inversa-rotacion.component.html',
  styleUrls: ['./brazo-cinematica-inversa-rotacion.component.css']
})
export class BrazoCinematicaInversaRotacionComponent implements OnInit {

  imageSrcPitch:String;
  imageSrcRoll:String;
  imageSrcYaw:String;

  imageButtonsPitch = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCH inicial.png', name: 'PITCH inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCHCW activado.png', name: 'PITCHCW activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCHCCW activado.png', name: 'PITCHCW activado'}
  ];

  imageButtonsRoll = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLL inicial.png', name: 'ROLL inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLLCW activado.png', name: 'ROLLCW activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLLCCW activado.png', name: 'ROLLCW activado'}
  ];

  imageButtonsYaw = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/YAW inicial.png', name: 'YAW inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/YAWCW activado.png', name: 'YAWCW activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Rotacion/YAWCCW activado.png', name: 'YAWCW activado'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
  }

  changeImagePitch(index:number) {
    this.imageSrcPitch = this.imageButtonsPitch[index].src;
  }

  changeImageRoll(index:number) {
    this.imageSrcRoll = this.imageButtonsRoll[index].src;
  }

  changeImageYaw(index:number) {
    this.imageSrcYaw = this.imageButtonsYaw[index].src;
  }

}
