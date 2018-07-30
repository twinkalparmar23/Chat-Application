import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class HubService {

  private _hubConnection: HubConnection;

  message = '';
  messages: string[] = [];

  constructor() {
    this.initHub();
  }

  
  private initHub() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chatHub')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this._hubConnection.start().catch(err => console.error(err.toString()));

    this._hubConnection.on('getId', (sender: string) => { });

    this._hubConnection.on('setStatus', (sender: string, status: boolean) => { });

    this._hubConnection.on('removeStatus', (sender: string) => { });

    this._hubConnection.on('Send', (sender: string, receivedMessage: string, date: string) => {
      this.message = `${sender}:${receivedMessage},${date}`;
      this.messages.push(this.message);
      this.message = '';
    });

  }

  getConnId(sender: string) {
       this._hubConnection.invoke('getId', sender);
        //.catch(err => console.error(err));
  }

  sendMessage(sender: string, receiver: string, senderConnId: string, connId: string, msg: string, date: string) {
    this._hubConnection.invoke('Send', sender, receiver, senderConnId, connId, msg, date);
    return this.messages;
  }

  setStatus(sender: string,status: boolean) {
    this._hubConnection.invoke('setStatus', sender,status);
  }

  removeStatus(sender: string) {
    this._hubConnection.invoke('removeStatus', sender);
  }
}
