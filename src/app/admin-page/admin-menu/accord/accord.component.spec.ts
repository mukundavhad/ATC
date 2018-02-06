import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordComponent } from './accord.component';

describe('AccordComponent', () => {
  let component: AccordComponent;
  let fixture: ComponentFixture<AccordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
