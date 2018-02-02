import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerGridComponent } from './tower-grid.component';

describe('TowerGridComponent', () => {
  let component: TowerGridComponent;
  let fixture: ComponentFixture<TowerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
