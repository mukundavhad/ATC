import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendDashboardComponent } from './vend-dashboard.component';

describe('VendDashboardComponent', () => {
  let component: VendDashboardComponent;
  let fixture: ComponentFixture<VendDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
