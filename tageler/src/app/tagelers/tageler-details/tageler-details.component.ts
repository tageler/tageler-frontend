import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit} from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import {Params, ActivatedRoute } from '@angular/router';
import {UnitService} from "../../units/unit.service";
import { Unit } from '../../units/unit';

@Component({
  selector: 'tageler-details',
  templateUrl: './tageler-details.component.html',
  styleUrls: ['./tageler-details.component.css'],
  providers: [TagelerService]
})

export class TagelerDetailsComponent implements OnInit {
  @Input()
  tageler: Tageler;
  tagelers: Tageler[];
  units: Unit[];

  constructor(
    private tagelerService: TagelerService,
    private unitService: UnitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* Ramona*/

    console.log("Init Details");
    this.route.params
      .switchMap((params: Params) => this.tagelerService.getTageler(params['id']))
      .subscribe(tageler => this.tageler = tageler);

    this.unitService
      .getUnits()
      .then((units: Unit[]) => {
        this.units = this.units = units.map((unit) => {
          if(!unit.name) {
            unit.name = 'default';
          }
          return unit;
        });
      });
  };
}
