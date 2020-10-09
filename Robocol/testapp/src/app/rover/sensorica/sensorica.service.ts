import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SensoricaService {

  //Define the variables that will be listening to the messages comming from the Socket Server
  joint_1_value= this.socket.fromEvent<number>('joint_1_value');
  joint_2_value= this.socket.fromEvent<number>('joint_2_value');
  joint_3_value= this.socket.fromEvent<number>('joint_3_value');
  joint_4_value= this.socket.fromEvent<number>('joint_4_value');
  joint_5_value= this.socket.fromEvent<number>('joint_5_value');
  joint_6_value= this.socket.fromEvent<number>('joint_6_value');
  joint_7_value= this.socket.fromEvent<number>('joint_7_value');
  gripper_value= this.socket.fromEvent<number>('gripper_value');

  temperature_value= this.socket.fromEvent<number>('Temperature');

  constructor(private socket: Socket) { }

  //Create the function that will emit a message to the Socket Server, asking for a joint's value or the gripper's value
  //{object (is the name of the attribute): object (it could be ¨joint_ + a number¨ or the word ¨gripper¨)}
  get_value(object: string)
  {
    this.socket.emit('get_value', {object: object});
    console.log("I'm a!");
  }

  //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed
  change_value(object: string, action: string)
  {
    console.log('Data change.');
    console.log(' Object: '+object);
    console.log(' Action: '+action);
    this.socket.emit('change_value', {object: object, action: action});
  }

  //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed
  stop_changing_value()
  {
    this.socket.emit('stop_changing_value');
  }
}
