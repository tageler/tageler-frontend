import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { Tageler } from '../../tagelers/tageler';
import { TagelerService } from '../../tagelers/tageler.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UnitService} from "../unit.service";
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-details',
  templateUrl: 'unit-details.component.html',
  styleUrls: ['unit-details.component.css'],
})

export class UnitDetailsComponent implements OnInit {
  @Input()
  unit: Unit;
  tageler: Tageler;
  tagelers: Tageler[];

  constructor(
    private unitService: UnitService,
    private tagelerService: TagelerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("Init Details");
    this.route.params
      .switchMap((params: Params) => this.unitService.getUnit(params['id']))
      .subscribe(unit => this.unit = unit);

    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          return tageler;
        });
      });
  }
}
