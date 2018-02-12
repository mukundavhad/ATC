import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMtrlGridComponent } from './emp-mtrl-grid.component';

describe('EmpMtrlGridComponent', () => {
  let component: EmpMtrlGridComponent;
  let fixture: ComponentFixture<EmpMtrlGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMtrlGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMtrlGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
