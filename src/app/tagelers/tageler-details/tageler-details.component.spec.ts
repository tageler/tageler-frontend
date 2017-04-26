import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { TagelerDetailsComponent } from './tageler-details.component';
import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';
import { Tageler } from '../tageler';
import { Group } from '../../groups/group';
import { RouterTestingModule } from '@angular/router/testing';
import { LOCALE_ID } from '@angular/core';


describe('TagelerDetailsComponent', () => {
  let tagelerService: TagelerService,
      groupService: GroupService,
      component: TagelerDetailsComponent,
      fixture: ComponentFixture<TagelerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        TagelerDetailsComponent,
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
    fixture = TestBed.createComponent(TagelerDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tagelerService should be injected',
    inject([TagelerService], (tagelerService) => {
      expect(tagelerService).toBeDefined();
    }));

  it('groupService should be injected',
    inject([GroupService], (groupService) => {
      expect(groupService).toBeDefined();
    }));

  it('should call getTageler when ngOnInit is called', async(() => {
    spyOn(tagelerService, 'getTageler').and.returnValue(Promise.resolve(Tageler));
    component.ngOnInit();
    fixture.detectChanges();
    expect(tagelerService).toBeDefined();
    expect(tagelerService.getTageler).toHaveBeenCalled();
  }));

  it('should call getGroups when ngOnInit is called', async(() => {
    spyOn(groupService, 'getGroups').and.returnValue(Promise.resolve(Array<Group>()));
    component.ngOnInit();
    fixture.detectChanges();
    expect(groupService).toBeDefined();
    expect(groupService.getGroups).toHaveBeenCalled();
  }));

  it('tageler should be displayed correctly', () => {
    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T15:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [{ title: 'Tageler 1',
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
      free: false
    }];

    const fixture = TestBed.createComponent(TagelerDetailsComponent);
    fixture.componentInstance.tageler = tageler[0];
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelector('p').firstChild.textContent).toContain('Test');
    expect(fixture.debugElement.nativeElement.querySelector('li').firstChild.textContent).toContain('Start: Samstag, 28. Oktober 2017, 14:00 Uhr');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[1].textContent).toContain('Ende: Samstag, 28. Oktober 2017, 17:00 Uhr');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[2].textContent).toContain('Mitbringen: Essen');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[3].textContent).toContain('Gruppe: Baghira');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[4].textContent).toContain('Anziehen: Kleidung');
    expect(fixture.debugElement.nativeElement.querySelector('h4').textContent).toContain('Wichtig - Abmeldung');
    expect(fixture.debugElement.nativeElement.querySelectorAll('p')[1].textContent).toContain('Bis: Mittwoch, 25. Oktober 2017, 14:00 Uhr');
    expect(fixture.debugElement.nativeElement.querySelectorAll('p')[2].textContent).toContain('Bei: Person 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[5].textContent).toContain('Tel: 01234');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[6].textContent).toContain('Mail: person1@mail.com');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[7]).toBeUndefined();
  });

  it('free tageler should be displayed correctly', () => {
    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T15:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [{ title: 'Tageler 1',
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

    const fixture = TestBed.createComponent(TagelerDetailsComponent);
    fixture.componentInstance.tageler = tageler[0];
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelector('p').firstChild.textContent).toContain('Test');
    expect(fixture.debugElement.nativeElement.querySelector('li').firstChild.textContent).toContain('Datum: Samstag, 28. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelectorAll('li')[1].textContent).toContain('Gruppe: Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('.alert alert-warning')).toBeNull();
    });
});
