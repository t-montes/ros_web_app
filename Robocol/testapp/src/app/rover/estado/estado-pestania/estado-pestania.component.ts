import { Component, OnInit } from '@angular/core';
/*import * as $ from "jquery";*/
declare var $: any;
/* { $ } from "../jquery-3.1.1";*/
// import { $ } from "../jquery-3.1.1";
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';
import {Bateria} from '../bateria'

@Component({
  selector: 'app-estado-pestania',
  templateUrl: './estado-pestania.component.html',
  styleUrls: ['./estado-pestania.component.css']
})
export class EstadoPestaniaComponent implements OnInit
{
  lista: Bateria[] =[
    new Bateria("/static/assets/estadoBaterias/0-10.png", "1","10", "14","bateria 1"),
    new Bateria("/static/assets/estadoBaterias/51-60.png", "2","1", "41","bateria 2"),
    new Bateria("/static/assets/estadoBaterias/91-100.png", "1","2", "31","bateria 3"),
    new Bateria("/static/assets/estadoBaterias/61-70.png", "10","15", "51","bateria 4"),
    new Bateria("/static/assets/estadoBaterias/Cargando.png", "100","12", "21","bateria 5"),
  ]
	// lista:string[]=["../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png","../../../assets/estadoBaterias/0-10.png"];

	voltaje1_value: number ; //topico echo
	voltaje2_value: number ; //Data
	voltaje3_value: number ; //Type

	private _voltaje1_value: Subscription; //topico echo
	private _voltaje2_value: Subscription; //Data
	private _voltaje3_value: Subscription; //Type

	constructor(private estadoService: EstadoService) { }

	ngOnInit(): void
	{
	  	//Define initial values for the variables
		this.voltaje1_value = 12;
		this.voltaje2_value = 13;
		this.voltaje3_value = 14;

		// //Make the subscribers subscribe to their correspondent estadoService variable
		// this._voltaje1_value = this.estadoService.voltaje1_value.subscribe(
		// 	(value_received) => (this.voltaje1_value = value_received)
		// ); //topico echo
		// this._voltaje2_value = this.estadoService.voltaje2_value.subscribe(
		// 	(value_received) => (this.voltaje2_value = value_received)
		// ); //Data
		// this._voltaje3_value = this.estadoService.voltaje3_value.subscribe(
		// 	(value_received) => (this.voltaje3_value = value_received)
		// ); //Type


		//We ask for the values of the joints to start the labels
		this.get_value('volate1'); //topico echo
		this.get_value('volate2'); //Data
		this.get_value('volate3'); //Type
	}
	ngOnDestroy()
	{

		// this._voltaje1_value.unsubscribe(); //topico echo
		// this._voltaje2_value.unsubscribe(); //Data
		// this._voltaje3_value.unsubscribe(); //Type

	}
	sendMessage()
	  {
	    console.log('EstadoPestaniaComponent: sendMessage');
	    this.estadoService.sendMessage("Status");
	  }
	//This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
	get_value(object: string)
	{
		this.estadoService.get_value(object);
	}

	//This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
	change_value(object: string, action: string)
	{
		this.estadoService.change_value(object, action);
	}

	//This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
	stop_changing_value()
	{
		this.estadoService.stop_changing_value();
	}
}

function refreshLevel(level, bat)
{
	level = level + 2.6
	document.getElementById("level"+bat).style.setProperty('--acid-height', (level * document.getElementById("battery").clientHeight) + "px");
	level = level - 2.6
	if (level  < 0.25) {
		//document.body.style.setProperty('--background-color', "#c0392b");
		let color = 'rgba(192, 57, 43'
		$("#ola1_"+bat).css({'fill':color+', 0.3)'})
		$("#ola2_"+bat).css({'fill':color+', 0.5)'})
		$("#ola3_"+bat).css({'fill':color+')'})
		$("#level"+bat).css({'background':color+')'})

	} else if (level < 0.5) {
			//document.body.style.setProperty('--background-color', "#f39c12");
		let color = 'rgba(243, 156, 18'
		$("#ola1_"+bat).css({'fill':color+', 0.3)'})
		$("#ola2_"+bat).css({'fill':color+', 0.5)'})
		$("#ola3_"+bat).css({'fill':color+')'})
		$("#level"+bat).css({'background':color+')'})
	} else {
		//document.body.style.setProperty('--background-color', "#27ae60");
		let color = 'rgba(39, 174, 96'
		$("#ola1_"+bat).css({'fill':color+', 0.3)'})
		$("#ola2_"+bat).css({'fill':color+', 0.5)'})
		$("#ola3_"+bat).css({'fill':color+')'})
		$("#level"+bat).css({'background':color+')'})
	}
}
//refreshLevel(0.9,0)
//refreshLevel(0.4,1)
//refreshLevel(0.2,2)
function changeButtonStatus(nBut, state)
{

	if (state==false)
	{
		$("#B"+nBut).attr('class', 'button_disabled_motors');
		$("#B"+nBut).html("Disabled")
		$("#B"+nBut).attr('onclick', 'enviarToggle(this.id, true)');

	}
		else
	{
		$("#B"+nBut).attr('class', 'button_enabled_motors');
		$("#B"+nBut).html("Enabled")
		$("#B"+nBut).attr('onclick', 'enviarToggle(this.id, false)');
	}

}

