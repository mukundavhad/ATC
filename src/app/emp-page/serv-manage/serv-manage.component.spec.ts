import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServManageComponent } from './serv-manage.component';

describe('ServManageComponent', () => {
  let component: ServManageComponent;
  let fixture: ComponentFixture<ServManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
