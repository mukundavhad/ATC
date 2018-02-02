import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-twr-mng',
  providers: [AuthenticationService],
  templateUrl: './twr-mng.component.html',
  styleUrls: ['./twr-mng.component.css']
})
export class TwrMngComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
