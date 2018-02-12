import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwrFormComponent } from './twr-form.component';

describe('TwrFormComponent', () => {
  let component: TwrFormComponent;
  let fixture: ComponentFixture<TwrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
