import { Pipe, PipeTransform } from '@angular/core';
import {Tageler} from "../tagelers/tageler";

@Pipe({
  name: 'tagelerDateFilter',
})

export class SameDateTagelerPipe implements PipeTransform {
  transform(tagelers: Tageler[]): any {
    var nextTagelerDate: Date;
    if (tagelers==null) {
      return null;
    }

    tagelers.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    nextTagelerDate = new Date(tagelers[0].date);

    return tagelers.filter(tageler => new Date(tageler.date).toLocaleDateString() == nextTagelerDate.toLocaleDateString());
  }
}
