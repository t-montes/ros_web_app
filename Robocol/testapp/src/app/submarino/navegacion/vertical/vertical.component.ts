import { Component, OnInit, Input } from '@angular/core';
import { NavegacionService } from '../navegacion.service';
import { WebsocketService } from '../../../websocket.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css'],
  providers: [WebsocketService, NavegacionService],
})
export class VerticalComponent implements OnInit {

  @Input() navegacionService: NavegacionService; // decorate the property with @Input()

  imageSrcD: String;
  imageSrcU: String;

  imageButtonsD = [
    {
      src: '../../../../static/assets/Submarino/down.png',
      name: 'Down initial',
    },
    {
      src: '../../../../static/assets/Submarino/down_touched.png',
      name: 'Down activated',
    }
  ]

  imageButtonsU = [
    {
      src: '../../../../static/assets/Submarino/up.png',
      name: 'Up initial',
    },
    {
      src: '../../../../static/assets/Submarino/up_touched.png',
      name: 'Up activated',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.imageSrcD = this.imageButtonsD[0].src;
    this.imageSrcU = this.imageButtonsU[0].src;
  }

  change_valueD(imageNameObject, pAction: string) {
    this.imageSrcD = imageNameObject.src;
    const message = {
      id: 'control',
      command: pAction,
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

  stop_changing_valueD() {
    this.imageSrcD = this.imageButtonsD[0].src;
    const message = {
      id: 'control',
      command: 'Stop',
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

  change_valueU(imageNameObject, pAction: string) {
    this.imageSrcU = imageNameObject.src;
    const message = {
      id: 'control',
      command: pAction,
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

  stop_changing_valueU() {
    this.imageSrcU = this.imageButtonsU[0].src;
    const message = {
      id: 'control',
      command: 'Stop',
    };
    console.log('new message from navegacion to websocket: ', message);
    this.navegacionService.messages.next(message);
  }

}
