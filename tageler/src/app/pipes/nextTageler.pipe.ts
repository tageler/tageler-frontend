import { Pipe, PipeTransform } from '@angular/core';
import {Tageler} from "../tagelers/tageler";

@Pipe({
  name: 'nextTagelerFilter',
})

export class NextTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[]): any {
    var nextTagelerDate: Date;
    if (tagelers==null) {
      return null;
    }
    tagelers = tagelers.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).filter(tageler =>
    new Date(tageler.date).toLocaleDateString() != new Date().toLocaleDateString());
    nextTagelerDate = new Date(tagelers[0].date);

    return tagelers.filter(tageler => new Date(tageler.date).toLocaleDateString() != nextTagelerDate.toLocaleDateString());
  }
}
