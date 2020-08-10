import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksPageComponent } from './remarks-page.component';

describe('RemarksPageComponent', () => {
  let component: RemarksPageComponent;
  let fixture: ComponentFixture<RemarksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
