import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInitFormComponent } from './emp-init-form.component';

describe('EmpInitFormComponent', () => {
  let component: EmpInitFormComponent;
  let fixture: ComponentFixture<EmpInitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpInitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpInitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
