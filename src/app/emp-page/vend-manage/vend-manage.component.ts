import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-vend-manage',
  providers: [AuthenticationService],
  templateUrl: './vend-manage.component.html',
  styleUrls: ['./vend-manage.component.css']
})
export class VendManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
