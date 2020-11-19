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
    this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
  }
  sendMessage(message: string)
  {
    this.socket.send(JSON.stringify({ message: message }));
  }
  onMessage(): Observable<Object>
  {
    return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data)); };});
  }
  close()
  {
    console.log("Closing Sensors socket...");
    this.socket.close();
    // this.socket.terminate();
    console.log("Sensors socket closed.");
  };
}
