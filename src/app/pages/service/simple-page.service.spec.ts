import { TestBed, inject } from '@angular/core/testing';

import { SimplePageService } from './simple-page.service';

describe('SimplePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplePageService]
    });
  });

  it('should be created', inject([SimplePageService], (service: SimplePageService) => {
    expect(service).toBeTruthy();
  }));
});
