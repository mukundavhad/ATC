import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-vend-mtrl-grid',
  templateUrl: './vend-mtrl-grid.component.html',
  styleUrls: ['./vend-mtrl-grid.component.css']
})
export class VendMtrlGridComponent implements OnInit {

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
      { headerName: "P.O No.", field: "pono", width: 200, filter: 'agNumberColumnFilter' },
      { headerName: "P.O Date", field: "podate", width: 200, filter: 'agNumberColumnFilter' },
      { headerName: "Tower ID", field: "towerid", width: 200 ,filter: 'number'},
      { headerName: "Service ID", field: "serviceid", width: 200 ,filter: 'number'},
      { headerName: "Sub-Services", field: "sub_servc", width: 200 ,filter: 'text'},
      
    ];

    this.ctlrowData = [
      { pono: "11", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"A123", },
      { pono: "22", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"V233", },
      { pono: "33", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"C344", },
      { pono: "44", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"S445", },
      { pono: "55", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"F321", },
      { pono: "66", podate: "06-02-2018", towerid: "0123", serviceid:"0111", sub_servc:"R332", },
                
    ];

  }

}
