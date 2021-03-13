import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class EstadoService
{
	private socket;
	constructor(private router: Router)
	{
		console.log("EstadoService: constructor");
		this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
	}
	sendMessage(message: string)
	{
		console.log("EstadoService: sendMessage");
		this.socket.send(JSON.stringify({ message: message }));
	}
	onMessage(): Observable<Object>
	{
		console.log("EstadoService: onMessage");
		return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data)); };});
	}
	// close()
	// {
	// 	console.log("BrazoService: close");
	// 	this.socket.close();
	// 	// this.socket.terminate();
	// };




	get_value(object: string)
	{
		console.log("get_value");
		// this.socket.emit('get_value', { object: object });
	}

	//Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed

	change_value(object: string, action: string)
	{
		console.log("change_value");
		// this.socket.emit('change_value', { object: object, action: action });
	}

	//Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed

	stop_changing_value()
	{
		console.log("stop_changing_value");
		// this.socket.emit('stop_changing_value', { mensaje: 'Prueba' });
	}
}
