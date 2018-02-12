import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-vendor-page',
  providers: [AuthenticationService],
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.css']
})
export class VendorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
