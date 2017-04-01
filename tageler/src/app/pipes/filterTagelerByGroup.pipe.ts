import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'tagelerFilter',
})

export class FilterTagelerByGroupPipe implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    if (tagelers==null) {
      return null;
    }
    return tagelers.filter(tageler => tageler.group == args.name);
  }
}
