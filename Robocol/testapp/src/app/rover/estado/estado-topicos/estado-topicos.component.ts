import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';
import { Message } from "../../../message";
import { MessageService } from "../../../message.service";
import { WebsocketService } from '../../../websocket.service';


@Component({
	selector: 'app-estado-topicos',
	templateUrl: './estado-topicos.component.html',
	styleUrls: ['./estado-topicos.component.css'],
})
export class EstadoTopicosComponent implements OnInit
{
	tab: string;
	lastMessage:string
	message: string;
	messages: Message[];

	constructor( private estadoService: EstadoService)
	{
		
	}

	ngOnInit(): void 
	{
			}

}
