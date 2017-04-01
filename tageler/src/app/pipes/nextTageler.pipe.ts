import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'nextTagelerFilter',
})

export class NextTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[]): any {
    var nextTagelerDate: Date;
    if (tagelers==null) {
      return null;
    }
    if ( (tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())) != null ) {
      tagelers = tagelers.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()).filter(tageler =>
      new Date(tageler.start).toLocaleDateString() > new Date().toLocaleDateString())
    } else {
      tagelers = tagelers;
    }
    nextTagelerDate = new Date(tagelers[0].start);

    return tagelers.filter(tageler => new Date(tageler.start).toLocaleDateString() != nextTagelerDate.toLocaleDateString());
  }
}
