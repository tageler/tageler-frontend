import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'otherTagelerFilter',
})

export class OtherTagelerPipe implements PipeTransform {

  // args is the name of a group (e.g. Baghira)
  transform(tagelers: Tageler[], args: any): any {
    var nextTageler: Tageler;

    if (tagelers==null) {
      return null;
    }

    // sort tagelers by date
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start).toISOString().slice(0, 10) >= new Date().toISOString().slice(0, 10) && tageler.group.toString().includes(args.name));
    } else {
      tagelers = tagelers.filter(tageler => new Date(tageler.start).toISOString().slice(0, 10) >= new Date().toISOString().slice(0, 10) && tageler.group.toString().includes(args.name));
    }

    // get next tageler
    nextTageler = tagelers[0];

    // return all tagelers that start after the next tageler
    return tagelers.filter(tageler => new Date(tageler.start) >= new Date(nextTageler.start) && tageler != nextTageler);
  }
}
