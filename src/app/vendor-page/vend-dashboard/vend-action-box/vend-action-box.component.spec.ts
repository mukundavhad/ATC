import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendActionBoxComponent } from './vend-action-box.component';

describe('VendActionBoxComponent', () => {
  let component: VendActionBoxComponent;
  let fixture: ComponentFixture<VendActionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendActionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendActionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
