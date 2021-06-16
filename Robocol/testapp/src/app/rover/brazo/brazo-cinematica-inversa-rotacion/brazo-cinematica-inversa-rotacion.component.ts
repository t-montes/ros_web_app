import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from "../../../websocket.service";

@Component({
  selector: 'app-brazo-cinematica-inversa-rotacion',
  templateUrl: './brazo-cinematica-inversa-rotacion.component.html',
  styleUrls: ['./brazo-cinematica-inversa-rotacion.component.css'],
  providers: [WebsocketService, BrazoService]
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

  constructor(private brazoService: BrazoService) {}
  
  private message = {
    id: "",
    object: "",
    value: "",
    action: ""
  };

  ngOnInit(): void {
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
  }

  changeImagePitch(index:number, action:string) {
    this.change_value('Pitch', action);
    this.imageSrcPitch = this.imageButtonsPitch[index].src;
  }

  changeImageRoll(index:number, action:string) {
    this.change_value('Roll', action);
    this.imageSrcRoll = this.imageButtonsRoll[index].src;
  }

  changeImageYaw(index:number, action:string) {
    this.change_value('Yaw', action);
    this.imageSrcYaw = this.imageButtonsYaw[index].src;
  }

  change_value(object: string, action: string){
    this.preparar_mensaje("change_value", object, action, "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();
  }

  stop_changing_value(){
    this.preparar_mensaje("stop_changing_value", "", "", "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();
    this.imageSrcYaw = this.imageButtonsYaw[0].src;
    this.imageSrcRoll = this.imageButtonsRoll[0].src;
    this.imageSrcPitch = this.imageButtonsPitch[0].src;
  }

  limpiar_mensaje(){
    this.message.id = "";
    this.message.object = "";
    this.message.action = "";
    this.message.value = "";
  }

  preparar_mensaje(id:string, object:string, action:string, value:string){
    this.message.id = id;
    this.message.object = object;
    this.message.action = action;
    this.message.value = value;
  }

}
