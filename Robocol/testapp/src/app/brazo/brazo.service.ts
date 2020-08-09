import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class BrazoService {

  //Define the variables that will be listening to the messages comming from the Socket Server	
  joint_1_value= this.socket.fromEvent<number>('joint_1_value');
  joint_2_value= this.socket.fromEvent<number>('joint_2_value');
  joint_3_value= this.socket.fromEvent<number>('joint_3_value');
  joint_4_value= this.socket.fromEvent<number>('joint_4_value');
  joint_5_value= this.socket.fromEvent<number>('joint_5_value');
  joint_6_value= this.socket.fromEvent<number>('joint_6_value');
  joint_7_value= this.socket.fromEvent<number>('joint_7_value');

  constructor(private socket: Socket) { }

  //Create the function that will emit a message to the Socket Server, asking for the joint's value

  get_joint_value(joint_number: string) {
    this.socket.emit('get_joint_' + joint_number + '_value');
  }

  //Create the function that will tell the Socket Server to start increasing the joint's value, it means the button is pressed

  increase_joint_value(joint_number: string){
    this.socket.emit('increase_joint_' + joint_number + '_value');
  }


  //Create the function that will tell the Socket Server to stop increasing the joint's value, it means the button is unpressed

  stop_increasing_joint_value(joint_number: string){
    this.socket.emit('stop_increasing_joint_' + joint_number + '_value');
  }
}
