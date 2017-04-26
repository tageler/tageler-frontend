import { async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { GroupDetailsComponent } from './group-details.component';
import { OtherTagelerPipe } from '../../pipes/otherTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupService } from '../group.service';
import { TagelerService } from '../../tagelers/tageler.service';
import { Tageler } from '../../tagelers/tageler';
import { Group } from '../group';
import { LOCALE_ID } from '@angular/core';

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
        OtherTagelerPipe,
        NextTagelerPipe
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
              id: '1',
              type: 'Trupp',
              name: 'Gruppe 1'
            }]
          })));
      });
      groupService.getGroup('1').then(
        (group:Group) => {
          expect(group[1]._id).toBe('1');
          expect(group[1].type).toBe('Trupp');
          expect(group[1].name).toBe('Gruppe 1');
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
    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers of Baghira')
  });

  it('Should display tageler of that group', () => {
    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';

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

    expect(fixture.debugElement.nativeElement.querySelector('h3').textContent).toContain('Tagelers of Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').textContent).toContain('Tageler 1');
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
});
