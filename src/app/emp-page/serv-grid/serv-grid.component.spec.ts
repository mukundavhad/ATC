import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServGridComponent } from './serv-grid.component';

describe('ServGridComponent', () => {
  let component: ServGridComponent;
  let fixture: ComponentFixture<ServGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
