import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuerpo2Component } from './cuerpo2.component';

describe('Cuerpo2Component', () => {
  let component: Cuerpo2Component;
  let fixture: ComponentFixture<Cuerpo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cuerpo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuerpo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
