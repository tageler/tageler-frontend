import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import { Params, ActivatedRoute } from '@angular/router';
import { GroupService } from "../../groups/group.service";
import { Group } from '../../groups/group';

@Component({
  selector: 'tageler-details',
  templateUrl: './tageler-details.component.html',
  styleUrls: ['./tageler-details.component.css'],
})

export class TagelerDetailsComponent implements OnInit {
  @Input()
  tageler: Tageler;
  tagelers: Tageler[];
  groups: Group[];

  constructor(
    private tagelerService: TagelerService,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("Init Details");
    this.route.params
      .switchMap((params: Params) => this.tagelerService.getTageler(params['id']))
      .subscribe(tageler => this.tageler = tageler);


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
  };

  handleICal(tageler: Tageler) {
    this.tageler = tageler;
    console.log(this.tageler._id);
    this.tagelerService.iCalForTageler(this.tageler);
    console.log('TagelerService called');
  }
}
