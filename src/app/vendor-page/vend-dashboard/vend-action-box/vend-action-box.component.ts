import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vend-action-box',
  templateUrl: './vend-action-box.component.html',
  styleUrls: ['./vend-action-box.component.css']
})
export class VendActionBoxComponent implements OnInit {
  visible: boolean;

  @Input()
  public actionModel: any = {};

@Output() OnViewDetail = new EventEmitter<string>();;

public count: number;
public title: string;
public subtitle: string;

constructor() { }

ngOnInit() {
  this.count = this.actionModel.count;
  this.title = this.actionModel.title;
  this.subtitle = this.actionModel.subtitle;
}

}
