import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';

import { TagelerDetailsComponent } from './tageler-details.component';
import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';

import { RouterTestingModule } from '@angular/router/testing';

describe('TagelerDetailsComponent', () => {
  let component: TagelerDetailsComponent;
  let fixture: ComponentFixture<TagelerDetailsComponent>;

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
    fixture = TestBed.createComponent(TagelerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
