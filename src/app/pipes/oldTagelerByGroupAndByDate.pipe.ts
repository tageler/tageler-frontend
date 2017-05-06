import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'oldTagelerByGroupAndByDate',
})

export class OldTagelerByGroupAndByDate implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    if (tagelers==null) {
      return null;
    }
    if (!args) {
      return tagelers.sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start) < new Date());
    }
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      return tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .filter(tageler => new Date(tageler.start) < new Date()&& tageler.group == args.name);
    }
    return tagelers.filter(tageler => new Date(tageler.start) < new Date() && tageler.group == args.name);
  }
}
