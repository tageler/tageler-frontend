import { Pipe, PipeTransform } from '@angular/core';
import { Tageler } from "../tagelers/tageler";

@Pipe({
  name: 'tagelerByGroup',
})

export class TagelerByGroup implements PipeTransform {
  transform(tagelers: Tageler[], args: any): any {
    if (tagelers==null) {
      return null;
    }
    if (!args) {
      return tagelers;
    }
    console.log(tagelers.filter(tageler => tageler.group == args.name));
    return tagelers.filter(tageler => tageler.group == args.name);
  }
}
