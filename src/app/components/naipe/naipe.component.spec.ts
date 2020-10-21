import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaipeComponent } from './naipe.component';

describe('NaipeComponent', () => {
  let component: NaipeComponent;
  let fixture: ComponentFixture<NaipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
