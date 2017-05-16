import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DefaultPictureService } from './default-picture.service';

describe('DefaultPictureService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DefaultPictureService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [ HttpModule ],
    });
  });

  it('should inject DefaultPictureService', inject([DefaultPictureService], (service: DefaultPictureService) => {
    expect(service).toBeTruthy();
  }));
});
