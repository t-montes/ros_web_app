import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";
import { Message } from '../../../../libs/models';

const CHAT_URL = "ws://" + window.location.host + "/ws/sensorica/";

@Injectable({
	providedIn: "root"
})
export class SensoricaSocket
{
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService)
	{
		console.log("SensoricaService: constructor")
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