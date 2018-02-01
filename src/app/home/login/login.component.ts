import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg = "";
  public user = new User('', '');
  public userName: string = "";
  public userPwd: string = "";

  public Errors: Array<string> = [];
  constructor(private _service: AuthenticationService) {

  }

  ngOnInit() {
  }

  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';

    }
  }
}