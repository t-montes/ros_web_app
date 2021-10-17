import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";

const ARM_SOCKET_URL = "ws://" + window.location.host + "/ws/brazo/piloto/";

@Injectable({
  providedIn: 'root'
})
export class BrazoService
{
	public messages: Subject<any>; 

	constructor(wsService: WebsocketService)
	{
		console.log("BrazoService: constructor");
		this.messages = <Subject<any>>wsService.connect(ARM_SOCKET_URL).map(
			(response: MessageEvent): any => {
				let data = JSON.parse(response.data);
				return data;
			}
		);
	}
}