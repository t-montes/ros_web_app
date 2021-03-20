import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit
{

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
