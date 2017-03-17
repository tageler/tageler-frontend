import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';

import { Unit } from '../../units/unit';
import { UnitService } from '../../units/unit.service';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

//https://devcenter.heroku.com/articles/mean-apps-restful-api

@Component({
  selector: 'tageler-component',
  templateUrl: './tageler.component.html',
  styleUrls: ['./tageler.component.css'],
})

export class TagelerComponent implements OnInit {
  success: boolean;
  tagelers: Tageler[];
  units: Unit[];
  selectedTageler: Tageler;
  selectedUnit: Unit;
  public uploader:FileUploader = new FileUploader({url: URL});

  @Input()
  tageler: Tageler;


  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;
  /*
  * Test new form
   */
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
        // this.tagelers = tagelers;
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

  private getIndexOfTageler = (tagelerId: String) => {
    return this.tagelers.findIndex((tageler) => {
      return tageler._id === tagelerId;
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
  }
  
  onSubmit() {
    this.tageler = this.prepareSaveTageler();
    this.tagelerService.createTageler(this.tageler);
  }

  prepareSaveTageler(): Tageler {
    const saveTageler: Tageler= {
      title: this.tagelerForm.value.title as string,
      date: this.tagelerForm.value.date,
      unit: this.tagelerForm.value.unit as string,
      start: this.tagelerForm.value.start as string,
      end: this.tagelerForm.value.end as string,
      bring_along: this.tagelerForm.value.bring_along as string,
      uniform: this.tagelerForm.value.uniform as string,
      checkout_deadline: this.tagelerForm.value.checkout_deadline,
      picture: this.tagelerForm.value.picture as string,
    }
    return saveTageler;
  }

}
