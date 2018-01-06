import { Component, Input, OnInit } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import { Group } from '../../groups/group';
import { GroupService } from '../../groups/group.service';

@Component({
  selector: 'tageler-component',
  templateUrl: './tageler.component.html',
  styleUrls: ['./tageler.component.css'],
})

export class TagelerComponent implements OnInit {
  groups: Group[];

  constructor(
    private groupService: GroupService,
  ) {}

  ngOnInit() {
    console.log("Init");

    this.groupService
      .getGroups()
      .then((groups: Group[]) => {
        this.groups = groups;
      });
  }
}
