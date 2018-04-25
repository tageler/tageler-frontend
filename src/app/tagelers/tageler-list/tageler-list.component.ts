import { Component, OnInit } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';

@Component({
  selector: 'tageler-list',
  templateUrl: './tageler-list.component.html',
  styleUrls: ['./tageler-list.component.css'],
})

export class TagelerListComponent implements OnInit {

  tagelers: Tageler[];

  constructor(
    private tagelerService: TagelerService) {}

  ngOnInit() {
    console.log("Init TagelerList");
    this.tagelerService
      .getActiveTagelers()
      .then((tagelers: Tageler[]) => {
        this.tagelers = tagelers;
      });
  }
}
