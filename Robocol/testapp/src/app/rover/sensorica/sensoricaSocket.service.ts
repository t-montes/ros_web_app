import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";

const CHAT_URL = "ws://127.0.0.1:8000/ws/sensorica/";

export interface Message
{
	id		:	string;
	object	:	string;
	action	:	string;
	param	:	string;
	value	:	string;
}

@Injectable()
export class SensoricaSocket
{
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService)
	{
		console.log("SensoricaSocket: constructor");
		this.messages = <Subject<Message>>wsService.connect(CHAT_URL).map(
			(response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					id: data.id,
					object: data.object,
					action: data.action,
					param: data.param,
					value: data.value
				};
			}
		);
	}
}