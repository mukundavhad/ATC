import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMtrlFormComponent } from './emp-mtrl-form.component';

describe('EmpMtrlFormComponent', () => {
  let component: EmpMtrlFormComponent;
  let fixture: ComponentFixture<EmpMtrlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMtrlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMtrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
