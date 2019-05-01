import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage5Component } from './simple-page5.component';

describe('SimplePage4Component', () => {
  let component: SimplePage5Component;
  let fixture: ComponentFixture<SimplePage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
