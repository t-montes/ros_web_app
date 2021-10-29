import { Component, OnInit } from '@angular/core';
import { MeasurementsComponent } from './measurements/measurements.component';
import { WebsocketService } from 'src/app/websocket.service';
import { SensoricaSocket } from './sensoricaSocket.service';

@Component({
  selector: 'app-sensorica',
  templateUrl: './sensorica.component.html',
  styleUrls: ['./sensorica.component.css']
})
export class SensoricaComponent implements OnInit
{

  sensoricaSocket: SensoricaSocket = new SensoricaSocket(new WebsocketService());
  
  // public isCollapsedEVA = true;
  // public isCollapsedMeas = false;
  // public isCollapsedAnalysis = true;
  // public isCollapsedDrill = true;
  // public isCollapsedLive = false;
  // public isCollapsedStation = true;

  constructor() { }
  ngOnInit() { }
}
