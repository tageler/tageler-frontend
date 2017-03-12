import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';
//import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {
  units: Unit[];
  unit: Unit;

  constructor(
    private unitService: UnitService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("Init");
    this.unitService
      .getUnits()
      .then((units: Unit[]) => {
        this.units = units.map((unit) => {
          if (!unit.name){
            unit.name = 'default';
          }
          return unit;
        });
      });
  }

}
