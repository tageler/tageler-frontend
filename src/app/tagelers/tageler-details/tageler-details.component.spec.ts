import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { TagelerDetailsComponent } from './tageler-details.component';
import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';
import { Tageler } from '../tageler';
import { Group } from '../../groups/group';
import { RouterTestingModule } from '@angular/router/testing';

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
        BaseRequestOptions
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
});
