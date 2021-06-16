import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrazoService } from '../brazo.service';
import { WebsocketService } from "../../../websocket.service";

@Component({
  selector: 'app-brazo-cinematica-directa',
  templateUrl: './brazo-cinematica-directa.component.html',
  styleUrls: ['./brazo-cinematica-directa.component.css'],
  providers: [WebsocketService, BrazoService]
})
export class BrazoCinematicaDirectaComponent implements OnInit {

  //Define the variables that will contain the joint's current value, which will be display in the html's labels


  //Define the variables for the maximum and minimun values of the joints
  joint_1_value = 0;
  joint_2_value = 0;
  joint_3_value = 0;
  joint_4_value = 0;
  joint_5_value = 0;
  joint_6_value = 0;
  joint_7_value = 0;
  gripper_value = 0;

  min_value_joint:number = 0;
  max_value_joint:number = 100;

  //Define the variables for the maximum and minimun values of the gripper

  min_value_gripper:number = 0;
  max_value_gripper:number = 100;

  constructor(private brazoService: BrazoService) {
    brazoService.messages.subscribe(msg => {
      console.log("Response from websocket: id - " + msg["id"] + ", object - " + msg["object"] + ", action - " + msg["action"] + ", value - " + msg["value"]);
      if(msg["id"] == "object_value"){
        if(msg["object"] == "joint_1"){
          this.joint_1_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_2"){
          this.joint_2_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_3"){
          this.joint_3_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_4"){
          this.joint_4_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_5"){
          this.joint_5_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_6"){
          this.joint_6_value = Number(msg["value"]);
        }
        else if(msg["object"] == "joint_7"){
          this.joint_7_value = Number(msg["value"]);
        }
        else if(msg["object"] == "gripper"){
          this.gripper_value = Number(msg["value"]);
        }
      }
    });
   }

  private message = {
    id: "",
    object: "",
    value: "",
    action: ""
  };

  ngOnInit(): void {
    this.get_values();
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to send the current values of the objects

  get_values(){
    this.preparar_mensaje("get_values", "", "", "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object

  change_value(object: string, action: string){
    this.preparar_mensaje("change_value", object, action, "");
    console.log("new message from brazo to websocket: ", this.message);
    this.brazoService.messages.next(this.message);
    this.limpiar_mensaje();
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object

  stop_changing_value(){
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
