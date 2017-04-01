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
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    } else {
      tagelers = tagelers.filter(tageler => new Date(tageler.start) == new Date());
    }

    return tagelers.filter(tageler =>
      (new Date(tageler.start) <= new Date() && new Date(tageler.end) >= new Date()));
  }
}
