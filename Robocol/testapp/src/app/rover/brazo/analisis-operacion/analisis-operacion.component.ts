import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisis-operacion',
  templateUrl: './analisis-operacion.component.html',
  styleUrls: ['./analisis-operacion.component.css']
})
export class AnalisisOperacionComponent implements OnInit {

  min_value:number = 0;
  max_value:number = 100;
  plan_value:number = 70;
  actual_value:number = 35;

  constructor() { }

  ngOnInit(): void {
  }

}
