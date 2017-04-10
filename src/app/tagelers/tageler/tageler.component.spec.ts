import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';

import { TagelerComponent } from './tageler.component';

import { RouterTestingModule } from '@angular/router/testing';

import { FilterGroupByTypePipe } from '../../pipes/groupType.pipe';

import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';

describe('TagelerComponent', () => {
  let component: TagelerComponent;
  let fixture: ComponentFixture<TagelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        TagelerComponent,
        FilterGroupByTypePipe,
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
    fixture = TestBed.createComponent(TagelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
