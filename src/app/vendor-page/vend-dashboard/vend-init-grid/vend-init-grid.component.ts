import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid/dist/lib/columnController/columnApi';

@Component({
  selector: 'app-vend-init-grid',
  templateUrl: './vend-init-grid.component.html',
  styleUrls: ['./vend-init-grid.component.css']
})
export class VendInitGridComponent implements OnInit {

  public ctlrowData: any[];
  public ctlcolumnDefs: any[];
  private api: GridApi;
  private columnApi: ColumnApi;

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
      { headerName: "Status", field: "status", width: 160 ,filter: 'text'},
      
      
    ];

    this.ctlrowData = [
      { pono: "11", podate: "06-02-2018", towerid: "0123", towerregion: "Pune", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
      { pono: "22", podate: "06-02-2018", towerid: "0123", towerregion: "Akurdi", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
      { pono: "33", podate: "06-02-2018", towerid: "0123", towerregion: "Kalewadi", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
      { pono: "44", podate: "06-02-2018", towerid: "0123", towerregion: "Pimpri", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
      { pono: "55", podate: "06-02-2018", towerid: "0123", towerregion: "Chinchwad", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
      { pono: "66", podate: "06-02-2018", towerid: "0123", towerregion: "Sangvi", serviceid:"0111", sdetails:"Tower Problem", status:"Not Started"},
                
    ];

  }


}
