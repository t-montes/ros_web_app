import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";

const ARM_SOCKET_URL = "ws://" + window.location.host + "/ws/brazo/piloto/";

export interface Message
{
	id		:	string;
	object	:	string;
	value	:	string;
  	action	:	string;
}

@Injectable({
  providedIn: 'root'
})
export class BrazoService
{
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService)
	{
		console.log("BrazoService: constructor");
		this.messages = <Subject<Message>>wsService.connect(ARM_SOCKET_URL).map(
			(response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					id: data.id,
					object: data.object,
					action: data.action,
					value: data.value
				};
			}
		);
	}
}