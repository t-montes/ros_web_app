import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { SensoricaSocket } from '../sensoricaSocket.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [WebsocketService, SensoricaSocket]
})
export class TabsComponent implements OnInit
{
  @Input() sensoricaSocket: SensoricaSocket

  public isCollapsedEVA = false;
  public isCollapsedMeas = false;
  public isCollapsedAnalysis = false;
  public isCollapsedDrill = false;
  public isCollapsedLive = false;
  public isCollapsedStation = false;

  constructor() { }

  ngOnInit()
  {
  }
}
