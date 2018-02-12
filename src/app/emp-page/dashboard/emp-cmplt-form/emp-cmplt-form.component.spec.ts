import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCmpltFormComponent } from './emp-cmplt-form.component';

describe('EmpCmpltFormComponent', () => {
  let component: EmpCmpltFormComponent;
  let fixture: ComponentFixture<EmpCmpltFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCmpltFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCmpltFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
