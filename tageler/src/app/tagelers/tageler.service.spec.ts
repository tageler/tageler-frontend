import { TestBed, inject } from '@angular/core/testing';

import { TagelerService } from './tageler.service';

import {
  HttpModule,
} from '@angular/http';

describe('TagelerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagelerService],
      imports: [ HttpModule ],
    });
  });

  it('should ...', inject([TagelerService], (service: TagelerService) => {
    expect(service).toBeTruthy();
  }));
});
