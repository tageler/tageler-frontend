import 'rxjs/add/operator/switchMap';
import {Component, group, Input, OnInit} from '@angular/core';
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
  groupEvents = [];
  viewCalendar = false;

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
        this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          if (tageler.group.toString().includes(this.group.name)) {
            this.groupEvents.push({title: tageler.title, start: tageler.start})
          }
          return tageler;
        });
      });
  }

  handleICal(group: Group) {
    this.group = group;
    let link = this.tagelerService.iCalForGroup(this.group.name);
    window.location.href=link;
  }

  calendarOptions:Object = {
    height: 500,
    fixedWeekCount : false,
    defaultDate: new Date,
    locale: 'de-CH',
    timezone: 'local',
    timeFormat: 'hh:mm',
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch',
      'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'],
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
      'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan.', 'Febr.', 'März', 'Apr.', 'Mai', 'Juni',
      'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    buttonText: {
      today:    'Heute',
      month:    'Monat',
      week:     'Woche',
      day:      'Tag',
      list:     'Liste'
    },
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: this.groupEvents,
  };

  handleCalendarView() {
    this.viewCalendar = !this.viewCalendar;
  }
}
