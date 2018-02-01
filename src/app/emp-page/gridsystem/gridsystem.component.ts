import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid';

@Component({
  selector: 'app-gridsystem',
  templateUrl: './gridsystem.component.html',
  styleUrls: ['./gridsystem.component.css']
})
export class GridsystemComponent implements OnInit {

  public ctlrowData: any[];
  public ctlcolumnDefs: any[];
  private api: GridApi;
  private columnApi: ColumnApi;

  constructor() { }

  private onReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
}

  ngOnInit() {

    this.ctlcolumnDefs = [
      { headerName: "Name", field: "name", width: 325, filter: 'text' },
      { headerName: "Mobile No.", field: "mobile", width: 325,  },
      { headerName: "Email-ID", field: "email", width: 325 ,filter: 'text'},
    ];

    this.ctlrowData = [
      { name: "Sachin", mobile: "7350867124", email: "zine.sachin8509@gmail.com" },
      { name: "Swapnil", mobile: "7588946664", email: "smulay696@gmail.com" },
      { name: "Sachin", mobile: "7350867124", email: "zine.sachin8509@gmail.com" },
      { name: "Sachin", mobile: "7350867124", email: "zine.sachin8509@gmail.com" },
      { name: "Sachin", mobile: "7350867124", email: "zine.sachin8509@gmail.com" },
      { name: "Sachin", mobile: "7350867124", email: "zine.sachin8509@gmail.com" }
    
    ];

  }

}
