import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalServicesComponent } from './environmental-services.component';

describe('EnvironmentalServicesComponent', () => {
  let component: EnvironmentalServicesComponent;
  let fixture: ComponentFixture<EnvironmentalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
