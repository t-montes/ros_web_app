import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SocketService
{
  private socket;
  constructor(private router: Router )
  {
    console.log("SocketService: constructor");
    this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
  }
  sendMessage(message: string)
  {
    console.log("SocketService: sendMessage");
    this.socket.send(JSON.stringify({ message: message }));
  }
  onMessage(): Observable<Object>
  {
    console.log('SocketService: onMessage');
    return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data)); };});
  }
  close()
  {
    console.log("SocketService: close");
    this.socket.close();
    // this.socket.terminate();
  };
}
