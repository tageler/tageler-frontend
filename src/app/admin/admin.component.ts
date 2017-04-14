import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import { Tageler } from '../tagelers/tageler';
import { TagelerService } from '../tagelers/tageler.service';

import { Group } from '../groups/group';
import { GroupService } from '../groups/group.service';

import { ConfirmOptions, Position } from 'angular2-bootstrap-confirm';
import { Positioning } from 'angular2-bootstrap-confirm/position';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

//https://devcenter.heroku.com/articles/mean-apps-restful-api

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
  picFile: File;


  public title: string = 'Achtung';
  public message: string = 'Soll dieser Tageler wirklich gelöscht werden?';

  public uploader: FileUploader = new FileUploader({url: URL});

  @Input()
  tageler: Tageler;
  tagelerForm: FormGroup;

  constructor(
    private tagelerService: TagelerService,
    private groupService: GroupService,
    private fb: FormBuilder) {
    this.createForm();
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    console.log("New File!");
    console.log("it is: " + fileList[0].name);

    this.picFile = fileList[0];
  }

  ngOnInit() {
    console.log("Init");
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

  // this is probably evil
  fillFree(e) {
    if (e.target.checked) {
      this.tagelerForm.controls['title'].setValue('Übungsfrei');
      this.tagelerForm.controls['picture'].setValue('https://entradalissabon.files.wordpress.com/2012/12/freizeit.jpg');
    }else {
      this.tagelerForm.controls['title'].setValue('');
      this.tagelerForm.controls['picture'].setValue('');
    }
  }

  showCreateTagelerForm() {
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
    this.update= true;
  }

  showDetailForm(tageler: Tageler) {
    this.tageler = tageler;
    this.view = true;
    this.update = false;
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
      time_start: '14:00',
      time_end: '17:00',
      bringAlong: 'BPMSTZ und Zvieri',
      uniform: 'Uniform und Kravatte, dem Wetter angepasste Kleidung',
      picture: '',
      picture_file: '',
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
    this.setNextSaturday();
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
        picture: this.tagelerForm.value.picture as string,
        picture_file: this.picFile,
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
    }else {
      // checkbox returns undefined if never checked or unchecked
      saveTageler.free = false;
    }
    this.createSuccess = true;
    this.selectedTageler = null;
    return saveTageler;
  }


  saveNewTageler() {
    this.tageler = this.prepareSaveTageler();
    this.createTageler = false;
    this.showTageler = true;
    this.tagelerService.createTageler(this.tageler,this.picFile);
  }


  /***************************
   Update Tageler
   **************************/

  updateTageler() {
    this.tageler = this.prepareUpdateTageler();
    this.tagelerService.updateTageler(this.tageler, this.picFile);
    this.update = false;
    this.view = true;
  }

  prepareUpdateTageler(): Tageler {
    const updateTageler: Tageler= {
      _id: this.tageler._id,
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      group: [this.tagelerForm.value.group as string],
      start: new Date(this.tagelerForm.value.date_start + 'T' + this.tagelerForm.value.time_start),
      end: new Date(this.tagelerForm.value.date_end + 'T' + this.tagelerForm.value.time_end),
      bringAlong: this.tagelerForm.value.bringAlong as string,
      uniform: this.tagelerForm.value.uniform as string,
      picture: this.tagelerForm.value.picture as string,
      checkout : {
        deadline: new Date(this.tagelerForm.value.checkout.deadline_date + 'T' + this.tagelerForm.value.checkout.deadline_time),
        contact: [{
          name: this.tagelerForm.value.checkout.contact.name as string,
          phone: this.tagelerForm.value.checkout.contact.phone as string,
          mail: this.tagelerForm.value.checkout.contact.mail as string,
          other: this.tagelerForm.value.checkout.contact.other as string,
        }]
      },
      free: this.tagelerForm.value.free as boolean
    }
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
