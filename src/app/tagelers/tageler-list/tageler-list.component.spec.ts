import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { TagelerService } from '../tageler.service';
import { Tageler } from '../tageler';
import { TagelerListComponent } from "./tageler-list.component";

describe('TagelerListComponent', () => {
  let component: TagelerListComponent,
      fixture: ComponentFixture<TagelerListComponent>,
      tagelerService: TagelerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ TagelerListComponent ],
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
        BaseRequestOptions
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

});
