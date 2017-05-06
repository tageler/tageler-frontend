import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'otherTagelerFilter',
})

export class OtherTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    var nextTageler: Tageler;
    if (tagelers==null) {
      return null;
    }
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start).toISOString().slice(0, 10) >= new Date().toISOString().slice(0, 10) && tageler.group.toString().includes(args.name));
    } else {
      tagelers = tagelers.filter(tageler => new Date(tageler.start).toISOString().slice(0, 10) >= new Date().toISOString().slice(0, 10) && tageler.group.toString().includes(args.name));
    }
    nextTageler = tagelers[0];

    return tagelers.filter(tageler => new Date(tageler.start) > new Date(nextTageler.start));
  }
}
