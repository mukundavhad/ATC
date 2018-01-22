import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string = ""
  public userPwd: string = ""
  public captcha: string = ""
  //public Errors: string[];
  public Errors: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  loginClick() {
    if (!this.validate()) {
      return false
    }
  }
  validate(): boolean {
    if(this.userName.length<5)
      this.Errors.push("UserName should be more than 4 char");
    if (this.userPwd.length<9)
      this.Errors.push("Password should be more than 8 char");
    return true
  }
}
