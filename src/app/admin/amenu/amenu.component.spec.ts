import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenuComponent } from './amenu.component';

describe('AmenuComponent', () => {
  let component: AmenuComponent;
  let fixture: ComponentFixture<AmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
