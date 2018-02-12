import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtrlFormComponent } from './mtrl-form.component';

describe('MtrlFormComponent', () => {
  let component: MtrlFormComponent;
  let fixture: ComponentFixture<MtrlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtrlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
