import { Component, OnInit } from '@angular/core';
import { BrazoService } from '../brazo.service';

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

  constructor(private brazoService: BrazoService) { }

  ngOnInit(): void {
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
  }

  changeImagePitch(index:number, action:String) {
    this.brazoService.change_value('Pitch', action);
    this.imageSrcPitch = this.imageButtonsPitch[index].src;
  }

  changeImageRoll(index:number, action:String) {
    this.brazoService.change_value('Roll', action);
    this.imageSrcRoll = this.imageButtonsRoll[index].src;
  }

  changeImageYaw(index:number, action:String) {
    this.brazoService.change_value('Yaw', action);
    this.imageSrcYaw = this.imageButtonsYaw[index].src;
  }

  stop_changing_value(){
    this.brazoService.stop_changing_value();
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
  }

}
