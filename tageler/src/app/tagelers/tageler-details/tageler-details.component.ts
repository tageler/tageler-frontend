import { Component, Input } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';

@Component({
  selector: 'tageler-details',
  templateUrl: './tageler-details.component.html',
  styleUrls: ['./tageler-details.component.css']
})

export class TagelerDetailsComponent {
  @Input()
  tageler: Tageler;

  /*
  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private tagelerService: TagelerService) {}

  createTageler(tageler: Tageler) {
    this.tagelerService.createTageler(tageler).then((newTageler: Tageler) => {
      this.createHandler(newTageler);
    });
  }

  updateTageler(tageler: Tageler): void {
    this.tagelerService.updateTageler(tageler).then((updatedTageler: Tageler) => {
      this.updateHandler(updatedTageler);
    });
  }

  deleteTageler(tagelerId: String): void {
    this.tagelerService.deleteTageler(tagelerId).then((deletedTagelerId: String) => {
      this.deleteHandler(deletedTagelerId);
    });
  }
  */
}
