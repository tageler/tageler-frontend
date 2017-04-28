import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Tageler } from '../tagelers/tageler';
import { TagelerService } from '../tagelers/tageler.service';

import { Group } from '../groups/group';
import { GroupService } from '../groups/group.service';

import { ConfirmOptions, Position } from 'angular2-bootstrap-confirm';
import { Positioning } from 'angular2-bootstrap-confirm/position';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

// https://devcenter.heroku.com/articles/mean-apps-restful-api

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
    ConfirmOptions,
    {provide: Position, useClass: Positioning}
  ]
})

export class AdminComponent implements OnInit {
  tagelers: Tageler[];
  groups: Group[];
  selectedTageler: Tageler;
  selectedGroup: Group;
  showTageler = true;
  createTageler = false;
  showGroups = false;
  createSuccess: boolean;
  deleteSuccess: boolean;
  update: boolean;
  view: boolean;
  base64textString: String;
  previewBase64: String;


  public title: String = 'Achtung';
  public message: String = 'Soll dieser Tageler wirklich gelöscht werden?';
  public defaultPicture: String = '/9j/4AAQSkZJRgABAAAAAAAAAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wBDAEItMToxKUI6NjpKRkJPY6ZsY1tbY8uRmXim8dT9+e3U6OT//////////+To////////////////////////////2wBDAUZKSmNXY8NsbMP//+j/////////////////////////////////////////////////////////////////////wAARCAEyAd4DAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAUB/8QAQBAAAgIBAgMECAMHAwMEAwAAAQIAAxEEIRIxQRNRYfAFIjJxgZGx0RShwSMzQlJy4fEkNGI1U5IVQ0SiY4Ly/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEAAwEBAQEBAQAAAAAAAAABAhExIRJBUWFx/9oADAMBAAIRAxEAPwDoQEBAQEBAQEDDd/qdYtI9hN28/l4bwN0BAQEBAQPGBKkKcHGx7oGbTXv2jU3kdovI98DVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQKNXf2FWR7R2X7wPNHR2FOGHrncwNEBAQEBAQEDPqtOLl4l2sXdSPp55QGl1AuXhbaxdmB+vnlA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMNedXqu1P7us+rz38/YQN0BAQEBAQEBAQMupqcML6PbX2h/MPPnlAuotF9Qdds8x3QLICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBk11pVVqT27Nvh/eBfRUKKgi745nvgWQEBAQEBAQEBAQMdqHS2nUJk1k/tFz+fn6QNSOrqGU5U8jAlAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECLuqKWY4UczAyaJTba+pcczhfP5fOBtgICAgICAgIEXda14nYKPGBjf0kobCVlh3k4gaqXaysMyFD3GBMgEEEZB6QMefwNuME0Oc5/lMDbAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMdur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';


  @Input()
  tageler: Tageler;
  tagelerForm: FormGroup;

  constructor(
    private tagelerService: TagelerService,
    private groupService: GroupService,
    private fb: FormBuilder) {
    this.createForm();
  }

  handleFileSelect(evt) {
    let files = evt.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    this.previewBase64 = 'data:image/png;base64,' + btoa(binaryString);
  }

