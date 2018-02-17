import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendFinalGridComponent } from './vend-final-grid.component';

describe('VendFinalGridComponent', () => {
  let component: VendFinalGridComponent;
  let fixture: ComponentFixture<VendFinalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendFinalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendFinalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
