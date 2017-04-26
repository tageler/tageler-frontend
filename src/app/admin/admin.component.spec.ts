import { async, fakeAsync, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AdminComponent } from './admin.component';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { ConfirmModule} from 'angular2-bootstrap-confirm';
import { TagelerService } from '../tagelers/tageler.service';
import { GroupService } from '../groups/group.service';
import { TagelerByGroup } from '../pipes/tagelerByGroup.pipe';
import { FilterGroupByTypePipe } from '../pipes/groupType.pipe';
import { Tageler } from '../tagelers/tageler';
import { Group } from '../groups/group';


describe('Component: AdminComponent', () => {
  let tagelerService: TagelerService,
    groupService: GroupService,
    component: AdminComponent,
    fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, TagelerByGroup, FilterGroupByTypePipe ],
      imports: [ReactiveFormsModule, FileUploadModule, ConfirmModule, FormsModule],
      providers: [
        FormBuilder,
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    tagelerService = TestBed.get(TagelerService);
    groupService = TestBed.get(GroupService);
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  it('Admin component should be created', () => {
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

  it('should call getGroup when ngOnInit is called', async(() => {
    spyOn(groupService, 'getGroups').and.returnValue(Promise.resolve(Array<Group>()));
    component.ngOnInit();
    fixture.detectChanges();
    expect(groupService).toBeDefined();
    expect(groupService.getGroups).toHaveBeenCalled();
  }));

  it('Testing tageler input', () => {
    component.tageler = null;
  });

  it('Testing tageler form input', () => {
    component.tagelerForm = null;
  });

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    component.ngOnInit();
    expect(component.tagelerForm instanceof FormGroup).toBe(true);
  });


  it('tageler should update from form changes', fakeAsync(() => {
    const testTageler = {
      title: 'test',
      text: 'text',
      group: 'Test Group',
      date_start: new Date,
      date_end: new Date,
      time_start: '14:00',
      time_end: '17:00',
      bringAlong: 'Tasse',
      uniform: 'Kleid',
      picture: '',
      checkout: {
        deadline_date: new Date,
        deadline_time: '10:00',
        contact: {
          name: 'Fake name',
          phone: 'Fake phone',
          mail: 'Fake mail',
          other: 'Fake other',
        }
      },
      free: false
    };
    component.tagelerForm.controls['title'].setValue(testTageler.title);
    component.tagelerForm.controls['text'].setValue(testTageler.text);
    component.tagelerForm.controls['group'].setValue(testTageler.group);
    component.tagelerForm.controls['date_start'].setValue(testTageler.date_start);
    component.tagelerForm.controls['date_end'].setValue(testTageler.date_end);
    component.tagelerForm.controls['time_start'].setValue(testTageler.time_start);
    component.tagelerForm.controls['time_end'].setValue(testTageler.time_end);
    component.tagelerForm.controls['bringAlong'].setValue(testTageler.bringAlong);
    component.tagelerForm.controls['uniform'].setValue(testTageler.uniform);
    component.tagelerForm.controls['picture'].setValue(testTageler.picture);
    component.tagelerForm.get('checkout.deadline_date').setValue(testTageler.checkout.deadline_date);
    component.tagelerForm.get('checkout.deadline_time').setValue(testTageler.checkout.deadline_time);
    component.tagelerForm.get('checkout.contact.name').setValue(testTageler.checkout.contact.name);
    component.tagelerForm.get('checkout.contact.phone').setValue(testTageler.checkout.contact.phone);
    component.tagelerForm.get('checkout.contact.mail').setValue(testTageler.checkout.contact.mail);
    component.tagelerForm.get('checkout.contact.other').setValue(testTageler.checkout.contact.other);
    component.tagelerForm.controls['free'].setValue(testTageler.free);
    expect(component.tagelerForm.value).toEqual(testTageler);
  }));


  it('should display "Tageler erstellen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').firstChild.textContent).toContain('Tageler erstellen');
  });

  it('should display "Abbrechen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').firstChild.textContent).toContain('Abbrechen');
  });

  it('should display "Gruppen anzeigen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = false;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[1].textContent).toContain('Gruppen anzeigen');
  });

  it('should display "Ansicht schliessen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[1].textContent).toContain('Ansicht schliessen');
  });

  it('should display "Auswahl aufheben" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[2].textContent).toContain('Auswahl aufheben');
  });

  it('should render title Trupp in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').firstChild.textContent).toContain('Trupp');
  }));

  it('should render title Meute in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h4')[1].textContent).toContain('Meute');
  }));

  it('should render title Equipe in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h4')[2].textContent).toContain('Equipe');
  }));

  it('should display groups when "show groups" is clicked', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.groups = [{name: 'Baghira', type: 'Trupp'},
                                        {name: 'Mogli', type: 'Meute'},
                                        {name: 'Turmalin', type: 'Equipe'}];
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[3].firstChild.textContent).toContain('Baghira')
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[4].textContent).toContain('Mogli')
    expect(fixture.debugElement.nativeElement.querySelectorAll('button')[5].textContent).toContain('Turmalin')
});

});
