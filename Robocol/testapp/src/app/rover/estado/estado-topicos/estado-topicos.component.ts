import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';
import { Message } from "../../../message";
import { MessageService } from "../../../message.service";

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

	constructor(private estadoService: EstadoService, private messageService: MessageService)
	{
		console.log('EstadoTopicosComponent: constructor')
	}

	ngOnInit(): void 
	{
		console.log('EstadoTopicosComponent: ngOnInit');
		this.tab = "estadoTopicos";
		this.getMessages();
		this.estadoService.onMessage().subscribe((message: Object) => {this.messages = [...this.messages, message["message"]];});
		this.estadoService.onMessage().subscribe((message: string) => {this.lastMessage = message["message"]['text'];});
	}
	ngOnDestroy()
	{
		console.log('EstadoTopicosComponent: ngOnDestroy');
	}

	getMessages()
	{
		console.log('EstadoTopicosComponent: getMessages');
		this.messageService.getMessages(this.tab).subscribe(messages => (this.messages = messages));
	}
	listTopics()
	{
		console.log('EstadoTopicosComponent: listTopics');
		this.estadoService.sendMessage("List");
		console.log("last: "+this.lastMessage);
	}
	sendMessage()
	{
		console.log('EstadoTopicosComponent: sendMessage');
		this.estadoService.sendMessage("Echo");
		console.log("last: "+this.lastMessage);
	}
}
