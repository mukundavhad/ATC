import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@Component({
  selector: 'app-amenu',
  templateUrl: './amenu.component.html',
  styleUrls: ['./amenu.component.css']
})
export class AmenuComponent{
  
  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
  
}
