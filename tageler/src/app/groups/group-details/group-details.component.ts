import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { Tageler } from '../../tagelers/tageler';
import { TagelerService } from '../../tagelers/tageler.service';
import { Params, ActivatedRoute } from '@angular/router';
import { GroupService} from "../group.service";
import { Group } from '../group';


@Component({
  selector: 'app-group-details',
  templateUrl: 'group-details.component.html',
  styleUrls: ['group-details.component.css'],
})

export class GroupDetailsComponent implements OnInit {
  @Input()
  tageler: Tageler;
  tagelers: Tageler[];
  group: Group;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private tagelerService: TagelerService) {
  }

  ngOnInit() {
    console.log("Init Details");
    this.route.params
      .switchMap((params: Params) => this.groupService.getGroup(params['id']))
      .subscribe(group => this.group = group);

    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers;
        this.tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          return tageler;
        });
      });
  }
}
