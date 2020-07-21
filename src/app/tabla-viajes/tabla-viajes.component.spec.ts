import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaViajesComponent } from './tabla-viajes.component';

describe('TablaViajesComponent', () => {
  let component: TablaViajesComponent;
  let fixture: ComponentFixture<TablaViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
