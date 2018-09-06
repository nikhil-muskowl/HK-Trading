import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialMineralComponent } from './industrial-mineral.component';

describe('IndustrialMineralComponent', () => {
  let component: IndustrialMineralComponent;
  let fixture: ComponentFixture<IndustrialMineralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialMineralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
