import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage7Component } from './simple-page7.component';

describe('SimplePage7Component', () => {
  let component: SimplePage7Component;
  let fixture: ComponentFixture<SimplePage7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
