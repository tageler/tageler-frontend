import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { GroupDetailsComponent } from './group-details.component';
import { OtherTagelerPipe } from '../../pipes/otherTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupService } from '../group.service';
import { TagelerService } from '../../tagelers/tageler.service';
import 'rxjs/add/observable/of';
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
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should call the tagelers when ngOnInit is called', async(() => {
    fixture.detectChanges();
    component.ngOnInit();
    spyOn(tagelerService, 'getTagelers');
    expect(tagelerService.getTagelers).toHaveBeenCalled();
  }));

  it('should call the groups when ngOnInit is called', inject([GroupService], (groupService) => {
    component.ngOnInit();
    spyOn(groupService, 'getGroup');
    fixture.detectChanges();
    expect(groupService.getGroup).toHaveBeenCalled();
  }));
});
