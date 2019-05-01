import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage4Component } from './simple-page4.component';

describe('SimplePage4Component', () => {
  let component: SimplePage4Component;
  let fixture: ComponentFixture<SimplePage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
