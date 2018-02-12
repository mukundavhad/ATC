import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendMenuComponent } from './vend-menu.component';

describe('VendMenuComponent', () => {
  let component: VendMenuComponent;
  let fixture: ComponentFixture<VendMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
