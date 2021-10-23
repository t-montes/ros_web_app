import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class LiveComponent implements OnDestroy, OnInit{

  constructor(private brazoService: BrazoService) {
    brazoService.messages.subscribe((msg) => {
      console.log('Response from websocket: ' + msg);
      if (msg['id'] == 'cam1') {
        console.log(msg["data"]);
      }
    });
  }

  ngOnDestroy(){

  }

  ngOnInit(){
    
  }
}
