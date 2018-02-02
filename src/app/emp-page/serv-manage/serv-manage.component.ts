import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-serv-manage',
  providers: [AuthenticationService],
  templateUrl: './serv-manage.component.html',
  styleUrls: ['./serv-manage.component.css']
})
export class ServManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
