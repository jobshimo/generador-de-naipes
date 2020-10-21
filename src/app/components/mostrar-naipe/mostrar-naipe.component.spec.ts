import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNaipeComponent } from './mostrar-naipe.component';

describe('MostrarNaipeComponent', () => {
  let component: MostrarNaipeComponent;
  let fixture: ComponentFixture<MostrarNaipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNaipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNaipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
