import { TestBed, inject } from '@angular/core/testing';

import { InMemoryClientService } from './in-memory-client.service';

describe('InMemoryClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryClientService]
    });
  });

  it('should be created', inject([InMemoryClientService], (service: InMemoryClientService) => {
    expect(service).toBeTruthy();
  }));
});
