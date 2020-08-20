import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, OnDestroy {
  elMensaje: string;
  private _mensajeSub: Subscription;

  constructor(private pruebaService: PruebaService) { }

  ngOnInit() {
    this.elMensaje = 'Este es el primer mensaje, no he recibido nada del socket';
    this._mensajeSub = this.pruebaService.currentMensaje.subscribe(mensaje => this.elMensaje = mensaje);
  }

  ngOnDestroy() {
    this._mensajeSub.unsubscribe();
  }

  newMensaje(){
    this.pruebaService.getMensaje();  }

}
