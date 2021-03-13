import { Injectable } from "@angular/core";
import { Message } from "./message";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json","Access-Control-Allow-Origin": "*"})};

@Injectable({providedIn: "root"})
export class MessageService
{
  constructor(private http: HttpClient) {}

  getMessages(tab: string): Observable<Message[]>
  {
  	let location:string = window.location.origin + "/api/messages/" + tab;
  	console.log("Location: " + location);
    return this.http.get<Message[]>(location);
  }
}