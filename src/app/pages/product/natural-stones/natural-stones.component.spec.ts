import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalStonesComponent } from './natural-stones.component';

describe('NaturalStonesComponent', () => {
  let component: NaturalStonesComponent;
  let fixture: ComponentFixture<NaturalStonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalStonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
