import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFinalFormComponent } from './emp-final-form.component';

describe('EmpFinalFormComponent', () => {
  let component: EmpFinalFormComponent;
  let fixture: ComponentFixture<EmpFinalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFinalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFinalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
