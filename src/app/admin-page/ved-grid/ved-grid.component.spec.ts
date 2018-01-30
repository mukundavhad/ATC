import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedGridComponent } from './ved-grid.component';

describe('VedGridComponent', () => {
  let component: VedGridComponent;
  let fixture: ComponentFixture<VedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
