import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwrMngComponent } from './twr-mng.component';

describe('TwrMngComponent', () => {
  let component: TwrMngComponent;
  let fixture: ComponentFixture<TwrMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwrMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwrMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
