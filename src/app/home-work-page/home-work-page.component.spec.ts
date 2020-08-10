import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkPageComponent } from './home-work-page.component';

describe('HomeWorkPageComponent', () => {
  let component: HomeWorkPageComponent;
  let fixture: ComponentFixture<HomeWorkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
