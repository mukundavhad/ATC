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
      { headerName: "Tower ID", field: "tower_id", width: 200,filter: 'text'},
      { headerName: "Tower Name", field: "tower_name", width: 200,filter: 'text'},
      { headerName: "State", field: "state", width: 200 ,filter: 'text'},
      { headerName: "City", field: "city", width: 200,filter: 'text' },
      { headerName: "Location", field: "location", width: 200 ,filter: 'text'},
      
      
    ];

    this.ctlrowData = [    
      { tower_id: "123", tower_name: "Tower123", state: "Maharashtra", city: "Pune", location:"Kalewadi" },
      { tower_id: "123", tower_name: "Tower123", state: "Maharashtra", city: "Pune", location:"Kalewadi" },
      { tower_id: "123", tower_name: "Tower123", state: "Maharashtra", city: "Pune", location:"Kalewadi" },
      { tower_id: "123", tower_name: "Tower123", state: "Maharashtra", city: "Pune", location:"Kalewadi" },
      { tower_id: "123", tower_name: "Tower123", state: "Maharashtra", city: "Pune", location:"Kalewadi" },
      
    ];
  }

}
