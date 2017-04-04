import { TestBed, inject } from '@angular/core/testing';

import { GroupService } from './group.service';

import {
  HttpModule,
} from '@angular/http';

describe('GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ GroupService ],
      imports: [ HttpModule ],
    });
  });

  it('should ...', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));
});
