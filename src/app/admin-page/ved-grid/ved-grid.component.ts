import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ved-grid',
  templateUrl: './ved-grid.component.html',
  styleUrls: ['./ved-grid.component.css']
})
export class VedGridComponent implements OnInit {
  rowData: any;
  gridOptions: { rowData: any; columnDefs: any; enableColResize: boolean; enableSorting: boolean; enableFilter: boolean; };
  columnDefs;
  
  private gridApi;
  private gridColumnApi;

  constructor() {
    this.gridOptions = {
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    }
    this.columnDefs = [
    
      {headerName: "First_Name", field: "First_Name", width: 150},
      {headerName: "Last_Name", field: "Last_Name", width: 150},
      {headerName: "Address", field: "Address", width: 150},
      {headerName: "Mobile_No", field: "Mobile_No", width: 150} ,
      {headerName: "Email", field: "Email", width: 150},
      {headerName: "Location", field: "Location", width: 150},
      {headerName: "Start_Date", field: "Start_Date", width: 150},
      {headerName: "End_Date", field: "End_Date", width: 150},           
              
              
  ];

  this.rowData = [
  
    {First_Name:"Swapnil",Last_Name:"Mulay",Address:"Akurdi",Mobile_No:7588946664,Email:"smulay696@gmail.com",Location:"shirur",Start_Date:1-1-2018,End_Date:31-12-2018},
    {First_Name:"Sachin",Last_Name:"Zine",Address:"Akurdi",Mobile_No:7588946664,Email:"sachinzne8509@gmail.com",Location:"nagar",Start_Date:1-5-2018,End_Date:5-15-2019},
  ]
   }
   onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(document.getElementById("First_Name").nodeValue);
  }

  ngOnInit() {
  }

}

