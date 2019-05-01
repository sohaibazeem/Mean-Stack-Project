import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePage6Component } from './simple-page6.component';

describe('SimplePage4Component', () => {
  let component: SimplePage6Component;
  let fixture: ComponentFixture<SimplePage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
