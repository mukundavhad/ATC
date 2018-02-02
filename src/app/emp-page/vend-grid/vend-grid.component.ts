import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-vend-grid',
  templateUrl: './vend-grid.component.html',
  styleUrls: ['./vend-grid.component.css']
})
export class VendGridComponent implements OnInit {

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
      { headerName: "Vendor Name", field: "vendor_name", width: 150,filter: 'text'},
      { headerName: "Vendor ID", field: "vendor_id", width: 150,},,
      { headerName: "Email", field: "email", width: 150 ,filter: 'text'},
      { headerName: "Contact No.", field: "contact", width: 150 },
      { headerName: "Company", field: "company", width: 150},
      { headerName: "Location", field: "location", width: 150},
      { headerName: "Start Date", field: "start_date", width: 150},
      
    ];

    this.ctlrowData = [    
    ];
  }
}
