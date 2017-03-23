import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import { Tageler } from '../tagelers/tageler';
import { TagelerService } from '../tagelers/tageler.service';

import { Unit } from '../units/unit';
import { UnitService } from '../units/unit.service';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

//https://devcenter.heroku.com/articles/mean-apps-restful-api

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
  tagelers: Tageler[];
  units: Unit[];
  selectedTageler: Tageler;
  selectedTagelerUpdate: Tageler;
  selectedUnit: Unit;
  showTageler = true;
  createSuccess: boolean;
  deleteSuccess: boolean;
  update: boolean;

  public uploader:FileUploader = new FileUploader({url: URL});

  @Input()
  tageler: Tageler;
  tagelerForm: FormGroup;

  constructor(
    private tagelerService: TagelerService,
    private unitService: UnitService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.tagelerForm = this.fb.group({
      title: '',
      text: '',
      date: '',
      unit: '',
      start: '',
      end: '',
      bring_along: '',
      uniform: '',
      picture: '',
      checkout_deadline: ''
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

    this.unitService
      .getUnits()
      .then((units: Unit[]) => {
        this.units = this.units = units.map((unit) => {
          if(!unit.name) {
            unit.name = 'default';
          }
          return unit;
        });
      });
  }

  selectTageler(tageler: Tageler) {
    this.selectedTageler = tageler;
    this.selectedUnit = this.units.find(x => x._id === tageler._id);
  }

  createNewTageler() {
    var tageler: Tageler = {
      title: '',
      text: '',
      date: '',
      unit: '',
      start: '',
      end: '',
      bring_along: '',
      uniform: '',
      picture: '',
      checkout_deadline: ''
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
    this.tagelerService.createTageler(this.tageler);
  }

  prepareSaveTageler(): Tageler {
    const saveTageler: Tageler= {
      title: this.tagelerForm.value.title as string,
      text: this.tagelerForm.value.text as string,
      date: this.tagelerForm.value.date,
      unit: this.tagelerForm.value.unit as string,
      start: this.tagelerForm.value.start as string,
      end: this.tagelerForm.value.end as string,
      bring_along: this.tagelerForm.value.bring_along as string,
      uniform: this.tagelerForm.value.uniform as string,
      checkout_deadline: this.tagelerForm.value.checkout_deadline,
      picture: this.tagelerForm.value.picture as string,
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
    this.tagelerService.updateTageler(tageler);
    window.location.reload()
  }
}
