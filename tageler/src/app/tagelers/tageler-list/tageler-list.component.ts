import { Component, OnInit } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { TagelerDetailsComponent } from '../tageler-details/tageler-details.component';
// import 'rxjs/Rx'; //this sadlydoes not help...
//https://devcenter.heroku.com/articles/mean-apps-restful-api
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

  constructor(
    private tagelerService: TagelerService,
    private route: ActivatedRoute
) {}

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        // this.tagelers = tagelers;
        this.tagelers =  tagelers.map((tageler) => {
          if (!tageler.title){
            tageler.title = 'default';
          }
          return tageler;
        });
      });
  }

  /*
  gotoDetail(tageler: Tageler): Tageler {
    this.tagelerService.getTagelerById(this.tageler._id).then((tageler:Tageler) => {
      this.tageler = tageler;
    });
    return this.tageler;
  }

  selectTageler(tageler: Tageler) {
    this.selectedTageler = tageler;
  }



/*
  tagelers: Tageler[];
  selectedTageler: Tageler;

  constructor(private tagelerService: TagelerService) {
  }

  ngOnInit() {
    console.log("Init");
    this.tagelerService
      .getTagelers()
      .then((tagelers: Tageler[]) => {
        // this.tagelers = tagelers;
        this.tagelers = this.tagelers = tagelers.map((tageler) => {
          if (!tageler.title) {
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
    this.selectedTageler = tageler
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
}
