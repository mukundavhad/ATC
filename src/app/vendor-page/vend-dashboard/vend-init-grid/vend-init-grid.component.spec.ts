import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendInitGridComponent } from './vend-init-grid.component';

describe('VendInitGridComponent', () => {
  let component: VendInitGridComponent;
  let fixture: ComponentFixture<VendInitGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendInitGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendInitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
