import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCmpltGridComponent } from './emp-cmplt-grid.component';

describe('EmpCmpltGridComponent', () => {
  let component: EmpCmpltGridComponent;
  let fixture: ComponentFixture<EmpCmpltGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCmpltGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCmpltGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
