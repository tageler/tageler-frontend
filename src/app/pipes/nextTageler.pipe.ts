import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'nextTagelerFilter',
})

export class NextTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    var nextTageler: Tageler;
    if (tagelers==null) {
      return null;
    }
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start) >= new Date() && tageler.group == args.name);
    } else {
      tagelers = tagelers.filter(tageler => new Date(tageler.start) >= new Date() && tageler.group == args.name);
    }
    nextTageler = tagelers[0];
    return tagelers.filter(tageler => tageler == nextTageler);
  }
}