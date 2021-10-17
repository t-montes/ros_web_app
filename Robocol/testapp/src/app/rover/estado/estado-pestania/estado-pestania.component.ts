import { Component, OnInit } from '@angular/core';
/*import * as $ from "jquery";*/
declare var $: any;
/* { $ } from "../jquery-3.1.1";*/
// import { $ } from "../jquery-3.1.1";
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';
import { Bateria } from '../bateria';
import { WebsocketService } from '../../../websocket.service';


@Component({
	selector: 'app-estado-pestania',
	templateUrl: './estado-pestania.component.html',
	styleUrls: ['./estado-pestania.component.css'], 
	providers: [WebsocketService,EstadoService ],
})
export class EstadoPestaniaComponent implements OnInit {
	lista: Bateria[] = [
		new Bateria("/static/assets/estadoBaterias/0-10.png", "1", "10", "14", "bateria 1"),
		new Bateria("/static/assets/estadoBaterias/51-60.png", "2", "1", "41", "bateria 2"),
		new Bateria("/static/assets/estadoBaterias/91-100.png", "1", "2", "31", "bateria 3"),
		new Bateria("/static/assets/estadoBaterias/61-70.png", "10", "15", "51", "bateria 4"),
		new Bateria("/static/assets/estadoBaterias/Cargando.png", "100", "12", "21", "bateria 5"),
	]
	// lista:string[]=["../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png"];

	voltaje1_value: number; //topico echo
	voltaje2_value: number; //Data
	voltaje3_value: number; //Type

	private _voltaje1_value: Subscription; //topico echo
	private _voltaje2_value: Subscription; //Data
	private _voltaje3_value: Subscription; //Type
	constructor(private estadoService: EstadoService) {
		estadoService.messages.subscribe((msg) => {
			console.log('Response from websocket: ' + msg);})
	 }

	button_wheel(idLlanta: number, msg: string) {
		const message = {
			id: "wheel",
			action: msg,
			llanta : idLlanta
		};
		console.log('new message from estado_wheel to websocket: ', message);
		this.estadoService.messages.next(message);
	}
	ngOnInit(): void {
	}
	ngOnDestroy() {
	}
}