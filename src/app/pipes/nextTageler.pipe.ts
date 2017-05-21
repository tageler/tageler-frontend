import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'nextTagelerFilter',
})

/*
 * This pipe filters all tagelers of one group by their date.
 * For each group, it returns the next upcoming tageler.
 */

export class NextTagelerPipe implements PipeTransform {

  // args is the name of a group (e.g. Baghira)
  transform(tagelers: Tageler[], args: any): any {
    let nextTageler: Tageler;

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

    // return the next upcoming tageler
    return tagelers.filter(tageler => tageler == nextTageler);
  }

}
