import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { User } from '../model/user';
import { HubService } from '../hub.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  senderId: number;
  sender: string;
  model = new User();
  status: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private _appService: AppService, private _hubService: HubService) {

    //this.senderId = this.route.snapshot.params['name'];
    //console.log("sender id:" + this.senderId);
    //this._appService.addConnId(this.senderId);

  }

  ngOnInit() {
    this.sender = this._appService.getSenderName();
    console.log("sender:" + this.sender);
    this.status = true;
    this._hubService.getConnId(this.sender);
    this._hubService.setStatus(this.sender,this.status);

    //this._appService.getUserById(this.senderId).subscribe((data: any) => { this.model = data, console.log(this.model) });

  }

}
