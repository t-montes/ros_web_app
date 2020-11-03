import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
	providedIn: 'root',
})
export class EstadoService {
	//Variables que serán escuchadas
	//pestaña ROS
	rostopic_list_value = this.socket.fromEvent<string>('rostopic_list_value'); //rostopic_list_value
	joint_1_value = this.socket.fromEvent<string>('joint_1_value'); //topico echo
	joint_2_value = this.socket.fromEvent<string>('joint_2_value'); //Data
	joint_3_value = this.socket.fromEvent<string>('joint_3_value'); //Type
	joint_4_value = this.socket.fromEvent<string>('joint_4_value'); //publishers
	joint_5_value = this.socket.fromEvent<string>('joint_5_value'); //Subscribers
	//pestaña bateries
	voltaje1_value = this.socket.fromEvent<number>("volatje1_value")
	voltaje2_value = this.socket.fromEvent<number>("volatje2_value")
	voltaje3_value = this.socket.fromEvent<number>("volatje3_value")


	constructor(private socket: Socket) {}
	get_value(object: string) {
		this.socket.emit('get_value', { object: object });
	}

	//Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed

	change_value(object: string, action: string) {
		console.log('Gripper change.');
		this.socket.emit('change_value', { object: object, action: action });
	}

	//Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed

	stop_changing_value() {
		this.socket.emit('stop_changing_value', { mensaje: 'Prueba' });
	}
}
