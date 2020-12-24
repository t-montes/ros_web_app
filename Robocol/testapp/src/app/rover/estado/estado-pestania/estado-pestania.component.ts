import { Component, OnInit } from '@angular/core';
/*import * as $ from "jquery";*/
declare var $: any;
/* { $ } from "../jquery-3.1.1";*/
// import { $ } from "../jquery-3.1.1";
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-pestania',
  templateUrl: './estado-pestania.component.html',
  styleUrls: ['./estado-pestania.component.css']
})
export class EstadoPestaniaComponent implements OnInit
{

	constructor(private estadoService: EstadoService) {}

	ngOnInit(): void 
	{

	}
	ngOnDestroy()
	{

	}
	get_value(object: string){
    this.estadoService.get_value(object);
 	 }
  	receive_message(object: string){
    this.estadoService.receive_message(object);
  	}
  	change_botton(object: String, action:String){
    this.estadoService.change_botton(object, action);
}



}

