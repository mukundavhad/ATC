import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendCmpltGridComponent } from './vend-cmplt-grid.component';

describe('VendCmpltGridComponent', () => {
  let component: VendCmpltGridComponent;
  let fixture: ComponentFixture<VendCmpltGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendCmpltGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendCmpltGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
