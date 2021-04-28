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

	led7_src:String;
	led6_src:String;
	led5_src:String;
	led4_src:String;
	led3_src:String;
	led2_src:String;
	led1_src:String;
	led0_src:String;

	led7: number;
	led6: number;
	led5: number;
	led4: number;
	led3: number;
	led2: number;
	led1: number;
	led0: number;

	pwm_1: number;
	pwm_2: number;
	pwm_3: number;
	pwm_4: number;

	pwm_1_slider: HTMLElement;
	pwm_1_input: HTMLElement;

	imgs_but = [
	{src:'/static/assets/FPGA/LED_off.png', name: 'LED off'},
	{src:'/static/assets/FPGA/LED_on.png', name: 'LED on'}, 
	];

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
		// LEDs values init
		this.led7 = 0;
		this.led6 = 0;
		this.led5 = 0;
		this.led4 = 0;
		this.led3 = 0;
		this.led2 = 0;
		this.led1 = 0;
		this.led0 = 0;
		// PWM values init
		this.pwm_1 = 0;
		this.pwm_2 = 0;
		this.pwm_3 = 0;
		this.pwm_4 = 0;

		this.lastMessage = "test"
		this.getMessages();
		this._msgs_sub = this.fpgaService.onMessage().subscribe((message: Object) => {this.messages = [...this.messages, message["message"]];});
		this._lMsg_sub = this.fpgaService.onMessage().subscribe((message: string) => {this.lastMessage = message["message"]['text'];});
		this.led7_src = this.imgs_but[0].src;
		this.led6_src = this.imgs_but[0].src;
		this.led5_src = this.imgs_but[0].src;
		this.led4_src = this.imgs_but[0].src;
		this.led3_src = this.imgs_but[0].src;
		this.led2_src = this.imgs_but[0].src;
		this.led1_src = this.imgs_but[0].src;
		this.led0_src = this.imgs_but[0].src;

		this.pwm_1_slider = document.getElementById("pwm_range_1");
		this.pwm_1_input = document.getElementById("pwm_1_inp");
		console.log(this.pwm_1_input.attributes);
		// output.innerHTML = this.pwm_1_slider.value;
		this.pwm_1_input.innerHTML = "JAJAJAjA";
		// // Update the current slider value (each time you drag the slider handle)
		// this.pwm_1_slider.oninput = function()
		// {
		//   // this.pwm_1_input.innerHTML = this.value;
		// }
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

	led_change(imageNameObject, led:number)
	{
		console.log("Changing led.");
		if(led==7)
		{
			if(this.led7 == 0)
			{
				console.log("Turning on.");
				this.led7_src = this.imgs_but[1].src;
				this.led7 = 1;
			}
			else if(this.led7 == 1)
			{
				console.log("Turning off.");
				this.led7_src = this.imgs_but[0].src;
				this.led7 = 0;
			}
		}
		else if(led==6)
		{
			if(this.led6 == 0)
			{
				console.log("Turning on.");
				this.led6_src = this.imgs_but[1].src;
				this.led6 = 1;
			}
			else if(this.led6 == 1)
			{
				console.log("Turning off.");
				this.led6_src = this.imgs_but[0].src;
				this.led6 = 0;
			}
		}
		else if(led==5)
		{
			if(this.led5 == 0)
			{
				console.log("Turning on.");
				this.led5_src = this.imgs_but[1].src;
				this.led5 = 1;
			}
			else if(this.led5 == 1)
			{
				console.log("Turning off.");
				this.led5_src = this.imgs_but[0].src;
				this.led5 = 0;
			}
		}
		else if(led==4)
		{
			if(this.led4 == 0)
			{
				console.log("Turning on.");
				this.led4_src = this.imgs_but[1].src;
				this.led4 = 1;
			}
			else if(this.led4 == 1)
			{
				console.log("Turning off.");
				this.led4_src = this.imgs_but[0].src;
				this.led4 = 0;
			}
		}
		else if(led==3)
		{
			if(this.led3 == 0)
			{
				console.log("Turning on.");
				this.led3_src = this.imgs_but[1].src;
				this.led3 = 1;
			}
			else if(this.led3 == 1)
			{
				console.log("Turning off.");
				this.led3_src = this.imgs_but[0].src;
				this.led3 = 0;
			}
		}
		else if(led==2)
		{
			if(this.led2 == 0)
			{
				console.log("Turning on.");
				this.led2_src = this.imgs_but[1].src;
				this.led2 = 1;
			}
			else if(this.led2 == 1)
			{
				console.log("Turning off.");
				this.led2_src = this.imgs_but[0].src;
				this.led2 = 0;
			}
		}
		else if(led==1)
		{
			if(this.led1 == 0)
			{
				console.log("Turning on.");
				this.led1_src = this.imgs_but[1].src;
				this.led1 = 1;
			}
			else if(this.led1 == 1)
			{
				console.log("Turning off.");
				this.led1_src = this.imgs_but[0].src;
				this.led1 = 0;
			}
		}
		else if(led==0)
		{
			if(this.led0 == 0)
			{
				console.log("Turning on.");
				this.led0_src = this.imgs_but[1].src;
				this.led0 = 1;
			}
			else if(this.led0 == 1)
			{
				console.log("Turning off.");
				this.led0_src = this.imgs_but[0].src;
				this.led0 = 0;
			}
		}
	}
}