//*************************
const TOGGLE_MOT_STATUS = 0
const CURRENT_TH = 10
const TEMP_TH = 50
/*let addr = 'ws://'+$(location).attr('href').replace("http://", "").replace("status", "")+'ws/bgUpdate_status/'
var mainSocket = new WebSocket(addr);

mainSocket.onmessage = function(e)
{
	var data = JSON.parse(e.data);

	$("#L0_speed").html('Speed: '+data['L0_speed']+" RPM")
	$("#L1_speed").html('Speed: '+data['L1_speed']+" RPM")
	$("#L2_speed").html('Speed: '+data['L2_speed']+" RPM")
	$("#R0_speed").html('Speed: '+data['R0_speed']+" RPM")
	$("#R1_speed").html('Speed: '+data['R1_speed']+" RPM")
	$("#R2_speed").html('Speed: '+data['R2_speed']+" RPM")

	$("#L0_current").html('Current: '+data['L0_current'].toFixed(2)+" A")
	$("#L1_current").html('Current: '+data['L1_current'].toFixed(2)+" A")
	$("#L2_current").html('Current: '+data['L2_current'].toFixed(2)+" A")
	$("#R0_current").html('Current: '+data['R0_current'].toFixed(2)+" A")
	$("#R1_current").html('Current: '+data['R1_current'].toFixed(2)+" A")
	$("#R2_current").html('Current: '+data['R2_current'].toFixed(2)+" A")

	if(data['L0_current']>CURRENT_TH){$("#L0_current").css({'color':'red'})}else{$("#L0_current").css({'color':'black'})}
	if(data['L1_current']>CURRENT_TH){$("#L1_current").css({'color':'red'})}else{$("#L1_current").css({'color':'black'})}
	if(data['L2_current']>CURRENT_TH){$("#L2_current").css({'color':'red'})}else{$("#L2_current").css({'color':'black'})}
	if(data['R0_current']>CURRENT_TH){$("#R0_current").css({'color':'red'})}else{$("#R0_current").css({'color':'black'})}
	if(data['R1_current']>CURRENT_TH){$("#R1_current").css({'color':'red'})}else{$("#R1_current").css({'color':'black'})}
	if(data['R2_current']>CURRENT_TH){$("#R2_current").css({'color':'red'})}else{$("#R2_current").css({'color':'black'})}

	$("#percentage0").html(data['bat0'].toFixed(2))
	$("#percentage1").html(data['bat1'].toFixed(2))
	$("#percentage2").html(data['bat2'].toFixed(2))

	if(data['bat3']>1)
	{
		data['bat3'] = data['bat3']-data['bat1']
		$("#percentage3").html((data['bat3']).toFixed(2))
	}
	else
	{
		$("#percentage3").html((data['bat3']).toFixed(2))
	}

	data['bat0'] = (data['bat0']-19.2)/6
	data['bat1'] = (data['bat1']-19.2)/6
	data['bat2'] = (data['bat2']-19.2)/6
	data['bat3'] = (data['bat3']-19.2)/6


	refreshLevel(data['bat0'],0)
	refreshLevel(data['bat1'],1)
	refreshLevel(data['bat2'],2)
	refreshLevel(data['bat3'],3)

	$("#temperature").html('Temperature<br>'+data['rover_temp']+' &degC')
	if(data['rover_temp']>TEMP_TH){$("#temperature").css({'color':'#ff5656'})}else{$("#temperature").css({'color':'white'})}


	changeButtonStatus(0, data['L0_status'])
	changeButtonStatus(1, data['L1_status'])
	changeButtonStatus(2, data['L2_status'])
	changeButtonStatus(3, data['R0_status'])
	changeButtonStatus(4, data['R1_status'])
	changeButtonStatus(5, data['R2_status'])
	// changeButtonStatus(6, data['R2_status'])
}
// aca irian las constantes

function enviarToggle(id_but, new_state) {
		var toSend = {};
		toSend['type'] = TOGGLE_MOT_STATUS

		toSend['id'] = parseInt(id_but.replace("B", ""))
		toSend['state'] = new_state

		mainSocket.send(JSON.stringify(toSend));
}
/*
if (navigator.appVersion.indexOf("Win")!=-1)
{
	$('#titulo').css('margin-top','-10px');
}
*/
