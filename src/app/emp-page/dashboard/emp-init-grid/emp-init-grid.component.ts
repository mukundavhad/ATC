import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid';

@Component({
  selector: 'app-emp-init-grid',
  templateUrl: './emp-init-grid.component.html',
  styleUrls: ['./emp-init-grid.component.css']
})
export class EmpInitGridComponent implements OnInit {

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
      { headerName: "Tower ID", field: "towerid", width: 120 ,filter: 'number'},
      { headerName: "Tower Region", field: "towerregion", width: 160 ,filter: 'text'},    
      { headerName: "Service ID", field: "serviceid", width: 160 ,filter: 'number'},
      { headerName: "Service Details", field: "sdetails", width: 160 ,filter: 'text'},
      { headerName: "Vendor Allocated", field: "vendor", width: 160 ,filter: 'text'},
      
    ];

    this.ctlrowData = [
      { pono: "11", podate: "06-02-2018", towerid: "0123", towerregion: "Pune", serviceid:"0111", sdetails:"Tower Problem", vendor:"ABC"},
      { pono: "22", podate: "06-02-2018", towerid: "0123", towerregion: "Akurdi", serviceid:"0111", sdetails:"Tower Problem", vendor:"PQR"},
      { pono: "33", podate: "06-02-2018", towerid: "0123", towerregion: "Kalewadi", serviceid:"0111", sdetails:"Tower Problem", vendor:"XYZ"},
      { pono: "44", podate: "06-02-2018", towerid: "0123", towerregion: "Pimpri", serviceid:"0111", sdetails:"Tower Problem", vendor:"UVW"},
      { pono: "55", podate: "06-02-2018", towerid: "0123", towerregion: "Chinchwad", serviceid:"0111", sdetails:"Tower Problem", vendor:"MNO"},
      { pono: "66", podate: "06-02-2018", towerid: "0123", towerregion: "Sangvi", serviceid:"0111", sdetails:"Tower Problem", vendor:"EFG"},
                
    ];

  }

}
