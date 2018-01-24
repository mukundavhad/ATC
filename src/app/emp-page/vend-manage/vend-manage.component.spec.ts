import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendManageComponent } from './vend-manage.component';

describe('VendManageComponent', () => {
  let component: VendManageComponent;
  let fixture: ComponentFixture<VendManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
