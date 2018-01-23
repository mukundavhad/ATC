import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.css']
})
export class ActionBoxComponent implements OnInit {

  @Input()
  public actionModel:any={};

  @Output() OnViewDetail = new EventEmitter<string>();;

  public count: number;
  public title: string;
  public subtitle: string;

  constructor() { }

  ngOnInit() {
    this.count =this.actionModel.count;
    this.title = this.actionModel.title;
    this.subtitle =this.actionModel.subtitle;
   }
  viewDetail(){
    this.OnViewDetail.emit("Inititated");
  }

}
