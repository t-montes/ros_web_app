import { Component } from "@angular/core";
import { WebsocketService } from "../../../websocket.service";
import { SensoricaSocket } from "../sensoricaSocket.service";

@Component({
	selector: "app-measurements",
	templateUrl: "./measurements.component.html",
	styleUrls: ["./measurements.component.css"],
	providers: [WebsocketService, SensoricaSocket]
})
export class MeasurementsComponent
{
	// measurements_value: number;
	param: string;

	temp: string;
	ph: string;
	hum: string;
	co: string;
	met: string;
	hyd: string;

	// air: string;
	// co2: string;

	lastMessage:string
	constructor(private sensoricaSocket: SensoricaSocket)
	{
		this.lastMessage = "0";
		sensoricaSocket.messages.subscribe(msg => {
			console.log("Response from websocket: " + msg);
			// console.log(" id: " + msg['id']);
			// console.log(" param: " + msg['param']);
			// console.log(" value: " + msg['value']);
			this.lastMessage = msg['value'];
			this.param = msg['param'];
			console.log(" param: " + String(this.param));
			if(this.param=="temp")
			{
				this.temp = msg['value'];
			}
			if(this.param=="ph")
			{
				this.ph = msg['value'];
			}
			if(this.param=="hum")
			{
				this.hum = msg['value'];
			}
			if(this.param=="co")
			{
				this.co = msg['value'];
			}
			if(this.param=="met")
			{
				this.met = msg['value'];
			}
			if(this.param=="hyd")
			{
				this.hyd = msg['value'];
			}
			
			// if(this.param=="air")
			// {
			// 	this.air = msg['value'];
			// }
			// if(this.param=="co2")
			// {
			// 	this.co2 = msg['value'];
			// }
		});
	}

	private message = {
		id		:	'get_value',
		object	:	'object',
		action	:	'action',
		param	:	'temp',
		value	:	'0'
	};

	sendMsg()
	{
		console.log("new message from client to websocket: ", this.message);
		this.sensoricaSocket.messages.next(this.message);
	}
}