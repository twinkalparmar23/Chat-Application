import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _appService: AppService, private router: Router) { }

  model = new User;
  //userName: string;
  //password: string;

  ngOnInit() {
  }

  onSubmit(form: any) {
    this._appService.addUser(this.model).then((result)=> {
      this.router.navigate(['/login']);
    });
  }
}
