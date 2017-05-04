import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { TagelerService } from '../tageler.service';
import { Tageler } from '../tageler';
import { TagelerListComponent } from "./tageler-list.component";
import { TagelerByGroupAndByDate } from '../../pipes/tagelerByGroupAndByDate.pipe';
import { LOCALE_ID } from '@angular/core';

describe('TagelerListComponent', () => {
  let component: TagelerListComponent,
      fixture: ComponentFixture<TagelerListComponent>,
      tagelerService: TagelerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ TagelerListComponent, TagelerByGroupAndByDate ],
      providers: [
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
        },
        { provide: TagelerService, useClass: TagelerService },
        BaseRequestOptions,
        { provide: LOCALE_ID, useValue: "de" },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    tagelerService = TestBed.get(TagelerService);
    fixture = TestBed.createComponent(TagelerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tagelerService should be injected',
    inject([TagelerService], (tagelerService) => {
      expect(tagelerService).toBeDefined();
    }));

  it('should call getTagelers when ngOnInit is called', async(() => {
    spyOn(tagelerService, 'getTagelers').and.returnValue(Promise.resolve(Array<Tageler>()));
    component.ngOnInit();
    expect(tagelerService).toBeDefined();
    expect(tagelerService.getTagelers).toHaveBeenCalled();
  }));

  it('tageler cards are displayed correctoy', () => {
    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T15:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';
    var start_date2 = '2017-10-29T12:00:00.824Z';
    var end_date2 = '2017-10-29T15:00:00.824Z';
    var checkout_date2 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [{ title: 'Tageler 1',
      text: 'Text 1',
      group: ['Baghira'],
      start: new Date(start_date1),
      end: new Date(end_date1),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date1),
        contact: [{
          name: 'Person 1',
          phone: '01234',
          mail: 'person1@mail.com',
          other: ''}]
      },
      free: false
    }, {title: 'Tageler 2',
      text: 'Text 2',
      group: ['Baghira'],
      start: new Date(start_date2),
      end: new Date(end_date2),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date2),
        contact: [{
          name: 'Person 2',
          phone: '0123456',
          mail: 'person2@mail.com',
          other: ''}]
      },
      free: false
    }];

    const fixture = TestBed.createComponent(TagelerListComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#title_short').firstChild.textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelector('#date').firstChild.textContent).toContain('Samstag, 28. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelectorAll('#title_short')[1].textContent).toContain('Tageler 2');
    expect(fixture.debugElement.nativeElement.querySelectorAll('#date')[1].textContent).toContain('Sonntag, 29. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card').length).toBe(2);
  });

});
