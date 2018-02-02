import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-tower-grid',
  templateUrl: './tower-grid.component.html',
  styleUrls: ['./tower-grid.component.css']
})
export class TowerGridComponent implements OnInit {

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
      { headerName: "Tower ID", field: "tower_id", width: 250,filter: 'text'},
      { headerName: "Tower Name", field: "tower_name", width: 250,},
      { headerName: "Location", field: "location", width: 250 ,filter: 'text'},
      { headerName: "Build Date", field: "build_date", width: 250 },
      
    ];

    this.ctlrowData = [    
    ];
  }

}
