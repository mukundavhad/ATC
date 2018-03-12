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
      { headerName: "Description", field: "description", width: 300 ,filter: 'text'},
      { headerName: "Unit Rate", field: "unit_rate", width: 150 },
      { headerName: "Active", field: "active", width: 150},
      { headerName: "InActive", field: "inactive", width: 150 },
    ];

    this.ctlrowData = [    
      { service_name: "Tower Problem", service_id: "011", description: "Tower Issue", unit_rate: "400", active:"07 Feb 2018", inactive:"" },
      { service_name: "Tower Problem", service_id: "011", description: "Tower Issue", unit_rate: "400", active:"07 Feb 2018", inactive:"" },
      { service_name: "Tower Problem", service_id: "011", description: "Tower Issue", unit_rate: "400", active:"07 Feb 2018", inactive:"" },
      { service_name: "Tower Problem", service_id: "011", description: "Tower Issue", unit_rate: "400", active:"07 Feb 2018", inactive:"" },
      { service_name: "Tower Problem", service_id: "011", description: "Tower Issue", unit_rate: "400", active:"07 Feb 2018", inactive:"" },
       
    ];

  }

}