  ngOnInit() {
    console.log('Init');
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          return tageler;
        });
      });

    this.groupService
      .getGroups()
      .then((groups: Group[]) => {
        this.groups = this.groups = groups.map((group) => {
          if(!group.name) {
            group.name = 'default';
          }
          return group;
        });
      });
  }

  selectTageler(tageler: Tageler) {
    this.selectedTageler = tageler;
    this.selectedGroup = this.groups.find(x => x._id === tageler._id);
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
  }

  /***************************
   Manage buttons and forms
   **************************/
  showListOfGroups() {
    this.showGroups = true;
  }

  hideListOfGroups() {
    this.showGroups = false;
  }

  closeDetailsOfTageler() {
    this.view = false;
  }

  unselectSelectedGroups() {
    this.selectedGroup = null;
    this.showGroups = true;
    this.showTageler = true;
  }

  // set default title (TODO:picture)
  // if übungsfrei, or else delete it
  fillFree(e) {
    if (e.target.checked) {
      this.tagelerForm.controls['title'].setValue('Übungsfrei');
      this.previewBase64 = 'data:image/png;base64,' + this.defaultPicture;
    }else {
      this.tagelerForm.controls['title'].setValue('');
      // this.tagelerForm.controls['picture'].setValue('');
    }
  }

  showCreateTagelerForm() {
    this.tagelerForm.reset();
    let tageler: Tageler = {
      title: '',
      text: '',
      group: [''],
      start: new Date,
      end: new Date,
      bringAlong: '',
      uniform: '',
      picture: '',
      checkout: {
        deadline: new Date,
        contact: [{
          name: '',
          phone: '',
          mail: '',
          other: '',
        }]
      },
      free: false
    }
    this.tagelerForm = this.fb.group({
      title: '',
      text: '',
      group: [''],
      date_start: '',
      date_end: '',
      time_start: '14:00',
      time_end: '17:00',
      bringAlong: 'BPMSTZ und Zvieri',
      uniform: 'Uniform und Kravatte, dem Wetter angepasste Kleidung',
      picture: '',
      checkout: this.fb.group({
        deadline_date: Date,
        deadline_time: '',
        contact: this.fb.group({
          name: '',
          phone: '',
          mail: '',
          other: '',
        })
      }),
      free: false
    });
    this.previewBase64 = '';
    this.setNextSaturday();

    // By default, a newly-created tageler will have the selected state.
    this.selectTageler(tageler);

    // Hide other buttons and forms
    this.selectedGroup = null;
    this.showGroups = false;
    this.showTageler = false;
    this.createTageler = true;
    this.update = false;
    this.view = false;
  }

  cancelCreateTageler() {
    this.createTageler = false;
    this.showTageler = true;
    this.selectedTageler = null;
  }

  showUpdateForm(tageler: Tageler) {
    this.tageler = tageler;
    this.view = false;
    this.update = true;
    this.previewBase64 = 'data:image/png;base64,' + this.tageler.picture;
  }

  showDetailForm(tageler: Tageler) {
    this.tageler = tageler;
    this.view = true;
    this.update = false;
    this.previewBase64 = 'data:image/png;base64,' + this.tageler.picture;
  }

  /***************************
  Create & save new Tageler
   **************************/

  createForm() {
    this.tagelerForm = this.fb.group({
      title: '',
      text: '',
      group: [''],
      date_start: '',
      date_end: '',
      time_start: '',
      time_end: '',
      bringAlong: '',
      uniform: '',
      picture: '',
      checkout: this.fb.group({
        deadline_date: Date,
        deadline_time: '',
        contact: this.fb.group({
          name: '',
          phone: '',
          mail: '',
          other: '',
        })
      }),
      free: false
    });
  }


  setNextSaturday() {
    let sat = new Date;
    // sets the date to next saturday
    sat.setDate(sat.getDate() + (6 + 7 - sat.getDay()) % 7);
    this.tagelerForm.controls['date_start'].setValue(sat.toISOString().substr(0, 10));
    this.tagelerForm.controls['date_end'].setValue(sat.toISOString().substr(0, 10));
  }


  prepareSaveTageler(): Tageler {
      const saveTageler: Tageler = {
        title: this.tagelerForm.value.title as string,
        text: this.tagelerForm.value.text as string,
        group: [this.tagelerForm.value.group as string],
        // accept both . and :
        start: new Date(this.tagelerForm.value.date_start + 'T' + this.tagelerForm.value.time_start.replace('.', ':')),
        end: new Date(this.tagelerForm.value.date_end + 'T' + this.tagelerForm.value.time_end.replace('.', ':')),
        bringAlong: this.tagelerForm.value.bringAlong as string,
        uniform: this.tagelerForm.value.uniform as string,
        picture: this.base64textString as string,
        checkout : {
          deadline: new Date(this.tagelerForm.value.checkout.deadline_date + 'T' + this.tagelerForm.value.checkout.deadline_time.replace('.', ':')),
          contact: [{
            name: this.tagelerForm.value.checkout.contact.name as string,
            phone: this.tagelerForm.value.checkout.contact.phone as string,
            mail: this.tagelerForm.value.checkout.contact.mail as string,
            other: this.tagelerForm.value.checkout.contact.other as string,
          }]
        },
        free: this.tagelerForm.value.free as boolean
      };
    if (saveTageler.free) {
      saveTageler.start = new Date(this.tagelerForm.value.date_start + 'T00:00');
      saveTageler.end = new Date(this.tagelerForm.value.date_start + 'T24:00');
      saveTageler.uniform = 'free';
      saveTageler.bringAlong = 'free';
      if (typeof saveTageler.picture === 'undefined') {
        saveTageler.picture = this.defaultPicture.toString();
      }
    }else {
      // checkbox returns undefined if never checked or unchecked
      saveTageler.free = false;
    }
    this.selectedTageler = null;
    return saveTageler;
  }


  saveNewTageler() {
    this.tageler = this.prepareSaveTageler();
    this.createTageler = false;
    this.showTageler = true;
    this.tagelerService.createTageler(this.tageler).then(
      data => {
        let jsonData = JSON.parse(JSON.stringify(data));
        if (jsonData.success) {
          console.log('success: ' + jsonData.msg);
          this.createSuccess = true;
        } else {
          console.log('fail: ' + jsonData.msg);
          this.createSuccess = false;
        }
      },
      error => {
        console.log('Something went wrong');
      });
    this.tagelerForm.reset();
    // window.location.reload();
  }


  /***************************
   Update Tageler
   **************************/

  updateTageler() {
    this.tageler = this.prepareUpdateTageler();
    this.tagelerService.updateTageler(this.tageler);
    this.update = false;
    this.view = true;
  }

  prepareUpdateTageler(): Tageler {
    let freeUpdated, startUpdated, endUpdated, deadlineUpdated;
    if (this.tagelerForm.value.free == null) {
      freeUpdated = this.tageler.free;
    } else {
      freeUpdated = this.tagelerForm.value.free;
    }

    if (!this.tagelerForm.value.date_start && !this.tagelerForm.value.time_start) {
      startUpdated = this.tageler.start
    } else if(!this.tagelerForm.value.date_start && this.tagelerForm.value.time_start) {
      startUpdated = new Date(new Date(this.tageler.start).toISOString().slice(0, 10) + 'T' + this.tagelerForm.value.time_start.replace('.', ':'));
    } else if(this.tagelerForm.value.date_start && !this.tagelerForm.value.time_start) {
      startUpdated = new Date(this.tagelerForm.value.date_start + 'T' + new Date(this.tageler.start).toISOString().slice(11, 16));
    } else {
      startUpdated = new Date(this.tagelerForm.value.date_start + 'T' + this.tagelerForm.value.time_start.replace('.', ':'));
    }

    if (!this.tagelerForm.value.date_end && !this.tagelerForm.value.time_end) {
      endUpdated = this.tageler.end
    } else if(!this.tagelerForm.value.date_end && this.tagelerForm.value.time_end) {
      endUpdated = new Date(new Date(this.tageler.end).toISOString().slice(0, 10) + 'T' + this.tagelerForm.value.time_end.replace('.', ':'));
    } else if(this.tagelerForm.value.date_end && !this.tagelerForm.value.time_end) {
      endUpdated = new Date(this.tagelerForm.value.date_end + 'T' + new Date(this.tageler.end).toISOString().slice(11, 16));
    } else if (this.tagelerForm.value.date_end && this.tagelerForm.value.time_end) {
      endUpdated = new Date(this.tagelerForm.value.date_end + 'T' + this.tagelerForm.value.time_end.replace('.', ':'));
    }

    if (((this.tagelerForm.value.checkout.deadline_date == Date)) && !((this.tagelerForm.value.checkout.deadline_time == Date)) && !(this.tagelerForm.value.checkout.deadline_time)) {
      deadlineUpdated = this.tageler.checkout.deadline
    } else if(!(this.tagelerForm.value.checkout.deadline_date == Date) && !(this.tagelerForm.value.checkout.deadline_time == Date) && !(this.tagelerForm.value.checkout.deadline_time)) {
      deadlineUpdated = new Date(this.tagelerForm.value.checkout.deadline_date + 'T' + new Date(this.tageler.checkout.deadline).toISOString().slice(11, 16));
    } else if(((this.tagelerForm.value.checkout.deadline_date == Date)) && !((this.tagelerForm.value.checkout.deadline_time == Date)) && (this.tagelerForm.value.checkout.deadline_time)) {
      deadlineUpdated = new Date(new Date(this.tageler.checkout.deadline).toISOString().slice(0, 10) + 'T' + this.tagelerForm.value.checkout.deadline_time.replace('.', ':'));
    } else if (!(this.tagelerForm.value.checkout.deadline_date == Date) && !(this.tagelerForm.value.checkout.deadline_time == Date) && (this.tagelerForm.value.checkout.deadline_time)) {
      deadlineUpdated = new Date(this.tagelerForm.value.checkout.deadline_date + 'T' + this.tagelerForm.value.checkout.deadline_time.replace('.', ':'));
    }
    console.log(deadlineUpdated);

    const updateTageler: Tageler = {
      _id: this.tageler._id,
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      group: [this.tagelerForm.value.group as string],
      start: startUpdated,
      end: endUpdated,
      bringAlong: this.tagelerForm.value.bringAlong as string,
      uniform: this.tagelerForm.value.uniform as string,
      picture: this.base64textString as string,
      checkout : {
        deadline: deadlineUpdated,
        contact: [{
          name: this.tagelerForm.value.checkout.contact.name as string,
          phone: this.tagelerForm.value.checkout.contact.phone as string,
          mail: this.tagelerForm.value.checkout.contact.mail as string,
          other: this.tagelerForm.value.checkout.contact.other as string,
        }]
      },
      free: freeUpdated as boolean,
    };
    // keep old picture if no new one is selected
    if (this.base64textString === '') {
      updateTageler.picture = this.tageler.picture;
    }
    console.log(updateTageler.free);
    return updateTageler;
  }

  cancelUpdate() {
    this.update = false;
  }

  /***************************
   Delete Tageler
   **************************/
  deleteSelectedTageler(tageler: Tageler): void {
    this.tagelerService.deleteTageler(tageler._id);
    window.location.reload();
  }
}
