import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vend-dashboard',
  templateUrl: './vend-dashboard.component.html',
  styleUrls: ['./vend-dashboard.component.css']
})
export class VendDashboardComponent implements OnInit {

  visible3: boolean;
  public actionDetail: any[];
  public gridData: any[];
  public loadedData: string = "";

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

    ]
  }
  viewDetail1() {
    this.visible3=!this.visible3;
  }
}
