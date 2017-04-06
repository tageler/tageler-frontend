import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';
//import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: 'group-list.component.html',
  styleUrls: ['group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[];
  // unit: Unit;

  constructor(
    private groupService: GroupService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("Init");
    this.groupService
      .getGroups()
      .then((groups: Group[]) => {
        this.groups = groups.map((group) => {
          if (!group.name){
            group.name = 'default';
          }
          return group;
        });
      });
  }

}
