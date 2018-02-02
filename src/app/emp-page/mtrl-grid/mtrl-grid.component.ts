import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-mtrl-grid',
  templateUrl: './mtrl-grid.component.html',
  styleUrls: ['./mtrl-grid.component.css']
})
export class MtrlGridComponent implements OnInit {

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
      { headerName: "Material Name", field: "material_name", width: 150,filter: 'text'},
      { headerName: "Material ID", field: "material_id", width: 150,},
      { headerName: "Parent ID", field: "parent_id", width: 150,  },
      { headerName: "Description", field: "description", width: 300 ,filter: 'text'},
      { headerName: "Cost", field: "cost", width: 150 },
      { headerName: "Quantity", field: "quantity", width: 150 },
      { headerName: "Valid From", field: "valid_from", width: 150},
      { headerName: "Valid Through", field: "valid_through", width: 150 },
    ];

    this.ctlrowData = [    
    ];

 

  }
}
