import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/home/authentication.service';

@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent implements OnInit {

  constructor(private _service:AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this._service.logout();
}

}
