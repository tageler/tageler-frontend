import { Component, Input } from '@angular/core';

import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import { TagelerDetailsComponent } from '../tageler-details/tageler-details.component';
// import 'rxjs/Rx'; //this sadlydoes not help...
//https://devcenter.heroku.com/articles/mean-apps-restful-api
@Component({
  selector: 'tageler-component',
  templateUrl: './tageler.component.html',
  styleUrls: ['./tageler.component.css'],
  providers: [TagelerService]
})

export class TagelerComponent {
  success: boolean;
  tagelers: Tageler[];
  selectedTageler: Tageler;

  @Input()
  tageler: Tageler;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private tagelerService: TagelerService) { }

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        // this.tagelers = tagelers;
        this.tagelers =  this.tagelers =  tagelers.map((tageler) => {
          if (!tageler.title){
            tageler.title = 'default';
          }
          return tageler;
        });
      });
  }

  private getIndexOfTageler = (tagelerId: String) => {
    return this.tagelers.findIndex((tageler) => {
      return tageler._id === tagelerId;
    });
  }

  selectTageler(tageler: Tageler) {
    this.selectedTageler = tageler;
  }

  createNewTageler() {
    var tageler: Tageler = {
      title: '',
      unit: '',
      start: '',
      end: '',
      bring_along: '',
      uniform: '',
      picture: '',
      checkout_deadline: ''
    };

// By default, a newly-created tageler will have the selected state.
    this.selectTageler(tageler);
  }
/*
  deleteTageler = (tagelerId: String) => {
    var idx = this.getIndexOfTageler(tagelerId);
    if (idx !== -1) {
      this.tagelers.splice(idx, 1);
      this.selectTageler(null);
    }
    return this.tagelers;
  }

  addTageler = (tageler: Tageler) => {
    this.tagelers.push(tageler);
    this.selectTageler(tageler);
    return this.tagelers;
  }

  updateTageler = (tageler: Tageler) => {
    var idx = this.getIndexOfTageler(tageler._id);
    if (idx !== -1) {
      this.tagelers[idx] = tageler;
      this.selectTageler(tageler);
    }
    return this.tagelers;
  }
*/

  createTageler(tageler: Tageler) {
    this.tagelerService.createTageler(tageler).then((newTageler: Tageler) => {
      this.createHandler(newTageler);
    });
    this.success = true;
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

}
