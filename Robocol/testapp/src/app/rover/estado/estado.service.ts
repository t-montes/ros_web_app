import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "../../websocket.service";

const STATUS_SOCKET_URL = "ws://" + window.location.host + "/ws/estado/";

@Injectable({
  providedIn: 'root'
})
export class EstadoService
{
	public messages: Subject<any>;

	constructor(wsService: WebsocketService)
	{
		console.log("EstadoService: constructor");
		this.messages = <Subject<any>>wsService.connect(STATUS_SOCKET_URL).map(
			(response: MessageEvent): any => {
				let data = JSON.parse(response.data);
				return data;
			}
		);
	}
}