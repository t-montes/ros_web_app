import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';

@Component({
	selector: 'app-estado-topicos',
	templateUrl: './estado-topicos.component.html',
	styleUrls: ['./estado-topicos.component.css'],
})
export class EstadoTopicosComponent implements OnInit {
	rostopic_list_value: string; //rostopic_list_value
	joint_1_value: string; //topico echo
	joint_2_value: string; //Data
	joint_3_value: string; //Type
	joint_4_value: string; //publishers
	joint_5_value: string; //subscribers

	//Define the variables that will play as Subscribers to the estadoService's variables, so that when they (estadoService variables) change, these variables (Component) will change too

	private _rostopic_list_value: Subscription; //rostopic_list_value
	private _joint_1_value: Subscription; //topico echo
	private _joint_2_value: Subscription; //Data
	private _joint_3_value: Subscription; //Type
	private _joint_4_value: Subscription; //publishers
	private _joint_5_value: Subscription; //subscribers

	constructor(private estadoService: EstadoService) {}

	ngOnInit(): void {
		//Define initial values for the variables
		this.rostopic_list_value = 'Prueba 1'; //rostopic_list_value
		this.joint_1_value = 'Prueba 2'; //topico echo
		this.joint_2_value = 'Prueba 3'; //Data
		this.joint_3_value = 'Prueba 4'; //Type
		this.joint_4_value = 'Prueba 5'; //publishers
		this.joint_5_value = 'Prueba 6'; //subscribers

		//Make the subscribers subscribe to their correspondent estadoService variable
		this._rostopic_list_value = this.estadoService.rostopic_list_value.subscribe(
			(value_received) => (this.rostopic_list_value = value_received)
		); //rostopic_list_value
		this._joint_1_value = this.estadoService.joint_1_value.subscribe(
			(value_received) => (this.joint_1_value = value_received)
		); //topico echo
		this._joint_2_value = this.estadoService.joint_2_value.subscribe(
			(value_received) => (this.joint_2_value = value_received)
		); //Data
		this._joint_3_value = this.estadoService.joint_3_value.subscribe(
			(value_received) => (this.joint_3_value = value_received)
		); //Type
		this._joint_4_value = this.estadoService.joint_4_value.subscribe(
			(value_received) => (this.joint_4_value = value_received)
		); //publishers
		this._joint_5_value = this.estadoService.joint_5_value.subscribe(
			(value_received) => (this.joint_5_value = value_received)
		);

		//We ask for the values of the joints to start the labels
		this.get_value('rostopic_list'); //rostopic_list_value
		this.get_value('joint_1'); //topico echo
		this.get_value('joint_2'); //Data
		this.get_value('joint_3'); //Type
		this.get_value('joint_4'); //publishers
		this.get_value('joint_5'); //subscribers
	}
	ngOnDestroy() {
		this._rostopic_list_value.unsubscribe(); //rostopic_list_value
		this._joint_1_value.unsubscribe(); //topico echo
		this._joint_2_value.unsubscribe(); //Data
		this._joint_3_value.unsubscribe(); //Type
		this._joint_4_value.unsubscribe(); //publishers
		this._joint_5_value.unsubscribe();
	}
	//This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object

	get_value(object: string) {
		this.estadoService.get_value(object);
	}

	//This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object

	change_value(object: string, action: string) {
		this.estadoService.change_value(object, action);
	}

	//This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object

	stop_changing_value() {
		this.estadoService.stop_changing_value();
		console.log('joint_2');
	}
}
