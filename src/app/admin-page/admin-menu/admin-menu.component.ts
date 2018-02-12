import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  visible1: boolean;
  visible: boolean;
  public companies: any[];
  

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }

  ngOnInit() {
    this.companies = [
      {
      company: "American Tower Corporation"
      },
      {
      company: "BT Tower"
      }
    ]
  }

  viewDetail(){
    this.visible=true;
    this.visible1=false;
}
  VviewDetail(){
    this.visible=false;
    this.visible1=true; }
    
}