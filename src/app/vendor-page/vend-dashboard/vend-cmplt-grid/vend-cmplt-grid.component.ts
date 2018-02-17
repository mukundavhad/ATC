import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-vend-cmplt-grid',
  templateUrl: './vend-cmplt-grid.component.html',
  styleUrls: ['./vend-cmplt-grid.component.css']
})
export class VendCmpltGridComponent implements OnInit {

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
      { headerName: "P.O No.", field: "pono", width: 120, filter: 'agNumberColumnFilter' },
      { headerName: "P.O Date", field: "podate", width: 120, filter: 'agNumberColumnFilter' },
      { headerName: "Tower ID", field: "towerid", width: 200 ,filter: 'number'},
      { headerName: "Tower Region", field: "towerregion", width: 200 ,filter: 'text'},    
      { headerName: "Service ID", field: "serviceid", width: 200 ,filter: 'number'},
      { headerName: "Status", field: "status", width: 200 ,filter: 'number'},
      
    ];

    this.ctlrowData = [
      { pono: "11", podate: "06-02-2018", towerid: "0123", towerregion: "Pune", serviceid:"0111", status:"Completed" },
      { pono: "22", podate: "06-02-2018", towerid: "0123", towerregion: "Akurdi", serviceid:"0111", status:"Completed" },
      { pono: "33", podate: "06-02-2018", towerid: "0123", towerregion: "Kalewadi", serviceid:"0111", status:"Completed" },
      { pono: "44", podate: "06-02-2018", towerid: "0123", towerregion: "Pimpri", serviceid:"0111", status:"Completed" },
      { pono: "55", podate: "06-02-2018", towerid: "0123", towerregion: "Chinchwad", serviceid:"0111", status:"Completed" },
      { pono: "66", podate: "06-02-2018", towerid: "0123", towerregion: "Sangvi", serviceid:"0111", status:"Completed" },
                
    ];

  }

}
