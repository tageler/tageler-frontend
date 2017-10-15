import { Component, Input } from '@angular/core';
import { Tageler } from '../tageler';

@Component({
  selector: 'tageler-large-card',
  templateUrl: './tageler-large-card.component.html',
  styleUrls: ['./tageler-large-card.component.css'],
})

export class TagelerLargeCardComponent {

  @Input() tageler: Tageler;

}
