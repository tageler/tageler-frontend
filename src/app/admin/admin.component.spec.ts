import { async, fakeAsync, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AdminComponent } from './admin.component';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FileUploadModule } from 'ng2-file-upload';
import { ConfirmModule} from 'angular2-bootstrap-confirm';
import { TagelerService } from '../tagelers/tageler.service';
import { GroupService } from '../groups/group.service';
import { DefaultPictureService } from '../default-pictures/default-picture.service';
import { TagelerByGroupAndByDate } from '../pipes/tagelerByGroupAndByDate.pipe';
import { FilterGroupByTypePipe } from '../pipes/groupType.pipe';
import { OldTagelerByGroupAndByDate } from '../pipes/oldTagelerByGroupAndByDate.pipe'
import { Tageler } from '../tagelers/tageler';
import { Group } from '../groups/group';
import { LOCALE_ID } from '@angular/core';
import { ColorPickerModule } from 'angular2-color-picker';
import { ToLocalTimePipe } from '../pipes/toLocalTimePipe.pipe';
import { ToLocalDatePipe } from '../pipes/toLocalDatePipe.pipe';
import { SanitizeHtmlPipe } from '../pipes/sanitizeHTML.pipe';


describe('Component: AdminComponent', () => {
  let tagelerService: TagelerService,
    groupService: GroupService,
    component: AdminComponent,
    fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        TagelerByGroupAndByDate,
        FilterGroupByTypePipe,
        OldTagelerByGroupAndByDate,
        ToLocalTimePipe,
        ToLocalDatePipe,
        SanitizeHtmlPipe ],
      imports: [
        ReactiveFormsModule,
        FileUploadModule,
        ConfirmModule,
        FormsModule,
        MultiselectDropdownModule,
        FlashMessagesModule,
        ColorPickerModule],
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
        { provide: DefaultPictureService, useClass: DefaultPictureService },
        BaseRequestOptions,
        { provide: LOCALE_ID, useValue: "de" },
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
    component.showCreateTagelerForm();
    expect(component.tagelerForm instanceof FormGroup).toBe(true);
  });


  it('tagelerForm should contain right data', fakeAsync(() => {
    component.showCreateTagelerForm();
    const start_date1 = '2017-10-28T12:00:00.824Z';
    const end_date1 = '2017-10-28T15:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';
    const testTageler = {
      title: 'test',
      text: 'text',
      group: 'Test Group',
      date_start: new Date(start_date1).toISOString().slice(0, 10),
      date_end: new Date(end_date1).toISOString().slice(0, 10),
      time_start: '14:00',
      time_end: '17:00',
      bringAlong: 'Tasse',
      uniform: 'Kleid',
      picture: '',
      checkout: {
        deadline_date: new Date(checkout_date1).toISOString().slice(0, 10),
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
    expect(fixture.debugElement.nativeElement.querySelector('#navButton1').textContent).toContain('Tageler erstellen');
  });

  it('should display "Abbrechen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton2').textContent).toContain('Abbrechen');
  });

  it('should display "Gruppen anzeigen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = false;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton3').textContent).toContain('Gruppen anzeigen');
  });

  it('should display "Ansicht schliessen" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton4').textContent).toContain('Ansicht schliessen');
  });

  it('should display "Auswahl aufheben" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton5').textContent).toContain('Auswahl aufheben');
  });

  it('should display "Vergangene Tageler" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showOldTagelers = false;
    fixture.componentInstance.showGroups = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton6').textContent).toContain('Vergangene Tageler');
  });

  it('should display "Aktuelle Tageler" Button', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.createTageler = false;
    fixture.componentInstance.showGroups = true;
    fixture.componentInstance.showOldTagelers = true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#navButton7').textContent).toContain('Aktuelle Tageler');
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
    expect(fixture.debugElement.nativeElement.querySelector('#groupButton1').textContent).toContain('Baghira');
    expect(fixture.debugElement.nativeElement.querySelector('#groupButton2').textContent).toContain('Mogli');
    expect(fixture.debugElement.nativeElement.querySelector('#groupButton3').textContent).toContain('Turmalin');
  });

  it('tageler cards are displayed correctly', () => {
    const start_date1 = '2017-10-28T12:00:00.824Z';
    const end_date1 = '2017-10-28T15:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';
    const start_date2 = '2017-10-29T12:00:00.824Z';
    const end_date2 = '2017-10-29T15:00:00.824Z';
    const checkout_date2 = '2017-10-25T12:00:00.824Z';

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
    }, {title: 'Tageler 2',
      text: 'Text 2',
      group: ['Baghira'],
      start: new Date(start_date2),
      end: new Date(end_date2),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date2),
        contact: [{
          name: 'Person 2',
          phone: '0123456',
          mail: 'person2@mail.com',
          other: ''}]
      },
      free: false
    }];

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').firstChild.textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[1].textContent).toContain('Samstag, 28. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton1Upcoming').textContent).toContain('Löschen');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton2Upcoming').textContent).toContain('Details');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton3Upcoming').textContent).toContain('Edit');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[2].textContent).toContain('Tageler 2');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[3].textContent).toContain('Sonntag, 29. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card').length).toBe(2);
    expect(fixture.debugElement.nativeElement.querySelectorAll('#cardButton1Upcoming')[1].textContent).toContain('Löschen');
    expect(fixture.debugElement.nativeElement.querySelectorAll('#cardButton2Upcoming')[1].textContent).toContain('Details');
    expect(fixture.debugElement.nativeElement.querySelectorAll('#cardButton3Upcoming')[1].textContent).toContain('Edit');
  });

  it('tageler should contain 2 groups', () => {
    const start_date1 = '2017-10-28T12:00:00.824Z';
    const end_date1 = '2017-10-28T15:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [
      { title: 'Tageler 1',
      text: 'Text 1',
      group: ['Baghira','Rikki-Tikki'],
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

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.card-title').firstChild.textContent).toContain('Tageler 1');
    expect(fixture.debugElement.nativeElement.querySelectorAll('.card-title')[1].textContent).toContain('Samstag, 28. Oktober 2017');
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').firstChild.textContent).toContain('Baghira','Rikki-Tikki');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton1Upcoming').textContent).toContain('Löschen');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton2Upcoming').textContent).toContain('Details');
    expect(fixture.debugElement.nativeElement.querySelector('#cardButton3Upcoming').textContent).toContain('Edit');
  });

  it('test if short details form is shown when tageler is free', () => {
    const start_date1 = '2017-10-28T12:00:00.824Z';
    const end_date1 = '2017-10-28T15:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [
      { title: 'Übungsfrei',
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
        free: true
      }];

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.componentInstance.tageler = tageler[0];
    fixture.componentInstance.showTagelerDetailsForm(tageler[0]);
    fixture.detectChanges();

    // Details Form should be displayed and disabled
    expect(fixture.debugElement.nativeElement.querySelector('.updateAndViewForm')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#enableInput').disabled).toBeTruthy();
    expect(fixture.componentInstance.view).toBe(true);
    expect(fixture.componentInstance.update).toBe(false);

    // Checkbox is checked (tageler is free)
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_free').checked).toBeTruthy();

    // Title
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[1].textContent).toContain('Titel*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_title').value).toContain('Übungsfrei');

    //Text
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[2].textContent).toContain('Text*:');

    // Group
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[3].textContent).toContain('Einheit*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_group').value).toContain('Baghira');

    // Date
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[4].textContent).toContain('Datum*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start_free').value).toContain('2017-10-28');

    // Start & End date are not defined
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start_time')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_end')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_end_time')).toBeNull();

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_bringAlong')).toBeNull();

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_uniform')).toBeNull();

    // Checkout deadline and contact
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_deadline')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_deadline_time')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_name')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_phone')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_mail')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_other')).toBeNull();

    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#filePicker2')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_picture')).toBeDefined();

    // Buttons
    expect(fixture.debugElement.nativeElement.querySelector('#close').textContent).toContain('Ansicht schliessen');
    expect(fixture.debugElement.nativeElement.querySelector('#save')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#cancel')).toBeNull();
  });

  it('test if short update form is shown when tageler is free', () => {
    const start_date1 = '2017-10-28T12:00:00.824Z';
    const end_date1 = '2017-10-28T15:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [
      { title: 'Übungsfrei',
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
        free: true
      }];

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.componentInstance.tageler = tageler[0];
    fixture.componentInstance.showTagelerEditForm(tageler[0]);
    fixture.detectChanges();

    // Update Form is displayed correctly
    expect(fixture.debugElement.nativeElement.querySelector('.updateAndViewForm')).toBeDefined();
    expect(fixture.componentInstance.view).toBe(false);
    expect(fixture.componentInstance.update).toBe(true);

    // Checkbox is checked (tageler is free)
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_free').checked).toBeTruthy();

    // Title
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[1].textContent).toContain('Name*:');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').value).toContain('Übungsfrei');

    // Text
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[2].textContent).toContain('Text*:');

    // Group
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[3].textContent).toContain('Einheit*:');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_group')).toBeDefined();

    // Date
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[4].textContent).toContain('Datum*:');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_free').value).toContain('2017-10-28');

    // Start & End date are not defined
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time')).toBeNull();

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong')).toBeNull();

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform')).toBeNull();

    // Checkout deadline & contact
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_name')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other')).toBeNull();

    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#update_formControlName_picture')).toBeDefined();

    // Buttons
    expect(fixture.debugElement.nativeElement.querySelector('#close')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#saveUpdate').textContent).toContain('Speichern');
    expect(fixture.debugElement.nativeElement.querySelector('#cancel').textContent).toContain('Abbrechen');
  });

  it('test if full details form is shown when tageler is not free', () => {
    const start_date1 = '2017-10-28T14:00:00.824Z';
    const end_date1 = '2017-10-28T17:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [
      { title: 'Brätle',
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
            other: ''
          }]
        },
        free: false,
      }];

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.componentInstance.tageler = tageler[0];
    fixture.componentInstance.showTagelerDetailsForm(tageler[0]);
    fixture.detectChanges();

    // Details Form is displayed
    expect(fixture.debugElement.nativeElement.querySelector('.viewForm')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#enableInput').disabled).toBeTruthy();
    expect(fixture.componentInstance.view).toBe(true);
    expect(fixture.componentInstance.update).toBe(false);

    // Checkbox should not be checked (tageler not free)
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_free').checked).toBeFalsy();

    // Title
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[1].textContent).toContain('Titel*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_title').value).toContain('Brätle');

    // Text
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[2].textContent).toContain('Text*:');

    // Group
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[3].textContent).toContain('Einheit*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_group').value).toContain('Baghira');

    // Start & End date should be defined
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[4].textContent).toContain('Start*:');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start').value).toContain('2017-10-28');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start_time').value).toContain('14:00');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_start_free')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_end').value).toContain('2017-10-28');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_date_end_time').value).toContain('17:00');

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_bringAlong').value).toContain('Essen');

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_uniform').value).toContain('Kleidung');

    // Checkout deadline and contact
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_deadline').value).toContain('2017-10-25');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_deadline_time').value).toContain('12:00');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_name').value).toContain('Person 1');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_phone').value).toContain('01234');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_mail').value).toContain('person1@mail.com');
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_checkout_other').value).toBeDefined();

    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#filePicker2')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#formControlName_picture')).toBeDefined();

    // Buttons
    expect(fixture.debugElement.nativeElement.querySelector('#close').textContent).toContain('Ansicht schliessen');
  });

  it('test if full update form is shown when tageler is not free', () => {
    const start_date1 = '2017-10-28T14:00:00.824Z';
    const end_date1 = '2017-10-28T17:00:00.824Z';
    const checkout_date1 = '2017-10-25T12:00:00.824Z';

    const tageler: Array<Tageler> = [
      { title: 'Brätle',
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
            other: ''
          }]
        },
        free: false,
      }];

    const fixture = TestBed.createComponent(AdminComponent);
    fixture.componentInstance.tagelers = tageler;
    fixture.componentInstance.tageler = tageler[0];
    fixture.componentInstance.showTagelerEditForm(tageler[0]);
    fixture.detectChanges();

    // Update Form should be displayed
    expect(fixture.componentInstance.view).toBe(false);
    expect(fixture.componentInstance.update).toBe(true);

    // Checkbox should not be checked (tageler not free)
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_free').checked).toBeFalsy();

    // Title
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[1].textContent).toContain('Name*:');
    //expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').value).toContain('Brätle');

    // Text
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[2].textContent).toContain('Text*:');

    // Group
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[3].textContent).toContain('Einheit*:');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_group')).toBeDefined();

    // Start & End date should be defined
    expect(fixture.debugElement.nativeElement.querySelectorAll('label')[4].textContent).toContain('Start*:');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start').value).toContain('2017-10-28');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time').value).toContain('14:00');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_free')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end').value).toContain('2017-10-28');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time').value).toContain('17:00');

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong').value).toContain('Essen');

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform').value).toContain('Kleidung');

    // Checkout deadline and contact
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline').value).toContain('2017-10-25');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time').value).toContain('12:00');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_name').value).toContain('Person 1');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone').value).toContain('01234');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail').value).toContain('person1@mail.com');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other').value).toBeDefined();

    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#filePicker2_update')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#update_formControlName_picture')).toBeDefined();

    // Buttons
    expect(fixture.debugElement.nativeElement.querySelector('#saveUpdate').textContent).toContain('Speichern');
    expect(fixture.debugElement.nativeElement.querySelector('#cancel').textContent).toContain('Abbrechen');
  });

  it('test if create Form is displayed correctly', () => {
    component.showCreateTagelerForm();
    fixture.detectChanges();

    expect(component.selectedTageler).toBeDefined();

    // Hinweise
    expect(fixture.debugElement.nativeElement.querySelector('.warning').textContent).toContain('Hinweis: Felder, die mit * markiert sind, sind Pflichtfelder und müssen ausgefüllt werden!');
    // Checkbox
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_free').checked).toBeFalsy();
    // Titel
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title')).toBeDefined();
    // Text
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_text')).toBeDefined();
    // Group
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_group')).toBeDefined();
    // Start
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_free')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time')).toBeDefined();
    // End
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time')).toBeDefined();
    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong')).toBeDefined();
    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform')).toBeDefined();
    // Checkout deadline
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time')).toBeDefined();
    // Checkout contact
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other')).toBeDefined();
    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#filePicker')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_picture')).toBeDefined();

    // Button
    expect(fixture.debugElement.nativeElement.querySelector('#saveNew').textContent).toContain('Speichern');
  });

  it('test if form validation for create form works', () => {
    component.showCreateTagelerForm();
    fixture.detectChanges();
    let sat = new Date, wed = new Date(), start, end, checkoutDate;
    start = new Date(new Date(sat.setDate(sat.getDate() + (6 + 7 - sat.getDay()) % 7)).toISOString().slice(0, 10) + 'T' + '14:00:00');
    end = new Date(new Date(sat.setDate(sat.getDate() + (6 + 7 - sat.getDay()) % 7)).toISOString().slice(0, 10) + 'T' + '17:00:00');
    checkoutDate = new Date(new Date(wed.setDate(start.getDate() - 3)).toISOString().slice(0, 10) + 'T' + '00:00:00');

    expect(component.selectedTageler).toBeDefined();

    // Hinweise
    expect(fixture.debugElement.nativeElement.querySelector('.warning').textContent).toContain('Hinweis: Felder, die mit * markiert sind, sind Pflichtfelder und müssen ausgefüllt werden!');

    // Checkbox
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_free').checked).toBeFalsy();

    // Titel
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').value).toBe('');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').valid).toBeFalsy();

    // Text
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_text').valid).toBeFalsy();

    // Group
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_group').valid).toBeFalsy();

    // Start
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start').value).toBe(start.toISOString().slice(0, 10));
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time').value).toBe(start.toISOString().slice(11, 16));


    // End
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end').value).toBe(end.toISOString().slice(0, 10));
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time').value).toBe(end.toISOString().slice(11, 16));

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong').value).toBe('BPMSTZ und Zvieri');

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform').value).toBe('Uniform und Kravatte, dem Wetter angepasste Kleidung');

    // Checkout deadline
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline').value).toBe(checkoutDate.toISOString().slice(0, 10));
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time').value).toBe(checkoutDate.toISOString().slice(11, 16));

    // Checkout contact
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_name').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_name').value).toBe('');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone').value).toBe('');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail').value).toBe('');
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other').value).toBe('');

    // Picture
    expect(fixture.debugElement.nativeElement.querySelector('#filePicker').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_picture')).toBeDefined();

    // Form should be false
    expect(component.tagelerForm.valid).toBeFalsy();

    // Button
    expect(fixture.debugElement.nativeElement.querySelector('#saveNew').disabled).toBeTruthy();

  });

  it('create form should be valid if required inputs are set', () => {
    component.showCreateTagelerForm();
    fixture.detectChanges();

    // Initial form should be false
    expect(component.tagelerForm.valid).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#saveNew').disabled).toBeTruthy();

    // set title, group, text and contact
    component.tagelerForm.controls['title'].setValue('Test title');
    component.tagelerForm.controls['text'].setValue('Hi there');
    component.tagelerForm.controls['group'].setValue(['Turmalin']);
    component.tagelerForm.get('checkout.contact.name').setValue('Leiter 1');
    component.tagelerForm.get('checkout.contact.mail').setValue('abcd@abcd.com');

    // pretend image is there
    component.imageIsPresent = true;

    expect(component.tagelerForm.controls['title'].valid).toBeTruthy();
    expect(component.tagelerForm.controls['group'].valid).toBeTruthy();
    expect(component.tagelerForm.get('checkout.contact.name').valid).toBeTruthy();
    expect(component.tagelerForm.get('checkout.contact.mail').valid).toBeTruthy();
    expect(component.endDateError.isError).toBeFalsy();
    expect(component.checkoutError.isCheckoutError).toBeFalsy();
    expect(component.mailOrPhoneError.isMailOrPhoneError).toBeFalsy();
    expect(component.leiterError.isLeiterError).toBeFalsy();
    expect(component.imageIsPresent).toBeTruthy();

    // Do form validation
    component.formValidation();

    // Form should be valid now
    expect(component.tagelerForm.valid).toBeTruthy();
    expect(component.formValid).toBeTruthy();

    // Detect changes
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#saveNew').disabled).toBeFalsy();

  });

  it('test if form validation for update form works', () => {
    const tageler: Tageler =
      { title: 'Brätle',
        text: 'Text 1',
        group: ['Baghira'],
        start: new Date(),
        end: new Date(),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        picture: '',
        checkout: {
          deadline: new Date(),
          contact: [{
            name: 'Person 1',
            phone: '01234',
            mail: 'person1@mail.com',
            other: ''
          }]
        },
        free: false,
      };

    // pretend image is there
    component.imageIsPresent = true;

    component.showTagelerEditForm(tageler);
    fixture.detectChanges();

    // do form validation
    component.formValidation();

    // Hinweise
    expect(fixture.debugElement.nativeElement.querySelector('.warning').textContent).toContain('Hinweis: Felder, die mit * markiert sind, sind Pflichtfelder und müssen ausgefüllt werden!');

    // Checkbox
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_free').checked).toBeFalsy();

    // Titel
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_title').formErrors).toBeFalsy();

    // Text
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_text').formErrors).toBeFalsy();

    // Group
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_group_update').formErrors).toBeFalsy();

    // Start
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_start_time').required).toBeTruthy();

    // End
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_date_end_time').required).toBeTruthy();

    // Bring along
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_bringAlong').required).toBeFalsy();

    // Uniform
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_uniform').required).toBeFalsy();

    // Checkout deadline
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline').required).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_deadline_time').required).toBeTruthy();

    // Checkout contact
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_name').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_phone').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_mail').required).toBeFalsy();
    expect(fixture.debugElement.nativeElement.querySelector('#create_formControlName_checkout_other').required).toBeFalsy();

    // Button
    expect(component.tagelerForm.valid).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('#saveUpdate').disabled).toBeFalsy();

  });
});
