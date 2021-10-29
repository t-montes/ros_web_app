import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { WebsocketService } from "../../../websocket.service";
import { SensoricaSocket } from "../sensoricaSocket.service";
// import { Measurements } from '@testapp/models';
import { Measurements, Message } from '../../../../../libs/models';
import { Subscription } from 'rxjs';

@Component({
	selector: "app-measurements",
	templateUrl: "./measurements.component.html",
	styleUrls: ["./measurements.component.css"],
	providers: [WebsocketService, SensoricaSocket]
})
export class MeasurementsComponent implements OnInit {
	@Input() sensoricaSocket: SensoricaSocket
	measurements: Measurements;
	message: Message;
	subscription: Subscription;

	constructor() {
		this.measurements = {
			temp: 0,
			ph: 0,
			hum: 0,
			co: 0,
			met: 0,
			hyd: 0,
			// air: 0,
			// co2: 0,
		}
		this.message = {
			id:	'get_value',
			object:	'object',
			action:	'action',
			param:	'temp',
			value:	''
		};
	}

	ngOnInit() {
		this.subscription = this.sensoricaSocket.messages.subscribe(msg => {
			this.measurements[msg.param] = msg.value;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	sendMsg() {
		this.sensoricaSocket.messages.next(this.message);
	}
}