import { Component, OnInit,ViewChild } from '@angular/core';
import { GridApi, ColumnApi, GridOptions } from 'ag-grid';

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
  private gridOptions: GridOptions;
  @ViewChild('lgModal2') lgModal2;
  constructor() { }

  private onReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
        let data = e.data;
        let actionType = e.event.target.getAttribute("data-action-type");

        switch(actionType) {
            case "view":
                return this.onActionViewClick(data);
            case "remove":
                return this.onActionRemoveClick(data);
        }
    }
}

public onActionViewClick(data: any){
  this.lgModal2.show();
}

public onActionRemoveClick(data: any){
  this.lgModal2.show();
}
  ngOnInit() {

    this.ctlcolumnDefs = [
      { headerName: "P.O No.", field: "pono", width: 120, filter: 'agNumberColumnFilter' },
      { headerName: "P.O Date", field: "podate", width: 120, filter: 'agNumberColumnFilter' },
      { headerName: "Tower ID", field: "towerid", width: 120, filter: 'number' },
      { headerName: "Tower Region", field: "towerregion", width: 160, filter: 'text' },
      { headerName: "Service ID", field: "serviceid", width: 160, filter: 'number' },
      { headerName: "Service Details", field: "sdetails", width: 160, filter: 'text' },
      { headerName: "Vendor Allocated", field: "vendor", width: 160, filter: 'text' },
      { headerName: "Status", field: "status", width: 160, filter: 'text' },
      {
        headerName: "Edit Options", field: "pono", width: 160, filter: 'text',

        template:
            `<button type="button" data-action-type="view" class="glyphicon glyphicon-edit">
               Edit
             </button>`
        }
    ];

    this.ctlrowData = [
      { pono: "11", podate: "06-02-2018", towerid: "0123", towerregion: "Pune", serviceid: "0111", sdetails: "Tower Problem", vendor: "ABC", status: "Not Started" },
      { pono: "22", podate: "06-02-2018", towerid: "0123", towerregion: "Akurdi", serviceid: "0111", sdetails: "Tower Problem", vendor: "PQR", status: "Not Started" },
      { pono: "33", podate: "06-02-2018", towerid: "0123", towerregion: "Kalewadi", serviceid: "0111", sdetails: "Tower Problem", vendor: "XYZ", status: "Not Started" },
      { pono: "44", podate: "06-02-2018", towerid: "0123", towerregion: "Pimpri", serviceid: "0111", sdetails: "Tower Problem", vendor: "UVW", status: "Not Started" },
      { pono: "55", podate: "06-02-2018", towerid: "0123", towerregion: "Chinchwad", serviceid: "0111", sdetails: "Tower Problem", vendor: "MNO", status: "Not Started" },
      { pono: "66", podate: "06-02-2018", towerid: "0123", towerregion: "Sangvi", serviceid: "0111", sdetails: "Tower Problem", vendor: "EFG", status: "Not Started" },
      { pono: "66", podate: "06-02-2018", towerid: "0123", towerregion: "Sangvi", serviceid: "0111", sdetails: "Tower Problem", vendor: "EFG", status: "Not Started" },

    ];

  }

}
