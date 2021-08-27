import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";
import { Message } from '../../../../libs/models';

const CHAT_URL = "ws://127.0.0.1:8000/ws/sensorica/";

@Injectable()
export class SensoricaSocket
{
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService)
	{
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