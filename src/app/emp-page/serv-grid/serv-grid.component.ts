import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-serv-grid',
  templateUrl: './serv-grid.component.html',
  styleUrls: ['./serv-grid.component.css']
})
export class ServGridComponent implements OnInit {

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
      { headerName: "Service Name", field: "service_name", width: 150,filter: 'text'},
      { headerName: "Service ID", field: "service_id", width: 150,},
      { headerName: "Parent ID", field: "parent_id", width: 150,  },
      { headerName: "Description", field: "description", width: 300 ,filter: 'text'},
      { headerName: "Cost", field: "cost", width: 150 },
      { headerName: "Valid From", field: "valid_from", width: 150},
      { headerName: "Valid Through", field: "valid_through", width: 150 },
    ];

    this.ctlrowData = [    
    ];

 

  }

}
