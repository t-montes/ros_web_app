import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrazoService {

  //Define the variables that will be listening to the messages comming from the Socket Server  
  joint_1_value= this.socketIO.fromEvent<number>('joint_1_value');
  joint_2_value= this.socketIO.fromEvent<number>('joint_2_value');
  joint_3_value= this.socketIO.fromEvent<number>('joint_3_value');
  joint_4_value= this.socketIO.fromEvent<number>('joint_4_value');
  joint_5_value= this.socketIO.fromEvent<number>('joint_5_value');
  joint_6_value= this.socketIO.fromEvent<number>('joint_6_value');
  joint_7_value= this.socketIO.fromEvent<number>('joint_7_value');
  gripper_value= this.socketIO.fromEvent<number>('gripper_value');


  private socket;
  constructor(private router: Router,private socketIO: Socket)
  {
    console.log("BrazoService: constructor");
    this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
  }
  sendMessage(message: string)
  {
    console.log("BrazoService: sendMessage");
    this.socket.send(JSON.stringify({ message: message }));
  }
  onMessage(): Observable<Object>
  {
    console.log("BrazoService: onMessage");
    return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data)); };});
  }
  close()
  {
    console.log("BrazoService: close");
    this.socket.close();
    // this.socket.terminate();
  };

  // constructor(private socket: Socket) { }

  //Create the function that will emit a message to the Socket Server, asking for a joint's value or the gripper's value
  //{object (is the name of the attribute): object (it could be ¨joint_ + a number¨ or the word ¨gripper¨)}
  get_value(object: string) {
    // this.socket.emit('get_value', {object: object});
  }

  // //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed

  change_value(object: string, action: string){
    // console.log('Gripper change.');
    // this.socket.emit('change_value', {object: object, action: action});
  }


  //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed

  stop_changing_value(){
    // this.socket.emit('stop_changing_value', {'mensaje': 'HOLA'});
  }
}
