import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinetestPageComponent } from './onlinetest-page.component';

describe('OnlinetestPageComponent', () => {
  let component: OnlinetestPageComponent;
  let fixture: ComponentFixture<OnlinetestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinetestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinetestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
