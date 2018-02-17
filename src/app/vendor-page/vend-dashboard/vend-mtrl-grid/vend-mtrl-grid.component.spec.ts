import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendMtrlGridComponent } from './vend-mtrl-grid.component';

describe('VendMtrlGridComponent', () => {
  let component: VendMtrlGridComponent;
  let fixture: ComponentFixture<VendMtrlGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendMtrlGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendMtrlGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
