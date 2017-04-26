import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { TagelerComponent } from './tageler.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterGroupByTypePipe } from '../../pipes/groupType.pipe';
import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';
import { Tageler } from '../tageler';
import { Group } from '../../groups/group';
import { DebugElement } from '@angular/core';
import { By }           from '@angular/platform-browser';

describe('TagelerComponent', () => {
  let tagelerService: TagelerService,
      groupService: GroupService,
      component: TagelerComponent,
      fixture: ComponentFixture<TagelerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;


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
    tagelerService = TestBed.get(TagelerService);
    groupService = TestBed.get(GroupService);
    fixture = TestBed.createComponent(TagelerComponent);
    component = fixture.componentInstance;

    // query for the title <h4> by CSS element selector
    de = fixture.debugElement.query(By.css('h4'));
    el = de.nativeElement;
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

  it('should call getTagelers when ngOnInit is called', async(() => {
    spyOn(tagelerService, 'getTagelers').and.returnValue(Promise.resolve(Array<Tageler>()));
    component.ngOnInit();
    fixture.detectChanges();
    expect(tagelerService).toBeDefined();
    expect(tagelerService.getTagelers).toHaveBeenCalled();
  }));

  it('should call getGroups when ngOnInit is called', async(() => {
    spyOn(groupService, 'getGroups').and.returnValue(Promise.resolve(Array<Group>()));
    component.ngOnInit();
    fixture.detectChanges();
    expect(groupService).toBeDefined();
    expect(groupService.getGroups).toHaveBeenCalled();
  }));

  it('should render title Trupp in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TagelerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').firstChild.textContent).toContain('Trupp');
  }));

  it('should render title Meute in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TagelerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h4')[1].textContent).toContain('Meute');
  }));

  it('should render title Equipe in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(TagelerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h4')[2].textContent).toContain('Equipe');
  }));

  it('should display group names in the right place', () => {
    const fixture = TestBed.createComponent(TagelerComponent);
    fixture.componentInstance.groups = [{name: 'Baghira', type: 'Trupp'},
                                        {name: 'Mogli', type: 'Meute'},
                                        {name: 'Turmalin', type: 'Equipe'}];
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.list-group-item').firstChild.textContent).toContain('Baghira');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.list-group-item')[1].textContent).toContain('Mogli');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.list-group-item')[2].textContent).toContain('Turmalin');
  });

});
