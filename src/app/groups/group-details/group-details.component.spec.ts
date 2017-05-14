import { async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { GroupDetailsComponent } from './group-details.component';
import { OtherTagelerPipe } from '../../pipes/otherTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';
import { ToLocalTimePipe } from '../../pipes/toLocalTimePipe.pipe';
import { ToLocalDatePipe } from '../../pipes/toLocalDatePipe.pipe'
import { RouterTestingModule } from '@angular/router/testing';
import { GroupService } from '../group.service';
import { TagelerService } from '../../tagelers/tageler.service';
import { Tageler } from '../../tagelers/tageler';
import { Group } from '../group';
import { LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';


describe('GroupDetailsComponent', () => {

  let tagelerService: TagelerService,
    groupService: GroupService,
    component: GroupDetailsComponent,
    fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        GroupDetailsComponent,
        CalendarComponent,
        OtherTagelerPipe,
        NextTagelerPipe,
        ToLocalTimePipe,
        ToLocalDatePipe
      ],
      providers: [
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
        },
        { provide: GroupService, useClass: GroupService },
        { provide: TagelerService, useClass: TagelerService },
        BaseRequestOptions,
        { provide: LOCALE_ID, useValue: "de" },
      ]})
      .compileComponents()
  }));

  beforeEach(() => {
    tagelerService = TestBed.get(TagelerService);
    groupService = TestBed.get(GroupService);
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('tagelerService should be injected',
    inject([TagelerService], (tagelerService) => {
    expect(tagelerService).toBeDefined();
  }));

  it('groupService should be injected',
    inject([GroupService], (groupService) => {
      expect(groupService).toBeDefined();
    }));

  it('should call getTagelers when ngOnInit is called', async(() => {
    spyOn(tagelerService, 'getTagelers').and.returnValue(Promise.resolve(Array<Tageler>()));
    component.ngOnInit();
    fixture.detectChanges();
    expect(tagelerService).toBeDefined();
    expect(tagelerService.getTagelers).toHaveBeenCalled();
  }));

  it('should call getGroup when ngOnInit is called', async(() => {
    spyOn(groupService, 'getGroup').and.returnValue(Promise.resolve(Group));
    component.ngOnInit();
    fixture.detectChanges();
    expect(groupService).toBeDefined();
    expect(groupService.getGroup).toHaveBeenCalled();
  }));

  it('should get the groups',
    inject([MockBackend, GroupService], (mockBackend:MockBackend, groupService:GroupService) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
            body: [{
              _id: '1',
              type: 'Trupp',
              name: 'Gruppe 1'
            }]
          })));
      });
      groupService.getGroup('1').then(
        (group:Group) => {
          expect(group[0]._id).toBe('1');
          expect(group[0].type).toBe('Trupp');
          expect(group[0].name).toBe('Gruppe 1');
        },
        (error:any) => {
          // we can call a failure case here...
          fail(error);
        });
    }));

  it('Should display group name', () => {
    const fixture = TestBed.createComponent(GroupDetailsComponent);
    fixture.componentInstance.group = {name: 'Baghira', type: 'Trupp'};
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers von Baghira')
  });

  it('Should display tageler of a specific group', () => {
    var start_date1 = '2017-10-28T14:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T14:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};
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
      }];

    const fixture = TestBed.createComponent(GroupDetailsComponent);
    fixture.componentInstance.group = group;
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers von Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toContain('Samstag, 28. Oktober 2017, 14:00 Uhr bis Samstag, 28. Oktober 2017, 17:00 Uhr');
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').firstChild.textContent).toContain('Text 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[1].textContent).toContain('Baghira');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[2].textContent).toContain('Essen');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[3].textContent).toContain('Kleidung');
    expect(fixture.debugElement.nativeElement.querySelector('h4').textContent).toContain('Wichtig - Abmeldung');
    expect(fixture.debugElement.nativeElement.querySelector('.checkout-info').firstChild.textContent).toContain('Bis: Mittwoch, 25. Oktober 2017, 14:00');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[1].textContent).toContain('Bei: Person 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[2].textContent).toContain('Tel: 01234');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[3].textContent).toContain('Mail: person1@mail.com');
  });

  it('Should display free tageler correctly', () => {
    var start_date1 = '2017-10-28T14:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T14:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};
    const tageler: Array<Tageler> = [{ title: 'Übungsfrei',
      text: 'Test',
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
      free: true
    }];

    const fixture = TestBed.createComponent(GroupDetailsComponent);
    fixture.componentInstance.group = group;
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers von Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').textContent).toContain('Übungsfrei');
    expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toContain('Samstag, 28. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').firstChild.textContent).toContain('Test');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[1].textContent).toContain('Baghira');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[2]).toBeUndefined();
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[3]).toBeUndefined();
    expect(fixture.debugElement.nativeElement.querySelector('.alert alert-warning')).toBeNull();
  });

  it('View should be correct if there is more than one tageler', () => {
    var start_date1 = '2017-10-28T14:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T14:00:00.824Z';
    var start_date2 = '2017-10-29T14:00:00.824Z';
    var end_date2 = '2017-10-29T17:00:00.824Z';
    var checkout_date2 = '2017-10-25T14:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};
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

    const fixture = TestBed.createComponent(GroupDetailsComponent);
    fixture.componentInstance.group = group;
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers von Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelector('h5').textContent).toContain('Samstag, 28. Oktober 2017, 14:00 Uhr bis Samstag, 28. Oktober 2017, 17:00 Uhr');
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').firstChild.textContent).toContain('Text 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[1].textContent).toContain('Baghira');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[2].textContent).toContain('Essen');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-text')[3].textContent).toContain('Kleidung');
    expect(fixture.debugElement.nativeElement.querySelector('h4').textContent).toContain('Wichtig - Abmeldung');
    expect(fixture.debugElement.nativeElement.querySelector('.checkout-info').firstChild.textContent).toContain('Bis: Mittwoch, 25. Oktober 2017, 14:00');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[1].textContent).toContain('Bei: Person 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[2].textContent).toContain('Tel: 01234');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.checkout-info')[3].textContent).toContain('Mail: person1@mail.com');

    expect(fixture.debugElement.nativeElement.querySelector('.groupPipe')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[1].textContent).toContain('Tageler 2');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[2].textContent).toContain('Sonntag, 29. Oktober 2017');
  });
});
