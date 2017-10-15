import { Component, Input } from '@angular/core';
import { Tageler } from '../tageler';

@Component({
  selector: 'tageler-small-card',
  templateUrl: './tageler-small-card.component.html',
  styleUrls: ['./tageler-small-card.component.css'],
})

export class TagelerSmallCardComponent {

  @Input() tageler: Tageler;

  }
