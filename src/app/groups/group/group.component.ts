import { Component, Input, OnInit } from '@angular/core';
import { Tageler } from '../../tagelers/tageler';
import { TagelerService } from '../../tagelers/tageler.service';
import { Group } from '../../groups/group';
import { GroupService } from '../../groups/group.service';

@Component({
  selector: 'group-component',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})

export class GroupComponent implements OnInit {
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
