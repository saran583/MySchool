import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbusPageComponent } from './trackbus-page.component';

describe('TrackbusPageComponent', () => {
  let component: TrackbusPageComponent;
  let fixture: ComponentFixture<TrackbusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackbusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
