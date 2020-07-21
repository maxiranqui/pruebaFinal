import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosViajesComponent } from './formularios-viajes.component';

describe('FormulariosViajesComponent', () => {
  let component: FormulariosViajesComponent;
  let fixture: ComponentFixture<FormulariosViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
