import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage8Component } from './simple-page8.component';

describe('SimplePage8Component', () => {
  let component: SimplePage8Component;
  let fixture: ComponentFixture<SimplePage8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
