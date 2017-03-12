import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { Tageler } from '../tageler';
import { TagelerService } from '../tageler.service';
import {Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tageler-details',
  templateUrl: './tageler-details.component.html',
  styleUrls: ['./tageler-details.component.css'],
  providers: [TagelerService]
})

export class TagelerDetailsComponent {
  @Input()
  tageler: Tageler;
  tagelers: Tageler[];

  constructor(
    private tagelerService: TagelerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* Ramona*/

    console.log("Init Details");
    this.route.params
      .switchMap((params: Params) => this.tagelerService.getTagelerById(params['id']))
      .subscribe(tageler => this.tageler = tageler);

    /* Balz*/
    /*
    let id = this.route.snapshot.params['id'];
    console.log("Initss" + id);

    this.tagelerService.getTagelerById(id).then((tageler:Tageler) => {
      this.tageler = tageler;

    });

    */
    

      // .subscribe(tageler => function(tageler){
      //   console.log('new tageler');
      //     this.tageler = tageler;
      // });

    /*this.route.params
      .switchMap((params: Params) => this.tagelerService.getTagelerById(id))
      .subscribe(tageler => this.tageler = tageler);
*/
  };

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
