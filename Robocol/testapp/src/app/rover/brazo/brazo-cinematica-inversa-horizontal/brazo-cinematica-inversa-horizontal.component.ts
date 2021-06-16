import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from "../../../websocket.service";

@Component({
  selector: 'app-brazo-cinematica-inversa-horizontal',
  templateUrl: './brazo-cinematica-inversa-horizontal.component.html',
  styleUrls: ['./brazo-cinematica-inversa-horizontal.component.css'],
  providers: [WebsocketService, BrazoService]
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
  
  constructor(private brazoService: BrazoService) {}

   private message = {
    id: "",
    object: "",
    value: "",
    action: ""
  };

  ngOnInit(): void {
  	this.imageSrc = this.imageButtons[0].src;
  }

  change_value(imageNameObject, action:string){
    this.preparar_mensaje("change_value", 'inverse_horizontal', action, "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();

    this.imageSrc = imageNameObject.src;
  }

  stop_changing_value(){
    this.preparar_mensaje("stop_changing_value", "", "", "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.imageSrc = this.imageButtons[0].src;
    this.limpiar_mensaje();
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
