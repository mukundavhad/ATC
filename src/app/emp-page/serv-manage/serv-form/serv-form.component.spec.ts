import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFormComponent } from './serv-form.component';

describe('ServFormComponent', () => {
  let component: ServFormComponent;
  let fixture: ComponentFixture<ServFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
