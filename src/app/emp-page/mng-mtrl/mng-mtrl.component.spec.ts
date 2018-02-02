import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngMtrlComponent } from './mng-mtrl.component';

describe('MngMtrlComponent', () => {
  let component: MngMtrlComponent;
  let fixture: ComponentFixture<MngMtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngMtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngMtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
