import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendGridComponent } from './vend-grid.component';

describe('VendGridComponent', () => {
  let component: VendGridComponent;
  let fixture: ComponentFixture<VendGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
