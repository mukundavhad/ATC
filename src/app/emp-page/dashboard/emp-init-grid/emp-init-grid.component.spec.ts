import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInitGridComponent } from './emp-init-grid.component';

describe('EmpInitGridComponent', () => {
  let component: EmpInitGridComponent;
  let fixture: ComponentFixture<EmpInitGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpInitGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpInitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
