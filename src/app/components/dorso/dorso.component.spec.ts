import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsoComponent } from './dorso.component';

describe('DorsoComponent', () => {
  let component: DorsoComponent;
  let fixture: ComponentFixture<DorsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
