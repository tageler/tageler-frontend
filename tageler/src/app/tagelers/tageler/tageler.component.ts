import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';

import { Unit } from '../../units/unit';
import { UnitService } from '../../units/unit.service';


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
/*
  deleteTageler = (tagelerId: String) => {
    var idx = this.getIndexOfTageler(tagelerId);
    if (idx !== -1) {
      this.tagelers.splice(idx, 1);
      this.selectTageler(null);
    }
    return this.tagelers;
  }



  updateTageler = (tageler: Tageler) => {
    var idx = this.getIndexOfTageler(tageler._id);
    if (idx !== -1) {
      this.tagelers[idx] = tageler;
      this.selectTageler(tageler);
    }
    return this.tagelers;
  }
*/

/*
  createTageler(tageler: Tageler) {
    this.tagelerService.createTageler(tageler).then((newTageler: Tageler) => {
      this.addTageler(newTageler);
    });
  }

  updateTageler(tageler: Tageler): void {
    this.tagelerService.updateTageler(tageler).then((updatedTageler: Tageler) => {
      this.updateHandler(updatedTageler);
    });
  }

  deleteTageler(tagelerId: String): void {
    this.tagelerService.deleteTageler(tagelerId).then((deletedTagelerId: String) => {
      this.deleteHandler(deletedTagelerId);
    });
  }

  addTageler = (tageler: Tageler) => {
    this.tagelers.push(tageler);
    this.selectTageler(tageler);
    return this.tagelers;
  }
  */

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
      picture: "..//..//..//assets//images//testimage1.jpg"
    }
    return saveTageler;
  }

}
