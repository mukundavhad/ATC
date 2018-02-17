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
      { headerName: "Vendor Name", field: "vendor_name", width: 200,filter: 'text'},
      { headerName: "Vendor ID", field: "vendor_id", width: 200,},,
      { headerName: "Email", field: "email", width: 200 ,filter: 'text'},
      { headerName: "Contact No.", field: "contact", width: 200 },
      { headerName: "Address", field: "address", width: 200 },
      
    ];

    this.ctlrowData = [    
    ];
  }
}
