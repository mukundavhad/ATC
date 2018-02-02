import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtrlGridComponent } from './mtrl-grid.component';

describe('MtrlGridComponent', () => {
  let component: MtrlGridComponent;
  let fixture: ComponentFixture<MtrlGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtrlGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtrlGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
