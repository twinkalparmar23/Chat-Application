import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Message } from './model/Message';

@Injectable()
export class AppService {

  constructor(private _httpService: Http, private http: HttpClient) { }

  private headers: HttpHeaders;
  Users: User[];
  sender: string;
  connId: number;

  getUsers() {
    return this._httpService.get('/api/Value')
      .pipe(map(res => res.json()));
  }

  getUserById(id: number) {
    return this._httpService.get('/api/Value/' + id)
      .pipe(map(res => res.json()));
      
  }

  getUserByName(name: string) {
    return this._httpService.get('/api/Value/' + name)
      .pipe(map(res => res.json()));
    
  }

  addUser(user: User) {
    return this._httpService.post('/api/Value', user)
      .pipe(map(res => res.json()))
      .toPromise();
  }

  senderAdd(name: string) {
    this.sender = name;
  }

  getSenderName(): string {
    return this.sender;
  }

  addConnId(id: number) {
    if (id != null) { this.connId = id; }
  }

  getConnId(): number {
    return this.connId;
  }

  addMessage(msgmodel: Message) {
    return this._httpService.post('/api/Message', msgmodel)
      .pipe(map(res => res.json()));
  }

  modifyMessage(id:number,msgmodel: Message) {
    return this._httpService.put('/api/Message' + '/' + id, msgmodel)
      .pipe(map(res => res.json()));
  }

  getMessages() {
    return this._httpService.get('/api/Message')
      .pipe(map(res => res.json()));
  }
}
