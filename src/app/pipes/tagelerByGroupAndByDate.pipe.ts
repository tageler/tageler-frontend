import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'tagelerByGroupAndByDate',
})

export class TagelerByGroupAndByDate implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    if (tagelers==null) {
      return null;
    }
    if (!args) {
      return tagelers.sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start).getDate() >= new Date().getDate());
    }
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      return tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start).getDate() >= new Date().getDate() && tageler.group == args.name);
    }
    return tagelers.filter(tageler => new Date(tageler.start).getDate() >= new Date().getDate() && tageler.group == args.name);
  }
}
