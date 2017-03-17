import { Component, OnInit } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'tageler-list',
  templateUrl: './tageler-list.component.html',
  styleUrls: ['./tageler-list.component.css'],
  providers: [TagelerService]
})

export class TagelerListComponent implements OnInit {

  tagelers: Tageler[];
  tageler: Tageler;
  selectedTageler: Tageler;

  constructor(private tagelerService: TagelerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        // this.tagelers = tagelers;
        this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
            tageler.title = 'default';
          }
          return tageler;
        });
      });
  }

  deleteTageler(tageler: Tageler): void {
    this.tagelerService.deleteTageler(tageler._id);
    window.location.reload()
  }
}
