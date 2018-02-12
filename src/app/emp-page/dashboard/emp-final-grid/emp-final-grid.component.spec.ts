import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFinalGridComponent } from './emp-final-grid.component';

describe('EmpFinalGridComponent', () => {
  let component: EmpFinalGridComponent;
  let fixture: ComponentFixture<EmpFinalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFinalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFinalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
