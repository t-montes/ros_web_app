import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from "../../../websocket.service";

@Component({
  selector: 'app-brazo-cinematica-inversa-vertical',
  templateUrl: './brazo-cinematica-inversa-vertical.component.html',
  styleUrls: ['./brazo-cinematica-inversa-vertical.component.css'],
  providers: [WebsocketService, BrazoService]
})
export class BrazoCinematicaInversaVerticalComponent implements OnInit {
  
  imageSrc:String;

  imageButtons = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/VERTICAL inicial.png', name: 'VERTICAL inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/U activado.png', name: 'U activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/D activado.png', name: 'D activado'}
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

  change_value(imageNameObject, action: string) {
    this.imageSrc = imageNameObject.src;
    this.preparar_mensaje("change_value", "inverse_vertical", action, "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();
  }

  stop_changing_value(){
    this.imageSrc = this.imageButtons[0].src;
    this.preparar_mensaje("stop_changing_value", "", "", "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
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
