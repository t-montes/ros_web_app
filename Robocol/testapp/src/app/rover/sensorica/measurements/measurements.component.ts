import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SensoricaService } from '../sensorica.service';
import { Message } from "../../../message";
import { MessageService } from "../../../message.service";

@Component({
	selector: 'app-measurements',
	templateUrl: './measurements.component.html',
	styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent
{
	//Define the variables that will contain current values, which will be display in the html's labels
	measurements_value: number;
	tab: string;
	message: string;
	lastMessage:string
	messages: Message[];
	//Define the variables that will play as Subscribers to variables
	// private _temperature_Sub: Subscription;
	private _msgs_sub: Subscription;
	private _lMsg_sub: Subscription;
	// Constructor
	constructor(private sensoricaService: SensoricaService, private messageService: MessageService)
	{
		console.log('MeasurementsComponent: constructor')
	}
	// On Init
	ngOnInit(): void
	{
		console.log('MeasurementsComponent: ngOnInit');
		this.tab = "sensorica";
		// Define initial values for the variables
		this.measurements_value = -1;
		// Make the subscribers subscribe to their correspondent SensoricaService variable
		// this._temperature_Sub = this.sensoricaService.measurements_value.subscribe(value_received => this.measurements_value = value_received);
		// data => this.temperature_value = data
		// console.log(this.sensoricaService.measurements_value);
		// We ask for the values of the joints to start the labels
		// this.change_value('Measurements','get');
		this.getMessages();

		this._msgs_sub = this.sensoricaService.onMessage().subscribe((message: Object) => {this.messages = [...this.messages, message["message"]];});
		// this._lMsg_sub = this.sensoricaService.onMessage().subscribe((message: string) => {this.lastMessage = message["message"]['text'];}); // FUNCIONANDO
		this._lMsg_sub = this.sensoricaService.onMessage().subscribe((message: string) => {this.lastMessage = message["message"]['text'];});
		// this.sensoricaService.onMessage().subscribe(messages => {console.log("Response from websocket: " + Object.keys(messages["message"]) );});//messages["message"]['text']['temp']);});
		// this.sensoricaService.onMessage().subscribe((message: Object) => {this.messages = message["message"];});

		// console.log("MSG: ngOnInit:"+this.messages['text']);
		// console.log(this.messages);
		// this.lastMessage = this.messages[this.messages.length-1]['text'];
		// this.sensoricaService.sendMessage("open");
	}
	// On Destroy
	ngOnDestroy()
	{
		console.log('MeasurementsComponent: ngOnDestroy');
		this.sensoricaService.sendMessage("close");
		this._msgs_sub.unsubscribe();
		this._lMsg_sub.unsubscribe();
		this.sensoricaService.close();
	}
	getMessages()
	{
		console.log('MeasurementsComponent: getMessages');
		this.messageService.getMessages(this.tab).subscribe(messages => (this.messages = messages));
		// console.log("MSG: getMessages:"+this.messages['text']);
		// console.log(this.messages);
	}
	sendMessage()
	{
		console.log('MeasurementsComponent: sendMessage');
		this.sensoricaService.sendMessage(""+Math.floor(Math.random() * 100));
		console.log("last: "+this.lastMessage);
		// this.lastMessage = this.messages[0]['text'];
		// this.lastMessage = this.messages[this.messages.length-1]['text'];
		// (document.getElementById("temperature") as HTMLInputElement).value = this.messages[this.messages.length-1]['text'];
		// console.log("MSG: sendMessage:"+this.messages['message']);
		// console.log(this.messages);
		// alert(JSON.stringify(this.messages[0]['text']));
		// for(var property in this.messages)
		// {
		//   alert(property + "=" + this.messages[property]);
		// }
	}
}













  // This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
  // get_value(object: string)
  // {
  //   this.sensoricaService.get_value(object);
  // }
  // This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
  // change_value(object: string, action: string)
  // {
  //   this.sensoricaService.change_value(object, action);
  //   // value_received => this.temperature_value = this.sensoricaService.temperature_value
  //   // this.temperature_value = this.sensoricaService.temperature_value;
  // }
  // This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
  // stop_changing_value()
  // {
  //   this.sensoricaService.stop_changing_value();
  // }


  // this.socketService.onMessage().subscribe((message: Object) => {this.messages = [...this.messages, message["message"]];});


// public chartType: string = 'line';
//
// public chartDatasets: Array<any> = [
//   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//   { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
// ];
//
// public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
// public chartColors: Array<any> = [
//   {
//     backgroundColor: 'rgba(105, 0, 132, .2)',
//     borderColor: 'rgba(200, 99, 132, .7)',
//     borderWidth: 2,
//   },
//   {
//     backgroundColor: 'rgba(0, 137, 132, .2)',
//     borderColor: 'rgba(0, 10, 130, .7)',
//     borderWidth: 2,
//   }
// ];
//
// public chartOptions: any = {
//   responsive: true
// };
// public chartClicked(e: any): void { }
// public chartHovered(e: any): void { }

// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-measurements',
//   templateUrl: './measurements.component.html',
//   styleUrls: ['./measurements.component.css']
// })
// export class MeasurementsComponent implements OnInit
// {
//   public chartType: string = 'line';
//
//   constructor() { }
//
//   ngOnInit() {
//     public chartDatasets: Array<any> = [
//       { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//       { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
//     ];
//
//     public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
//     public chartColors: Array<any> =
//     [
//       {
//         backgroundColor: 'rgba(105, 0, 132, .2)',
//         borderColor: 'rgba(200, 99, 132, .7)',
//         borderWidth: 2,
//       },
//       {
//         backgroundColor: 'rgba(0, 137, 132, .2)',
//         borderColor: 'rgba(0, 10, 130, .7)',
//         borderWidth: 2,
//       }
//     ];
//
//     public chartOptions: any = {responsive: true};
//     public chartClicked(e: any): void { }
//     public chartHovered(e: any): void { }
//   }
// }
// export class MeasurementsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit()
//   {
//   }
//
// }
