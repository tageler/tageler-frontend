import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'tagelerByDate',
})

/*
 * This pipe filters all tagelers by their date.
 * It returns an array of tagelers that is sorted
 * by dates
 */

export class TagelerByDate implements PipeTransform {

  transform(tagelers: Tageler[]): any {

    if (tagelers==null) {
      return null;
    }

    // if group is null and tagelers have different dates, return all tagelers sorted
    if ((tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null) {
      return tagelers.sort(
          (a,b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.end).toISOString() >= new Date().toISOString()
        );
    }

    // if group is null and tagelers have same dates, return all tagelers sorted
    if ((tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) == null) {
      return tagelers.sort(
          (a,b) => (new Date(a.start).getTime() + 1) - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.end).toISOString() >= new Date().toISOString()
        );
    }

  }
}
