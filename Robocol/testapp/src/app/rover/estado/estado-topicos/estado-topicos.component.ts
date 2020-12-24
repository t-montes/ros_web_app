import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EstadoService } from '../estado.service';

@Component({
	selector: 'app-estado-topicos',
	templateUrl: './estado-topicos.component.html',
	styleUrls: ['./estado-topicos.component.css'],
})
export class EstadoTopicosComponent implements OnInit
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
}
