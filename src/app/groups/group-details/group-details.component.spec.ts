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
import 'rxjs/add/operator/map';

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
        BaseRequestOptions
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
});
