import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage1Component } from './simple-page1.component';

describe('SimplePage1Component', () => {
  let component: SimplePage1Component;
  let fixture: ComponentFixture<SimplePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
