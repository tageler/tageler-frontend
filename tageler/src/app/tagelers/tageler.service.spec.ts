import { TestBed, inject } from '@angular/core/testing';

import { TagelerService } from './tageler.service';

describe('TagelerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagelerService]
    });
  });

  it('should ...', inject([TagelerService], (service: TagelerService) => {
    expect(service).toBeTruthy();
  }));
});
