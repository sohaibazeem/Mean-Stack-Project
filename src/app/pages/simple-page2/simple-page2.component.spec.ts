import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage2Component } from './simple-page2.component';

describe('SimplePage2Component', () => {
  let component: SimplePage2Component;
  let fixture: ComponentFixture<SimplePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
