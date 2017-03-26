import { Pipe, PipeTransform } from '@angular/core';
import {Tageler} from "../tagelers/tageler";

@Pipe({
  name: 'currentTagelerFilter',
})

export class CurrentTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[]): any {
    if (tagelers==null) {
      return null;
    }
    tagelers.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return tagelers.filter(tageler =>
      new Date(tageler.date).toLocaleDateString() == new Date().toLocaleDateString() &&
      (tageler.start.slice(0,2) + tageler.start.slice(3,5)) < (new Date().toLocaleTimeString().slice(0,2) + new Date().toLocaleTimeString().slice(3,5)) &&
      (tageler.end.slice(0,2) + tageler.end.slice(3,5)) >= (new Date().toLocaleTimeString().slice(0,2) + new Date().toLocaleTimeString().slice(3,5)));
  }
}
