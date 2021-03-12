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
