import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPictureService } from './default-picture.service';

describe('DefaultPicturesComponent', () => {
  let service: DefaultPictureService;
  let fixture: ComponentFixture<DefaultPictureService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPictureService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPictureService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
