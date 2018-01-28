import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public actionDetail: any[];
  public gridData: any[];
  public loadedData: string = "";
  /////////////Grid properties
  public ctlrowData: any[];
  public ctlcolumnDefs: any[];




  constructor() { }
  LoadGridData(event): any[] {

    console.log("call to server side to get intiated data" + event.toString());
    return [];
  }
  ngOnInit() {
    this.actionDetail = [
      {
        count: 10,
        title: "Initiated",
        subtitle: "View Details"
      }, {
        count: 20,
        title: "Materialized",
        subtitle: "View Details"
      }, {
        count: 30,
        title: "Finalized",
        subtitle: "View Details"
      }, {
        count: 40,
        title: "Completed",
        subtitle: "View Details"
      }

    ];

    this.ctlcolumnDefs = [
      { headerName: "Make", field: "make", width: 300 },
      { headerName: "Model", field: "model", width: 300 },
      { headerName: "Price", field: "price", width: 300 }
    ];

    this.ctlrowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ]
  }

}
