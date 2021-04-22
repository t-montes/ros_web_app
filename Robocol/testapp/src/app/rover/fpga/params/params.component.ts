import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FPGAService } from '../fpga.service';
import { Message } from "../../../message";
import { MessageService } from "../../../message.service";

@Component({
	selector: 'app-params',
	templateUrl: './params.component.html',
	styleUrls: ['./params.component.css']
})
export class ParamsComponent
{
	//Define the variables that will contain current values, which will be display in the html's labels
	measurements_value: number;
	tab: string;
	message: string;
	lastMessage:string
	num: number;
	messages: Message[];
	//Define the variables that will play as Subscribers to variables
	private _msgs_sub: Subscription;
	private _lMsg_sub: Subscription;
	// Constructor
	constructor(private fpgaService: FPGAService, private messageService: MessageService)
	{
		console.log('ParamsComponent: constructor')
	}
	// On Init
	ngOnInit(): void
	{
		console.log('ParamsComponent: ngOnInit');
		this.tab = "sensorica";
		this.measurements_value = -1;
		this.lastMessage = "test"
		this.getMessages();
		this._msgs_sub = this.fpgaService.onMessage().subscribe((message: Object) => {this.messages = [...this.messages, message["message"]];});
		this._lMsg_sub = this.fpgaService.onMessage().subscribe((message: string) => {this.lastMessage = message["message"]['text'];});
	}
	// On Destroy
	ngOnDestroy()
	{
		console.log('ParamsComponent: ngOnDestroy');
		this.fpgaService.sendMessage("close");
		this._msgs_sub.unsubscribe();
		this._lMsg_sub.unsubscribe();
		this.fpgaService.close();
	}
	getMessages()
	{
		console.log('ParamsComponent: getMessages');
		this.messageService.getMessages(this.tab).subscribe(messages => (this.messages = messages));
	}
	sendMessage()
	{
		this.num = Math.floor(Math.random() * 10)
		console.log('ParamsComponent: sendMessage');
		this.fpgaService.sendMessage(""+this.num);
		console.log(" number: "+this.num);
	}
	change_value(object: string, action: string)
	{
		//var x = document.getElementById("prescale").value;
    	this.fpgaService.change_value(object, action, this.lastMessage);
  	}

  	get_values()
  	{
		this.fpgaService.get_values();
	}
}