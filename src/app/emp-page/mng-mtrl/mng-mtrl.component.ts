import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-mng-mtrl',
  providers: [AuthenticationService],
  templateUrl: './mng-mtrl.component.html',
  styleUrls: ['./mng-mtrl.component.css']
})
export class MngMtrlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
