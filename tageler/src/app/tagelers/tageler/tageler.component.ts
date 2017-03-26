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
  tagelers: Tageler[];
  units: Unit[];



  @Input()
  tageler: Tageler;

  constructor(
    private tagelerService: TagelerService,
    private unitService: UnitService,
  ) {}

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers
        this.tagelers.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        tagelers.map((tageler) => {
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
          if (!unit.name) {
            unit.name = 'default';
          }
          return unit;
        });
      });
  }
}
