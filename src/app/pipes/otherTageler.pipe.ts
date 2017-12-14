import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'otherTagelerFilter',
})

/*
 * This pipe filters all tagelers of one group by their date.
 * For each group, it returns an array of all upcoming tagelers
 * but without the next upcoming tagelers.
 */

export class OtherTagelerPipe implements PipeTransform {

  // args is the name of a group (e.g. Baghira)
  transform(tagelers: Tageler[], args: any): any {
    let nextTageler: Tageler;

    if (tagelers==null) {
      return null;
    }

    // sort tagelers by date
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort(
          (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.end).toISOString() >= new Date().toISOString()
          && tageler.group.toString().includes(args.name)
        );
    } else {
      tagelers = tagelers.filter(
        tageler => new Date(tageler.end).toISOString() >= new Date().toISOString()
        && tageler.group.toString().includes(args.name)
      );
    }

    // get next tageler
    nextTageler = tagelers[0];

    // return all tagelers that start after the next tageler
    return tagelers.filter(
      tageler => new Date(tageler.start) >= new Date(nextTageler.start)
      && tageler != nextTageler
    );
  }
}
