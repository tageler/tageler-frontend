import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit} from '@angular/core';
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

  tagelers: Tageler[];
  hasTagelers = false;
  group: Group;
  groupEvents = [];
  viewCalendar = false;
  showGroupDetailsComponent = false;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private tagelerService: TagelerService) {
  }

  ngOnInit() {
    console.log("Init Group Details");
    this.route.params
      .switchMap((params: Params) => this.groupService.getGroup(params['name']))
      .subscribe(
        (group: Group) => {
          this.group = group;
          this.tagelerService
            .getTagelerByGroupname(group.name)
            .then((tagelers: Tageler[]) => {
              this.tagelers = tagelers;
              if (tagelers.length > 0) {
                this.hasTagelers = true;
              }
            });
        }); 
  }

  /*
   * iCal
   */

  // downloads all tagelers from a group
  handleICal(group: Group) {
    this.group = group;
    let link = this.tagelerService.iCalForGroup(this.group.name);
    window.location.href=link;
  }

}
