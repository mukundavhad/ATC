import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {
  public company: any;
  public visible1: boolean;
  public visible: boolean;
  

  @Input()
  public companyModel: any = {};


  constructor() { }

  ngOnInit() {
    this.company = this.companyModel.company;
    
  }
  

}
