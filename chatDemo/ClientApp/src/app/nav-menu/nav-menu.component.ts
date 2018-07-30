import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { IUser, User } from '../model/user';
import { AppService } from '../app.service';
import { HubService } from '../hub.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private _appService: AppService, private route: Router, private _hubService: HubService) {}

  Users: User[];
  interval: any;
  sender: string;

  ngOnInit() {

    this._appService.getUsers().subscribe((data:any) => {
      this.Users = data
      // console.log(this.Users);
    });

    this.interval = setInterval(() => {

      this._appService.getUsers().subscribe((data: any) => {
        this.Users = data
        // console.log(this.Users);
      });
    }, 3000);

    this.sender = this._appService.getSenderName();
    
  }

  logout() {
    var a = confirm("do you want to logout???");

    if (a) {
      this._hubService.removeStatus(this.sender);
      this.route.navigate(['/logout']);
    }

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
