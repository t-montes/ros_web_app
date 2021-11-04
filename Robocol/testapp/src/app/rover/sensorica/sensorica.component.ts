import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeasurementsComponent } from './measurements/measurements.component';
import { WebsocketService } from 'src/app/websocket.service';
import { SensoricaSocket } from './sensoricaSocket.service';
import { Message } from '../../../../libs/models';

@Component({
  selector: 'app-sensorica',
  templateUrl: './sensorica.component.html',
  styleUrls: ['./sensorica.component.css'],
})
export class SensoricaComponent implements OnInit, OnDestroy {
  message: Message;
  sensoricaSocket: SensoricaSocket = new SensoricaSocket(
    new WebsocketService()
  );

  // public isCollapsedEVA = true;
  // public isCollapsedMeas = false;
  // public isCollapsedAnalysis = true;
  // public isCollapsedDrill = true;
  // public isCollapsedLive = false;
  // public isCollapsedStation = true;

  constructor() {
    this.message = {
      id: 'get_value',
      object: 'object',
      action: 'action',
      param: 'temp',
      value: '',
    };
  }
  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('salir de sensorica');
    this.message.id = 'send';
    this.message.param = 'cams_signal';
    this.sensoricaSocket.messages.next(this.message);
  }
}
