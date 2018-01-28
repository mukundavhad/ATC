import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  public FirstName: string = ""
  public LastName: string = ""
  public Email: string = ""
  public PhoneNumber: string = ""
  public Location: string = ""
  public Company: string =""

  constructor() { }

  ngOnInit() {
  }

}
