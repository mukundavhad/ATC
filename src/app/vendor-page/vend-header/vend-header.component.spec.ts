import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendHeaderComponent } from './vend-header.component';

describe('VendHeaderComponent', () => {
  let component: VendHeaderComponent;
  let fixture: ComponentFixture<VendHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
