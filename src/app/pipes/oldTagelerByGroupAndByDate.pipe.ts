import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'oldTagelerByGroupAndByDate',
})

export class OldTagelerByGroupAndByDate implements PipeTransform {

  // args is the name of a group (e.g. Baghira)
  transform(tagelers: Tageler[], args: any): any {

    if (tagelers==null) {
      return null;
    }

    // if group is null and tagelers have different dates, return all tagelers sorted
    if (!args && ((tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null)) {
      return tagelers.sort(
          (a,b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.end).toISOString() < new Date().toISOString()
        );
    }

    // if group is null and tagelers have same dates, return all tagelers sorted
    if (!args && ((tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) == null)) {
      return tagelers.sort(
          (a,b) => (new Date(a.start).getTime() + 1) - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.start).toISOString() < new Date().toISOString()
        );
    }

    // if group is not null and tagelers have different dates, return all tagelers of that group in sorted order
    if ( args && (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      return tagelers.sort(
          (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.start).toISOString() < new Date().toISOString()
          && tageler.group.toString().includes(args.name)
        );
    }

    // if group is not null and tagelers have same dates, return all tagelers of that group in sorted order
    if ( args && (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) == null ) {
      return tagelers.sort(
          (a, b) => (new Date(a.start).getTime() + 1) - new Date(b.start).getTime()
        )
        .filter(
          tageler => new Date(tageler.start).toISOString() < new Date().toISOString()
          && tageler.group.toString().includes(args.name)
        );
    }
  }
}
