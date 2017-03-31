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
    tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    return tagelers.filter(tageler =>
      new Date(tageler.start).toLocaleDateString() == new Date().toLocaleDateString() &&
      (new Date(tageler.start).toLocaleTimeString().slice(0,2) + new Date(tageler.start).toLocaleTimeString().slice(3,5)) < (new Date().toLocaleTimeString().slice(0,2) + new Date().toLocaleTimeString().slice(3,5)) &&
      (new Date(tageler.end).toLocaleTimeString().slice(0,2) + new Date(tageler.end).toLocaleTimeString().slice(3,5)) >= (new Date().toLocaleTimeString().slice(0,2) + new Date().toLocaleTimeString().slice(3,5)));
  }
}
