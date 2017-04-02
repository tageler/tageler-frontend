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
  selectedTagelerUpdate: Tageler;
  selectedGroup: Group;
  showTageler = true;
  createSuccess: boolean;
  deleteSuccess: boolean;
  update: boolean;
  picFile: File;


  public title: string = 'Warning';
  public message: string = 'Do you want to delete this tageler?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public isOpen: boolean = false;

  public uploader:FileUploader = new FileUploader({url: URL});

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

  createForm() {
    this.tagelerForm = this.fb.group({
      title: '',
      text: '',
      group: [''],
      date_start: Date,
      date_end: Date,
      time_start: '',
      time_end: '',
      bring_along: '',
      uniform: '',
      picture: '',
      picture_file: '',
      checkout: this.fb.group({
        deadline: Date,
        contact: this.fb.group({
          name: '',
          phone: '',
          mail: '',
          other: '',
        })
      })
    });
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

  createNewTageler() {
    var tageler: Tageler = {
      title: '',
      text: '',
      group: ['ss'],
      start: new Date,
      end: new Date,
      bring_along: '',
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
      }
    };

// By default, a newly-created tageler will have the selected state.
    this.selectTageler(tageler);
    this.showTageler = false;
    this.update = false;
  }

  showAllTageler() {
    this.showTageler = true;
    this.update = false;
    this.selectedTageler = null;
  }

  onSubmit() {
    this.tageler = this.prepareSaveTageler();
    this.tagelerService.createTageler(this.tageler,this.picFile)
    .then(
      res =>{
        this.tageler = res;
        while (res._id)
        console.log("id: " + this.tageler._id); 
      }
    )
  }

  prepareSaveTageler(): Tageler {
    const saveTageler: Tageler= {
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      group: [this.tagelerForm.value.group as string],
      start: new Date(this.tagelerForm.value.date_start + 'T' + this.tagelerForm.value.time_start),
      end: new Date(this.tagelerForm.value.date_end + 'T' + this.tagelerForm.value.time_end),
      bring_along: this.tagelerForm.value.bring_along as string,
      uniform: this.tagelerForm.value.uniform as string,
      picture: this.tagelerForm.value.picture as string,
      picture_file: this.picFile,
      checkout : {
        deadline: this.tagelerForm.value.checkout.deadline as Date,
        contact: [{
          name: this.tagelerForm.value.checkout.contact.name as string,
          phone: this.tagelerForm.value.checkout.contact.phone as string,
          mail: this.tagelerForm.value.checkout.contact.mail as string,
          other: this.tagelerForm.value.checkout.contact.other as string,
        }]
      }
    }
    this.createSuccess = true;
    this.selectedTageler = null;
    return saveTageler;
  }

  deleteTageler(tageler: Tageler): void {
    this.tagelerService.deleteTageler(tageler._id);
    window.location.reload()
  }

  updateThisTageler(tageler: Tageler) {
    this.tageler = tageler;
    this.update= true;
  }

  updateTageler(tageler: Tageler): void {
    this.tagelerService.updateTageler(tageler, this.picFile);
    window.location.reload()
  }

  cancel() {
    this.update= false;

  }
}
