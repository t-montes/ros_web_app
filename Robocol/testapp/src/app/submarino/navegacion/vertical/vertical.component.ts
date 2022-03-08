import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

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
      id: 'movevertical',
      command: pAction,
    };
    console.log('new message from vertical to websocket: ', message);
    // this.brazoService.messages.next(message);
  }

  stop_changing_valueD() {
    this.imageSrcD = this.imageButtonsD[0].src;
    const message = {
      id: 'movevertical',
      command: 'stop',
    };
    console.log('new message from vertical to websocket: ', message);
    // this.brazoService.messages.next(message);
  }

  change_valueU(imageNameObject, pAction: string) {
    this.imageSrcU = imageNameObject.src;
    const message = {
      id: 'movevertical',
      command: pAction,
    };
    console.log('new message from vertical to websocket: ', message);
    // this.brazoService.messages.next(message);
  }

  stop_changing_valueU() {
    this.imageSrcU = this.imageButtonsU[0].src;
    const message = {
      id: 'movevertical',
      command: 'stop',
    };
    console.log('new message from vertical to websocket: ', message);
    // this.brazoService.messages.next(message);
  }

}
