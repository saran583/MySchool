import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoonlinePageComponent } from './goonline-page.component';

describe('GoonlinePageComponent', () => {
  let component: GoonlinePageComponent;
  let fixture: ComponentFixture<GoonlinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoonlinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoonlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
