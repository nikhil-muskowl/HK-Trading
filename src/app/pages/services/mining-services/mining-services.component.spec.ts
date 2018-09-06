import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningServicesComponent } from './mining-services.component';

describe('MiningServicesComponent', () => {
  let component: MiningServicesComponent;
  let fixture: ComponentFixture<MiningServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
