import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensorica',
  templateUrl: './sensorica.component.html',
  styleUrls: ['./sensorica.component.css']
})
export class SensoricaComponent implements OnInit
{
  public isCollapsedEVA = true;
  public isCollapsedMeas = true;
  public isCollapsedAnalysis = true;
  public isCollapsedDrill = true;
  public isCollapsedLive = false;

  constructor() { }
  ngOnInit() { }
}
