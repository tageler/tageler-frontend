import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Tageler } from '../tagelers/tageler';
import { TagelerService } from '../tagelers/tageler.service';

import { Group } from '../groups/group';
import { GroupService } from '../groups/group.service';

import { DefaultPictureService } from '../default-pictures/default-picture.service';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import * as moment from 'moment';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  tagelers: Tageler[];
  groups: Group[];
  selectedTageler: Tageler;
  selectedGroup: Group;
  showUpcomingTageler = true;
  createTageler = false;
  showGroups = false;
  showOldTagelers = false;

  formValid = false;
  imageIsPresent = false;

  // For html display
  update: boolean;
  view: boolean;

  // For the preview picture when creating, editing or viewing a tageler
  base64textString: String;
  previewBase64: String;

  // Multiselect for group filter
  myOptions: IMultiSelectOption[] = [];

  public popoverTitle: String = 'Achtung';
  public popoverMessage: String = 'Soll dieser Tageler wirklich gelöscht werden?';
  public cancelClicked: boolean = false;
  public defaultPictureUbungsfrei: String = '';


  @Input()
  tageler: Tageler;
  tagelerForm: FormGroup;
  tagelerStyleForm: FormGroup;

  constructor(
    private tagelerService: TagelerService,
    private groupService: GroupService,
    private defaultPictureService: DefaultPictureService,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService) {
  }

  // Load all tagelers and the übungsfrei default picture once
  ngOnInit() {
    this.fetchTagelers();
    // TODO: change this to default ubungsfrei picture
    this.defaultPictureService.getDefaultPictureByName('defaultPictureUebungsfrei').then((defaultPicture) => {
      this.defaultPictureUbungsfrei = defaultPicture.picture;
    });
  }

  // Get all the tagelers and groups
  fetchTagelers() {
    // resets myOptions to contain all groups only once
    this.myOptions = [];
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          return tageler;
        });
      });

    this.groupService
      .getGroups()
      .then((groups: Group[]) => {
        this.groups = groups.map((group) => {
          if (!group.name) {
            group.name = 'default';
          }
          this.myOptions.push({id: group.name, name: group.name});
          return group;
        });
      });
  }


  /***************************
   Manage buttons and forms
   **************************/

  showListOfGroups() {
    this.showGroups = true;
  }

  hideListOfGroups() {
    this.showGroups = false;
    this.selectedGroup = null;
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
  }

  closeDetailsOfTageler() {
    this.view = false;
  }

  unselectSelectedGroups() {
    this.selectedGroup = null;
    this.showGroups = true;
  }

  showAllOldTagelers() {
    this.showOldTagelers = true;
    this.view = this.update = this.createTageler = this.showUpcomingTageler = false;
  }

  hideAllOldTagelers() {
    this.showOldTagelers = false;
    this.showUpcomingTageler = true;
  }

  // Prepare the create Tageler form, load default values and validators
  showCreateTagelerForm() {
    let date_offset = 0;
    if (moment() >= moment().isoWeekday('Saturday')) {
      date_offset = 1;
    }
    const startDate = moment().isoWeekday('Saturday').add(date_offset, 'week').hour(14).startOf('hour');
    const endDate = moment().isoWeekday('Saturday').add(date_offset, 'week').hour(17).startOf('hour');
    const checkoutDate = moment().isoWeekday('Wednesday').add(date_offset, 'week').startOf('day');

    this.tageler = {
      title: '',
      text: '',
      group: [''],
      start: startDate.toDate(),
      end: endDate.toDate(),
      bringAlong: 'BPMSTZ und Zvieri',
      uniform: 'Uniform und Kravatte, dem Wetter angepasste Kleidung',
      picture: '',
      checkout: {
        deadline: checkoutDate.toDate(),
        contact: [{
          name: '',
          phone: '',
          mail: '',
          other: '',
        }]
      },
      free: false,
      background_color: '#ededed',
      font_family: 'Trebuchet MS',
      color: '#bb0000',
    };
    this.selectedTageler = this.tageler;
    this.tagelerForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      group: [[''], Validators.required],
      date_start: [startDate.format('YYYY-MM-DD'), Validators.required],
      date_end: [endDate.format('YYYY-MM-DD'), Validators.required],
      time_start: [startDate.format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
      time_end: [endDate.format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
      bringAlong: this.tageler.bringAlong,
      uniform: this.tageler.uniform,
      picture: '',
      checkout: this.fb.group({
        deadline_date: [checkoutDate.format('YYYY-MM-DD'), Validators.required],
        deadline_time: [checkoutDate.format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
        contact: this.fb.group({
          name: '',
          phone: '',
          mail: '',
          other: '',
        })
      }),
      free: '',
    });

    this.tagelerStyleForm = this.fb.group({
      background_color: '',
      font_family: '',
      color: '',
    });

    this.tagelerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.previewBase64 = '';
    this.selectedTageler = this.tageler;
    this.selectedGroup = null;
    this.showGroups = false;
    this.showUpcomingTageler = false;
    this.createTageler = true;
    this.update = false;
    this.view = false;
  }

  cancelCreateTageler() {
    this.createTageler = false;
    this.showUpcomingTageler = true;
    this.selectedTageler = null;
    this.tagelerForm.reset();
  }

  showTagelerEditForm(tageler: Tageler) {
    this.tageler = tageler;
    this.view = false;
    this.update = true;
    this.previewBase64 = 'data:image/png;base64,' + this.tageler.picture;
    this.editAndUpdateForm(this.tageler);
  }

  showTagelerDetailsForm(tageler: Tageler) {
    this.tageler = tageler;
    this.view = true;
    this.update = false;
    this.previewBase64 = 'data:image/png;base64,' + this.tageler.picture;
    this.editAndUpdateForm(this.tageler);
  }

  editAndUpdateForm(tageler: Tageler) {
    this.tageler = tageler;
    this.tagelerForm = this.fb.group({
      title: [this.tageler.title, Validators.required],
      text: [this.tageler.text, Validators.required],
      group: [this.tageler.group, Validators.required],
      date_start: [moment(this.tageler.start).format('YYYY-MM-DD'), Validators.required],
      date_end: [moment(this.tageler.end).format('YYYY-MM-DD'), Validators.required],
      time_start: [moment(this.tageler.start).format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
      time_end: [moment(this.tageler.end).format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
      bringAlong: this.tageler.bringAlong,
      uniform: this.tageler.uniform,
      picture: '',
      checkout: this.fb.group({
        deadline_date: [moment(this.tageler.checkout.deadline).format('YYYY-MM-DD'), Validators.required],
        deadline_time: [moment(this.tageler.checkout.deadline).format('HH:mm'), Validators.compose([Validators.pattern('([01]?[0-9]{1}|2[0-3]{1})(:|.)[0-5]{1}[0-9]{1}'), Validators.required])],
        contact: this.fb.group({
          name: this.tageler.checkout.contact[0].name,
          phone: this.tageler.checkout.contact[0].phone,
          mail: this.tageler.checkout.contact[0].mail,
          other: this.tageler.checkout.contact[0].other,
        })
      }),
      free: this.tageler.free
    });

    this.tagelerStyleForm = this.fb.group({
      background_color: this.tageler.background_color,
      font_family: this.tageler.font_family,
      color: this.tageler.color,
    });

    this.tagelerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  /***************************
   Create & save new Tageler
   **************************/

  prepareSaveTageler(): Tageler {

    let deadlineSaved;
    if (this.tagelerForm.value.checkout.deadline_date && this.tagelerForm.value.checkout.deadline_time) {
      deadlineSaved = moment(this.tagelerForm.value.checkout.deadline_date + ' ' + this.tagelerForm.value.checkout.deadline_time, 'YYYY-MM-DD HH:mm').toDate();
    } else {
      deadlineSaved = null;
    }

    const saveTageler: Tageler = {
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      group: this.tagelerForm.value.group,
      // accept both . and :
      start: moment(this.tagelerForm.value.date_start + ' ' + this.tagelerForm.value.time_start, 'YYYY-MM-DD HH:mm').toDate(),
      end: moment(this.tagelerForm.value.date_end + ' ' + this.tagelerForm.value.time_end, 'YYYY-MM-DD HH:mm').toDate(),
      bringAlong: this.tagelerForm.value.bringAlong as string,
      uniform: this.tagelerForm.value.uniform as string,
      picture: this.base64textString as string,
      checkout: {
        deadline: deadlineSaved,
        contact: [{
          name: this.tagelerForm.value.checkout.contact.name as string,
          phone: this.tagelerForm.value.checkout.contact.phone as string,
          mail: this.tagelerForm.value.checkout.contact.mail as string,
          other: this.tagelerForm.value.checkout.contact.other as string,
        }]
      },
      free: this.tagelerForm.value.free as boolean,
      background_color: this.tageler.background_color,
      color: this.tageler.color,
      font_family: this.tagelerStyleForm.value.font_family as string
    };

    if (saveTageler.free) {
      this.setValuesForFreeTageler(saveTageler);
    } else {
      // checkbox returns undefined if never checked or unchecked
      saveTageler.free = false;
    }

    this.onValueChanged();
    this.selectedTageler = null;
    return saveTageler;
  }

  saveNewTageler() {
    this.tageler = this.prepareSaveTageler();
    this.createTageler = false;
    this.showUpcomingTageler = true;
    this.tagelerService.createTageler(this.tageler).then(
      data => {
        const jsonData = JSON.parse(JSON.stringify(data));
        if (jsonData.success) {
          console.log('success: ' + jsonData.msg);
          this.flashMessage.show('Tageler erfolgreich erstellt', {cssClass: 'alert-success', timeout: 3000} );

        } else {
          console.log('fail: ' + jsonData.msg);
          this.flashMessage.show('Es gab einen Fehler beim Erstellen des Tagelers', {cssClass: 'alert-danger', timeout: 3000} );
        }
      },
      error => {
        console.log('Something went wrong');
        this.flashMessage.show('Es gab einen Fehler beim Erstellen des Tagelers', {cssClass: 'alert-danger', timeout: 3000} );
      });
    this.tagelerForm.reset();
    this.fetchTagelers();
  }


  /***************************
    Update Tageler
   **************************/

  // Passes the updated tageler to the tageler service method (updateTageler)
  updateTageler() {
    this.tageler = this.prepareUpdateTageler();
    this.tagelerService.updateTageler(this.tageler).then(
      data => {
        const jsonData = JSON.parse(JSON.stringify(data));
        if (jsonData.success) {
          console.log('success: ' + jsonData.msg);
          this.flashMessage.show('Die Änderungen wurden gespeichert', {cssClass: 'alert-success', timeout: 3000} );
          this.fetchTagelers();
        } else {
          console.log('fail: ' + jsonData.msg);
          this.flashMessage.show('Es gab einen Fehler beim Speichern der Änderungen', {cssClass: 'alert-danger', timeout: 3000} );
          this.fetchTagelers();
        }
      },
      error => {
        console.log('Something went wrong');
        this.flashMessage.show('Es gab einen Fehler beim Speichern der Änderungen', {cssClass: 'alert-danger', timeout: 3000}
        );
        this.fetchTagelers();
      });
    this.update = false;
    this.view = true;
  }

  prepareUpdateTageler(): Tageler {
    let freeUpdated, startUpdated, endUpdated, deadlineUpdated;

    // set free value correctly
    if (this.tagelerForm.value.free == null) {
      freeUpdated = this.tageler.free;
    } else {
      freeUpdated = this.tagelerForm.value.free;
    }

    // Set start date correct, if nothing/only one field/both fields changed
    if (!this.tagelerForm.value.date_start && !this.tagelerForm.value.time_start) {
      startUpdated = this.tageler.start;

    } else if (!this.tagelerForm.value.date_start && this.tagelerForm.value.time_start) {
      startUpdated = new Date(new Date(this.tageler.start).toISOString().slice(0, 10) + 'T' +
        this.tagelerForm.value.time_start.replace('.', ':'));

    } else if (this.tagelerForm.value.date_start && !this.tagelerForm.value.time_start) {
      startUpdated = new Date(this.tagelerForm.value.date_start + 'T' +
        new Date(this.tageler.start).toISOString().slice(11, 16));

    } else {
      startUpdated = new Date(this.tagelerForm.value.date_start + 'T' +
        this.tagelerForm.value.time_start.replace('.', ':'));
    }

    // Set end date correct, if nothing/only one field/both fields changed
    if (!this.tagelerForm.value.date_end && !this.tagelerForm.value.time_end) {
      endUpdated = this.tageler.end;

    } else if (!this.tagelerForm.value.date_end && this.tagelerForm.value.time_end) {
      endUpdated = new Date(new Date(this.tageler.end).toISOString().slice(0, 10) + 'T' +
        this.tagelerForm.value.time_end.replace('.', ':'));

    } else if (this.tagelerForm.value.date_end && !this.tagelerForm.value.time_end) {
      endUpdated = new Date(this.tagelerForm.value.date_end + 'T' +
        new Date(this.tageler.end).toISOString().slice(11, 16));

    } else if (this.tagelerForm.value.date_end && this.tagelerForm.value.time_end) {
      endUpdated = new Date(this.tagelerForm.value.date_end + 'T' +
        this.tagelerForm.value.time_end.replace('.', ':'));
    }

    // Set checkout deadline date correct, if nothing/only one field/both fields changed
    if (!this.tagelerForm.value.checkout.deadline_date && !this.tagelerForm.value.checkout.deadline_time) {
      deadlineUpdated = this.tageler.checkout.deadline;

    } else if (!this.tagelerForm.value.checkout.deadline_date && this.tagelerForm.value.checkout.deadline_time) {
      deadlineUpdated = new Date(new Date(this.tageler.checkout.deadline).toISOString().slice(0, 10) + 'T' +
        this.tagelerForm.value.checkout.deadline_time.replace('.', ':'));

    } else if (this.tagelerForm.value.checkout.deadline_date && !this.tagelerForm.value.checkout.deadline_time) {
      deadlineUpdated = new Date(this.tagelerForm.value.checkout.deadline_date + 'T' +
        new Date(this.tageler.checkout.deadline).toISOString().slice(11, 16));

    } else if (this.tagelerForm.value.checkout.deadline_date && this.tagelerForm.value.checkout.deadline_time) {
      deadlineUpdated = new Date(this.tagelerForm.value.checkout.deadline_date + 'T' +
        this.tagelerForm.value.checkout.deadline_time.replace('.', ':'));
    }

    // update Tageler should contain (new) values from tageler Form
    const updateTageler: Tageler = {
      _id: this.tageler._id,
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      group: this.tagelerForm.value.group,
      start: startUpdated,
      end: endUpdated,
      bringAlong: this.tagelerForm.value.bringAlong as string,
      uniform: this.tagelerForm.value.uniform as string,
      picture: this.base64textString as string,
      checkout: {
        deadline: deadlineUpdated,
        contact: [{
          name: this.tagelerForm.value.checkout.contact.name as string,
          phone: this.tagelerForm.value.checkout.contact.phone as string,
          mail: this.tagelerForm.value.checkout.contact.mail as string,
          other: this.tagelerForm.value.checkout.contact.other as string,
        }]
      },
      free: freeUpdated as boolean,
      background_color: this.tageler.background_color,
      color: this.tageler.color,
      font_family: this.tageler.font_family,
    };

    // keep old picture if no new one is selected
    if (typeof this.base64textString === 'undefined') {
      updateTageler.picture = this.tageler.picture;
    }

    if (updateTageler.free) {
      this.setValuesForFreeTageler(updateTageler);
    }

    return updateTageler;
  }

  // handles a canceled update
  cancelUpdate() {
    this.view = true;
    this.update = false;
    window.location.reload();
  }


  /***************************
   Delete Tageler
   **************************/

  // Passes the id of the tageler to delete to the tageler service method (deleteTageler)
  deleteSelectedTageler(tageler: Tageler): void {
    this.tagelerService.deleteTageler(tageler._id).then(
      data => {
        const jsonData = JSON.parse(JSON.stringify(data));
        if (jsonData.success) {
          console.log('success: ' + jsonData.msg);
          this.flashMessage.show('Der Tageler wurde gelöscht', {cssClass: 'alert-success', timeout: 3000} );
          this.fetchTagelers();

        } else {
          console.log('fail: ' + jsonData.msg);
          this.flashMessage.show('Es gab einen Fehler beim Löschen des Tagelers', {cssClass: 'alert-danger', timeout: 3000} );
          this.fetchTagelers();
        }
      },
      error => {
        console.log('Something went wrong');
        this.flashMessage.show('Es gab einen Fehler beim Löschen des Tagelers', {cssClass: 'alert-danger', timeout: 3000} );
        this.fetchTagelers();
      });
  }


  /***************************
   Picture file reader
   **************************/

  // File reader for the pictures
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
      this.imageIsPresent = true;
      this.formValidation()
      this.checkIfImageIsNotTooBig(file);
    }
  }

  // Picture conversion to base64
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    this.previewBase64 = 'data:image/png;base64,' + btoa(binaryString);
  }

  /***************************
   Form Validation
   **************************/

  endDateError: any = {isError: false, errorMessage: ''};
  checkoutError: any= {isCheckoutError: false, errorCheckoutMessage: ''};
  mailOrPhoneError: any= {isMailOrPhoneError: false, errorMailOrPhoneMessage: ''};
  leiterError: any= {isLeiterError: false, errorMessageLeiter: ''};
  imageError: any= {isImageError: false, errorImageMessage: ''};

  validationMessages = {
    'title': {
      'required': 'Geben Sie bitte einen Namen ein.',
    },
    'group': {
      'required': 'Wählen Sie bitte eine Gruppe aus.'
    },
    'text': {
      'required': 'Beschreiben Sie bitte die Aktivität.'
    },
    'date_start': {
      'required': 'Bitte Datum angeben.'
    },
    'time_start': {
      'required': 'Bitte Zeit angeben.',
      'pattern': 'Bitte korrekte Zeit angeben.'
    },
    'date_end': {
      'required': 'Bitte Datum angeben.'
    },
    'time_end': {
      'required': 'Bitte Zeit angeben.',
      'pattern': 'Bitte korrekte Zeit angeben.'
    },
    'picture': {
      'required': 'Bitte Bild einfügen.'
    },
    'deadline_date': {
      'required': 'Bitte Datum angeben.',
    },
    'deadline_time': {
      'required': 'Bitte korrekte Zeit angeben.',
      'pattern': 'Bitte korrekte Zeit angeben.'
    },
  };
  formErrors = {
    'title': '',
    'group': '',
    'text': '',
    'date_start': '',
    'time_start': '',
    'date_end': '',
    'time_end': '',
    'picture': '',
    'deadline_date': '',
    'deadline_time': '',
  };

  formValidation() {
    if (!this.tageler.free) {
      if (
        this.tagelerForm.controls['title'].valid &&
        this.tagelerForm.controls['group'].valid &&
        this.tagelerForm.get('checkout.contact.name').value != '' &&
        (this.tagelerForm.get('checkout.contact.mail').value != '' ||
        this.tagelerForm.get('checkout.contact.phone').value != '') &&
        !this.endDateError.isError &&
        !this.checkoutError.isCheckoutError &&
        !this.mailOrPhoneError.isMailOrPhoneError &&
        !this.leiterError.isLeiterError &&
        (this.imageIsPresent || this.update)) {
        this.formValid = true;
      } else {
        this.formValid = false;
      }
    }
    if (this.tageler.free) {
      if (
        this.tagelerForm.controls['title'].valid &&
        this.tagelerForm.controls['group'].valid &&
        this.tagelerForm.controls['date_start'].valid) {
        this.formValid = true;
      } else {
        this.formValid = false;
      }
    }
  }

  onValueChanged(data?: any) {
    if (!this.tagelerForm) {
      return;
    }
    const form = this.tagelerForm;

    // Form validation for start/end/checkout date and mail/phone
    this.compareStartAndEndDate();
    this.checkCheckoutDeadlineDate();
    this.checkIfMailOrPhoneIsPresent();
    this.checkIfLeiterIsPresent();
    this.formValidation();
    this.tageler.group = this.tagelerForm.controls['group'].value;

    for (const field in this.formErrors) {

      // clear previous error message (if any)
      this.formErrors[field] = '';
      let control;

      if (field == 'deadline_date') {
        control = form.get('checkout.deadline_date');
      } else if (field == 'deadline_time') {
        control = form.get('checkout.deadline_time');
      } else {
        control = form.get(field);
      }

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  compareStartAndEndDate() {
    if (!this.tageler.free) {
      if (new Date(this.tagelerForm.controls['date_end'].value) < new Date(this.tagelerForm.controls['date_start'].value)) {
        this.endDateError = {isError: true, errorMessage: 'Das Datum darf nicht vor dem Start-Datum liegen.'};
      }
      if (new Date(this.tagelerForm.controls['date_end'].value) >= new Date(this.tagelerForm.controls['date_start'].value)) {
        this.endDateError = {isError: false, errorMessage: ''};
      }
    } else {
      this.endDateError = {isError: false, errorMessage: ''};
    }
  }

  checkCheckoutDeadlineDate() {
    if (!this.tageler.free) {
      if (this.tagelerForm.get('checkout.deadline_date')) {
        if (new Date(this.tagelerForm.get('checkout.deadline_date').value) > new Date(this.tagelerForm.controls['date_start'].value)) {
          this.checkoutError = {
            isCheckoutError: true,
            errorCheckoutMessage: 'Das Datum darf nicht nach dem Start-Datum liegen.'
          };
        }
        if (new Date(this.tagelerForm.get('checkout.deadline_date').value) <= new Date(this.tagelerForm.controls['date_start'].value)) {
          this.checkoutError = {isCheckoutError: false, errorCheckoutMessage: ''};
        }
      }
    }else {
      this.checkoutError = {isCheckoutError: false, errorCheckoutMessage: ''};
    }
  }

  checkIfMailOrPhoneIsPresent() {
    if (!this.tageler.free) {
      // either mail or phone has to be set
      if (this.tagelerForm.get('checkout.contact.mail').dirty || this.tagelerForm.get('checkout.contact.phone').dirty) {

        // if mail or phone is deleted, error message is shown
        if (!this.tagelerForm.get('checkout.contact.mail').value && !this.tagelerForm.get('checkout.contact.phone').value) {
          this.mailOrPhoneError = {
            isMailOrPhoneError: true,
            errorMailOrPhoneMessage: 'Bitte Mail oder Telefonnummer angeben'
          };
        }

        // if mail or phone is set, form is valid
        if (this.tagelerForm.get('checkout.contact.mail').value || this.tagelerForm.get('checkout.contact.phone').value) {
          this.mailOrPhoneError = {isMailOrPhoneError: false, errorMailOrPhoneMessage: ''};
        }
      }
    } else {
      this.mailOrPhoneError = {isMailOrPhoneError: false, errorMailOrPhoneMessage: ''};
    }
  }


  checkIfLeiterIsPresent() {
    if (!this.tageler.free) {
      // if leiter is not blank, form is valid
      if (this.tagelerForm.get('checkout.contact.name').dirty) {
        if (!this.tagelerForm.get('checkout.contact.name').value) {
          this.leiterError = {
            isLeiterError: true, errorMessageLeiter: 'Bitte einen Leiter angeben.'
          };
        }
        if (this.tagelerForm.get('checkout.contact.name').value) {
          this.leiterError = {isLeiterError: false, errorMessageLeiter: ''};
        }
      }
    } else {
      this.leiterError = {isLeiterError: false, errorMessageLeiter: ''};
    }
  }

  checkIfImageIsNotTooBig(file: File) {
    if (this.imageIsPresent) {
      if (file.size > 2000000) {
        this.imageError = {
          isImageError: true, errorImageMessage: 'Bild zu gross, max. 2 MB.'
        };
        this.imageIsPresent = false;
      }

      if (file.size <= 2000000) {
        this.imageError = {
          isImageError: false, errorImageMessage: ''
        };
        this.imageIsPresent = true;
      }
    }
  }

  /***************************
   Helper Methods
   **************************/

  // Set default title and picture if übungsfrei, or else delete it
  fillFree(e) {
    if (e.target.checked) {
      this.tagelerForm.controls['title'].setValue('Übungsfrei');
      this.previewBase64 = 'data:image/png;base64,' + this.defaultPictureUbungsfrei;
      this.tageler.free = true;
    } else {
      this.tagelerForm.controls['title'].setValue('');
      this.tageler.free = false;
    }
  }

  // Fill in all the necessary fields for übungsfrei to meet api requirements
  setValuesForFreeTageler(tageler: Tageler) {
    this.tageler = tageler;
    this.tageler.start = moment(this.tagelerForm.value.date_start).startOf('day').toDate();
    this.tageler.start = moment(this.tagelerForm.value.date_start).endOf('day').toDate();
    this.tageler.uniform = 'free';
    this.tageler.bringAlong = 'free';
    this.tageler.checkout.deadline = null;
    this.tageler.checkout.contact[0].name = null;
    this.tageler.checkout.contact[0].phone = null;
    this.tageler.checkout.contact[0].mail = null;
    this.tageler.checkout.contact[0].other = null;

    if (typeof this.tageler.picture === 'undefined') {
      this.tageler.picture = this.defaultPictureUbungsfrei.toString();
    }
  }

  // Style and other configuration
  setOffsetTop() {
    const elements = document.getElementsByClassName('groupButton');
    let maxOffset = 0;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top > maxOffset) {
        maxOffset = elements[i].getBoundingClientRect().top;
      }
    }
    if (maxOffset <= 0) {
      document.getElementById('updateViewForm').style.top = document.body.scrollTop.toString() + 'px';
    }else {
      document.getElementById('updateViewForm').style.top = 'auto';
    }
  }

  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-secondary btn-block group-name',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll: true,
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Alle auswählen',
    uncheckAll: 'Auswahl löschen',
    checked: 'Einheit ausgewählt',
    checkedPlural: 'Einheiten ausgewählt',
    searchPlaceholder: 'Suchen',
    defaultTitle: 'Einheit(en) auswählen',
    allSelected: 'Alle ausgewählt',
  };

  myOptions_font: IMultiSelectOption[] = [
    { id: '"Trebuchet MS", Helvetica, sans-serif', name: 'Trebuchet MS'},
    { id: 'Arial, Helvetica, sans-serif', name: 'Arial'},
    { id: '"Arial Black", Gadget, sans-serif', name: 'Arial Black'},
    { id: 'Helvetica', name: 'Helvetica'},
    { id: 'Helvetica Neue, Helvetica, sans-serif', name: 'Helvetica Neue'},
    { id: 'Roboto Slab, Helvetica, sans-serif', name: 'Roboto Slab'},
    { id: 'Tahoma, Geneva, sans-serif', name: 'Thaoma'},
    { id: 'Verdana, Geneva, sans-serif', name: 'Verdana'},
  ];

  // Style and other configuration
  mySettings_font: IMultiSelectSettings = {
    enableSearch: false,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-secondary btn-block',
    dynamicTitleMaxItems: 1,
    displayAllSelectedText: true,
    showCheckAll: false,
    showUncheckAll: true,
    selectionLimit: 1,
    autoUnselect: true,
  };

  // Text configuration
  myTexts_font: IMultiSelectTexts = {
    uncheckAll: 'Auswahl löschen',
    checked: 'Schriftart ausgewählt',
    defaultTitle: 'Schriftart wählen',
  };
}
