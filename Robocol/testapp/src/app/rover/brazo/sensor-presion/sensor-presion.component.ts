import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-presion',
  templateUrl: './sensor-presion.component.html',
  styleUrls: ['./sensor-presion.component.css']
})
export class SensorPresionComponent implements OnInit {

  state:String;

  constructor() { }

  ngOnInit(): void {
  	this.state = 'Not catched';
  }

  changeState(newState:String){
  	this.state = newState;
  }

  catched():boolean{
  	return this.state == 'Catched!';
  }

}
