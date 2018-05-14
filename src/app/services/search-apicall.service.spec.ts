import { TestBed, inject } from '@angular/core/testing';

import { SearchApicallService } from './search-apicall.service';

describe('SearchApicallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchApicallService]
    });
  });

  it('should be created', inject([SearchApicallService], (service: SearchApicallService) => {
    expect(service).toBeTruthy();
  }));
});
