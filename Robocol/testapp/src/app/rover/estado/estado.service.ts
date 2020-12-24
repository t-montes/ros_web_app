import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class EstadoService
{
	private socket;
  constructor(private router: Router )
  {
    console.log("EstadoService: constructor");
    this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
  }
  receive_message(object: String)
  {
    console.log("EstadoService: change_value");
    this.socket.send(JSON.stringify({ id:"receive_message", object: object}));
  }
  get_value(object:String){
    console.log("EstadoService: get_value");
    this.socket.send(JSON.stringify({ id:"get_value", object:object}));
  }
  change_botton(object: String, action:String)
  {
    console.log("EstadoService: change_value");
    this.socket.send(JSON.stringify({ id:"change_botton", object: object, action: action}));
  }
  onMessage(): Observable<Object>
  {
    console.log("EstadoService: onMessage");
    return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data)); };});
  }
  close()
  {
    console.log("EstadoService: close");
    this.socket.close();
    // this.socket.terminate();
  };
}
