import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';

import { Group } from '../../groups/group';
import { GroupService } from '../../groups/group.service';

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
  groups: Group[];


  @Input()
  tageler: Tageler;

  constructor(
    private tagelerService: TagelerService,
    private groupService: GroupService,
  ) {}

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers
        this.tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        tagelers.map((tageler) => {
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
          if (!group.name) {
            group.name = 'default';
          }
          return group;
        });
      });
  }
}
