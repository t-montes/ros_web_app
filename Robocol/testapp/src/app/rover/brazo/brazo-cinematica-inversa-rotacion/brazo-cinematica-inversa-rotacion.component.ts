import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-brazo-cinematica-inversa-rotacion',
  templateUrl: './brazo-cinematica-inversa-rotacion.component.html',
  styleUrls: ['./brazo-cinematica-inversa-rotacion.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoCinematicaInversaRotacionComponent implements OnInit {
  imageSrcPitch: String;
  imageSrcRoll: String;
  imageSrcYaw: String;

  imageButtonsPitch = [
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCH inicial.png',
      name: 'PITCH inicial',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCHCW activado.png',
      name: 'PITCHCW activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/PITCHCCW activado.png',
      name: 'PITCHCW activado',
    },
  ];

  imageButtonsRoll = [
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLL inicial.png',
      name: 'ROLL inicial',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLLCW activado.png',
      name: 'ROLLCW activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/ROLLCCW activado.png',
      name: 'ROLLCW activado',
    },
  ];

  imageButtonsYaw = [
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/YAW inicial.png',
      name: 'YAW inicial',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/YAWCW activado.png',
      name: 'YAWCW activado',
    },
    {
      src: '/static/assets/Brazo/Cinematica Inversa/Rotacion/YAWCCW activado.png',
      name: 'YAWCW activado',
    },
  ];

  constructor(private brazoService: BrazoService) {}

  ngOnInit(): void {
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
  }

  changeImage(pMotor:string, index: number, action: string){
    if(pMotor == "Pitch"){
      this.change_value(pMotor, action);
      this.imageSrcPitch = this.imageButtonsPitch[index].src;
    }
    else if(pMotor == "Roll"){
      this.change_value(pMotor, action);
      this.imageSrcRoll = this.imageButtonsRoll[index].src;
    }
    else if(pMotor == "Yaw"){
      this.change_value(pMotor, action);
      this.imageSrcYaw = this.imageButtonsYaw[index].src;
    }
  }

  change_value(pMotor: string, pAction: string) {
    const message = {
      id: 'inverse_kinematics_rotation',
      motor: pMotor,
      action: pAction,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  stop_changing_value(pMotor: string) {
    const message = {
      id: 'inverse_kinematics_rotation',
      motor: pMotor,
      action: 'stop',
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
  }
}
