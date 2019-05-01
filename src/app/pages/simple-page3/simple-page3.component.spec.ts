import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage3Component } from './simple-page3.component';

describe('SimplePage3Component', () => {
  let component: SimplePage3Component;
  let fixture: ComponentFixture<SimplePage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
