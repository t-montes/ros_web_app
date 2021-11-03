import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../estado.service';
import { Bateria } from '../bateria';
import { Wheel } from '../wheel';
import { WebsocketService } from '../../../websocket.service';


@Component({
	selector: 'app-estado-pestania',
	templateUrl: './estado-pestania.component.html',
	styleUrls: ['./estado-pestania.component.css'],
	providers: [WebsocketService, EstadoService],
})
export class EstadoPestaniaComponent implements OnInit {
	lista: Bateria[] = [
		new Bateria("/static/assets/estadoBaterias/0-10.png", "1", "10", "14", "bateria 1"),
		new Bateria("/static/assets/estadoBaterias/51-60.png", "2", "1", "41", "bateria 2"),
		new Bateria("/static/assets/estadoBaterias/91-100.png", "1", "2", "31", "bateria 3"),
		new Bateria("/static/assets/estadoBaterias/61-70.png", "10", "15", "51", "bateria 4"),
		new Bateria("/static/assets/estadoBaterias/Cargando.png", "100", "12", "21", "bateria 5"),
    new Bateria("/static/assets/estadoBaterias/Cargando.png", "100", "12", "21", "bateria 6"),
	]
	//llantas (speed, current , enable)
	//Todas las llantas comienzan desactivadas, por eso la opción inicial es "Enable"
	wheelsList: Wheel[] = [
		new Wheel("0", "0", "Enable"),
		new Wheel("0", "0", "Enable"),
		new Wheel("0", "0", "Enable"),
		new Wheel("0", "0", "Enable"),
	]

	constructor(private estadoService: EstadoService) {
		estadoService.messages.subscribe((msg) => {
			console.log('Response from websocket: ' + msg);
			if (msg['id'] == 'batteries') {
				var idBateria = Number(msg['idBattery'])
				// this.lista[idBateria].amperios = (msg['amps']);
				// this.lista[idBateria].corriente = (msg['ohms']);
				// this.lista[idBateria].nombre = (msg['name']);
				this.lista[idBateria].voltios = (msg['volts']);
				var percentage = Number(msg['volts'])/12 //dividido 12 voltios
				//para obtener la imagen de carga segun el %
				if (percentage <= 0.10 && percentage >= 0.01) { this.lista[idBateria].url = "/static/assets/estadoBaterias/0-10.png" }
				else if (percentage <= 0.20) { this.lista[idBateria].url = "/static/assets/estadoBaterias/11-20.png" }
				else if (percentage <= 0.30) { this.lista[idBateria].url = "/static/assets/estadoBaterias/21-30.png" }
				else if (percentage <= 0.40) { this.lista[idBateria].url = "/static/assets/estadoBaterias/31-40.png" }
				else if (percentage <= 0.50) { this.lista[idBateria].url = "/static/assets/estadoBaterias/41-50.png" }
				else if (percentage <= 0.60) { this.lista[idBateria].url = "/static/assets/estadoBaterias/51-60.png" }
				else if (percentage <= 0.70) { this.lista[idBateria].url = "/static/assets/estadoBaterias/61-70.png" }
				else if (percentage <= 0.80) { this.lista[idBateria].url = "/static/assets/estadoBaterias/71-80.png" }
				else if (percentage <= 0.90) { this.lista[idBateria].url = "/static/assets/estadoBaterias/81-90.png" }
				else if (percentage <= 1) { this.lista[idBateria].url = "/static/assets/estadoBaterias/91-100.png" }
				else this.lista[idBateria].url = "/static/assets/estadoBaterias/Cargando.png"
			}
			else if (msg['id'] == 'wheel') {
				var idllanta = Number(msg['idWheel'])
				this.wheelsList[idllanta].current = (msg['current']);
				this.wheelsList[idllanta].speed = (msg['speed']);
			}
		})
	}

	button_wheel(idLlanta: number, msg?: string) {
		if (idLlanta == 6) {
			//para activar todas las llantas
			for (let i = 0; i < 4; i++) {
				var message = {
					id: "wheel",
					action: msg,
					llanta: i
				};
				console.log('new message from estado_wheel to websocket: ', message);
				this.estadoService.messages.next(message);
				//para el manejo de botones enable y disable
				if (msg == "Enable") { this.wheelsList[i].next_order = "Disable" }
				else { this.wheelsList[i].next_order = "Enable" }
				console.log("Llanta " + i + " tiene next order " + this.wheelsList[i].next_order);
			}
		}
		else {
			//para solo activar una llanta
			var message = {
				id: "wheel",
				action: this.wheelsList[idLlanta].next_order,
				llanta: idLlanta
			};
			//para el manejo de botones
			if (this.wheelsList[idLlanta].next_order == "Enable") {
				this.wheelsList[idLlanta].next_order = "Disable";
			}
			else {
				this.wheelsList[idLlanta].next_order = "Enable"
			}
			console.log('new message from estado_wheel to websocket: ', message);
			this.estadoService.messages.next(message);
		}
	}
	ngOnInit(): void {
	}
	ngOnDestroy() {
	}
}
