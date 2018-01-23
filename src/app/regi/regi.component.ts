import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
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
