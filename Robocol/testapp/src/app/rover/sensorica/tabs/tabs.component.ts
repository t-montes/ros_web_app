import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit
{

  public isCollapsedEVA = true;
  public isCollapsedMeas = false;
  public isCollapsedAnalysis = true;
  public isCollapsedDrill = true;
  public isCollapsedLive = false;
  public isCollapsedStation = true;

  constructor() { }

  ngOnInit()
  {
  }
}
